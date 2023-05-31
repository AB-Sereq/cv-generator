import mongoose, { Document, Schema } from 'mongoose';
import bcrypt, { hash } from 'bcrypt';

export interface IUser {
	email: string;
	username: string;
	password: string;
}

export interface IUserModel extends IUser, Document {}

const userSchema: Schema = new Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		firstName: {
			type: String,
			required: false,
			trim: true,
		},
		lastName: {
			type: String,
			required: false,
			trim: true,
		},
		sex: {
			type: String,
			required: false,
			trim: true,
		},
		citizenship: {
			type: String,
			required: false,
			trim: true,
		},
		dateOfBirts: {
			type: Date,
			required: false,
			trim: true,
		},
		birthplace: {
			type: String,
			required: false,
			trim: true,
		},
		email: {
			type: String,
			required: false,
			trim: true,
		},
		phone: {
			type: String,
			required: false,
			trim: true,
		},
		address: {
			type: String,
			required: false,
			trim: true,
		},
		city: {
			type: String,
			required: false,
			trim: true,
		},
		photoName: {
			type: String,
			required: false,
			trim: true,
		},
		certificate: {
			type: Array,
			required: false,
		},
		experience: {
			type: Array,
			required: false,
		},
		education: {
			type: Array,
			required: false,
		},
		courses: {
			type: Array,
			required: false,
		},
		abilities: {
			type: Array,
			required: false,
		},
		hobbies: {
			type: Array,
			required: false,
		},
		achievements: {
			type: Array,
			required: false,
		},
	},
	{ versionKey: false }
);

userSchema.path('password').set((password: string) => {
	const salt = bcrypt.genSaltSync(10);
	const hashPassword = bcrypt.hashSync(password, salt);
	return hashPassword;
});

export default mongoose.model<IUserModel>('User', userSchema);
