import type { Metadata } from 'next';
import { Sidebar, TopMenu } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
      <div className='min-h-dvh sm:px-9'>{children}</div>
    </>
  );
}
