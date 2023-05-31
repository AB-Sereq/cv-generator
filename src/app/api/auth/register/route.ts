import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';

import dbConnection from '@/db/dbConnection';
import userModel from '@/db/models/user-model';

export const POST = async (req: NextRequest) => {
	dbConnection();

	const { username, password } = await req.json();
	const validation = await userModel.find({ username });

	if (validation.length === 0) {
		const newUser = new userModel({
			id: new Types.ObjectId(
			username,
			password,
		});
		newUser.save();

		return NextResponse.json({ communicate: 'Rejestracja udana.' });
	} else {
		return NextResponse.json({ communicate: 'Nazwa użytkownika jest zajęta' });
	}
};
