import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Teslo | Shop',
	description: 'Tienda virtual de productos',
};

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex justify-center'>
			<div className='w-full sm:w-[350px] px-10'> {children}</div>
		</div>
	);
}
