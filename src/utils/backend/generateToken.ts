import jsonwebtoken from 'jsonwebtoken';

const ACCESS_TOKEN = process.env.ACCESS_TOKEN || 'de$Egd%we3e%eGut^rdcFer3tr&adsP$3mrp';

interface IUser {
	username: string;
	password: string;
}

const generateToken = (user: IUser) => {
	const token = jsonwebtoken.sign(user, ACCESS_TOKEN);
	return token;
};

export default generateToken;
