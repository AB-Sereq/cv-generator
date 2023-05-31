import '../styles/main.scss';
import { Work_Sans } from 'next/font/google';

const font = Work_Sans({ subsets: ['latin'] });

export const metadata = {
	title: 'CV Generator',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	);
}
