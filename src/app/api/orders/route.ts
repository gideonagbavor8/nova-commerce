import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    const body = await request.json();

    const newOrder = await prisma.order.create({
        data: {
            userId: '1', // Default admin user for now, or match existing
            total: body.total,
            status: 'PENDING',
            items: {
                create: body.items.map((item: any) => ({
                    productId: item.id,
                    quantity: item.quantity,
                    price: item.price
                }))
            }
        },
        include: {
            items: true
        }
    });

    return NextResponse.json(newOrder);
}

export async function GET() {
    const orders = await prisma.order.findMany({
        include: {
            items: true
        }
    });
    return NextResponse.json(orders);
}
