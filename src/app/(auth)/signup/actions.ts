'use server'
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';  

export async function signup (data: FormData) {
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const confirmPassword = data.get('confirm-password') as string;
    const fullName = data.get('name') as string;
    const street = data.get('street') as string;
    const city = data.get('city') as string;
    const state = data.get('state') as string;
    const postcode = data.get('postcode') as string;

    if (password !== confirmPassword) {
        throw new Error("Passwords do not match")
    }

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) throw new Error("User already exists")

    const username = fullName.replace(/\s+/g, '').toLowerCase() || email.split('@')[0]
    const hashed = await hashPassword(password)
    
    await prisma.user.create({
        data: {
        username,
        email,
        password: hashed,
        fullName,
        street,
        city,
        state,
        postcode,
        },
    })

    redirect("/login")
}