import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    if (request.method === 'GET') {
        try {
            const categories = await prisma.categories.findMany();
            return NextResponse.json(categories);
        } catch (error) {
            return (error);
        }
    } else {
        NextResponse.error();
    }
}