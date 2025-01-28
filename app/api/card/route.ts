import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    if (request.method === 'POST') {
        try {
            const products = await prisma.products.findMany();
            return NextResponse.json(products);
        } catch (error) {
            return (error);
        }
    } else {
        NextResponse.error();
    }
}