import Link from 'next/link';

interface Props {
  href: string;
  label: string;
  icon: JSX.Element;
}

export const SidebarLink = ({ href, label, icon }: Props) => {
  return (
    <Link
      href={href}
      className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
      {icon}
      <span className='ml-3 text-xl'>{label}</span>
    </Link>
  );
};
