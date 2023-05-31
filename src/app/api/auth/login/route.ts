import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

import dbConnection from '@/db/dbConnection';

import userModel from '@/db/models/user-model';

import generateToken from '@/utils/backend/generateToken';

export const POST = async (req: NextRequest) => {
	dbConnection();

	const { username, password } = await req.json();

	const user = await userModel.findOne({ username });

	if (!user) return NextResponse.json({ communicate: 'Użytkownik nie istnieje.' });

	if (bcrypt.compareSync(password, user.password)) {
		const token = generateToken({ username, password });

		return NextResponse.json({ user, token });
	} else {
		return NextResponse.json({ communicate: 'Błędne hasło.' });
	}
};
