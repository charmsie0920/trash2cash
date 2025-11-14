import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/auth";

const handler = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                //logic to find user in db and verify password
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.email }
                });
                if (!user) {
                throw new Error("No user found");
                }

                const isValid = await verifyPassword(credentials!.password, user.password);

                if (!isValid) {
                throw new Error("Invalid password");
                }


                return { 
                    id: String(user.id), 
                    email: user.email, 
                    name: user.fullName
                };
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
})

export { handler as GET, handler as POST };