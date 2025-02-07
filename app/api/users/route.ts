import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    if (request.method === 'GET') {
        try {
            const users = await prisma.user.findMany();
            return NextResponse.json(users);
        } catch (error) {
            return (error);
        }
    } else {
        NextResponse.error();
    }
}