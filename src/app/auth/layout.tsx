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
  return <div className='bg-gray-500 min-h-dvh'>{children}</div>;
}
