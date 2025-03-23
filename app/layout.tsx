import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import React from 'react';
import { Header } from '@/app/components';

const openSans = Open_Sans({
	variable: '--font-open-sans',
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '700'],
	display: 'swap',
	style: ['normal']
});

export const metadata: Metadata = {
	title: 'My_Blog',
	description: 'Добро пожаловать в Мой Блог',
	icons: { icon: './favicon.ico' }
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru" className={openSans.variable}>
			<body>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
