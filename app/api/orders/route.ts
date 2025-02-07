import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    if (request.method === 'GET') {
        try {
            const orders = await prisma.orders.findMany();
            return NextResponse.json(orders);
        } catch (error) {
            return (error);
        }
    } else {
        NextResponse.error();
    }
}