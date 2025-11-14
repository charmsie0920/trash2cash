import bcrypt from 'bcryptjs';

// Hash a password before storing it
export async function hashPassword(password: string) {
    const hashed = await bcrypt.hash(password, 10);
    return hashed;
}


// Verify an input password against a hashed password
export async function verifyPassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
}
