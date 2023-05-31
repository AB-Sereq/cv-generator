import { NextResponse } from 'next/server';
import dbConnection from '@/db/dbConnection';

export function GET() {
	dbConnection();
	console.log('działa');
	return NextResponse.json({ id: 2 });
}
