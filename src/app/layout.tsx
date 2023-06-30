import '../styles/main.scss';
import "../styles/global.css"
import { Work_Sans } from 'next/font/google';
import Providers from '@/components/other/Providers';

const font = Work_Sans({ subsets: ['latin'] });

export const metadata = {
	title: 'CV Generator',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
	  <html lang="en">
		<body>
		  <Providers>
			{children}
		  </Providers>
		</body>
	  </html>
	);
  }
