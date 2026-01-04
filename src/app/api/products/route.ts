import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export async function GET() {
    const db = getDatabase();
    return NextResponse.json(db.products);
}
