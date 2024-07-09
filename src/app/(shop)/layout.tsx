import type { Metadata } from 'next';
import { Sidebar, TopMenu, Footer } from '@/components/ui';

export const metadata: Metadata = {
	title: { template: '%s - Teslo | Shop', default: 'Home - Teslo | Shop' },
	description: 'Una tienda virtual de productos',
};

export default function ShopLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<TopMenu />
			<Sidebar />
			<div className='px-3 sm:px-9'>{children}</div>
			<Footer />
		</>
	);
}
