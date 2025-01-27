
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    if (request.method === 'GET') {
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