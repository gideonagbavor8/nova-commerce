import { NextResponse } from 'next/server';
import { getDatabase, saveDatabase, Order } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
    const body = await request.json();
    const db = getDatabase();

    const newOrder: Order = {
        id: body.id || Math.random().toString(36).substr(2, 9),
        userId: body.userId || 'guest',
        items: body.items,
        total: body.total,
        status: 'PENDING',
        createdAt: new Date().toISOString()
    };

    db.orders.push(newOrder);
    saveDatabase(db);

    return NextResponse.json(newOrder);
}

export async function GET() {
    const db = getDatabase();
    return NextResponse.json(db.orders);
}
