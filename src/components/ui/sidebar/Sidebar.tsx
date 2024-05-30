'use client';

import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from 'react-icons/io5';
import { SidebarLink } from './SidebarLink';

export const Sidebar = () => {
  return (
    <div className='relative'>
      {/* Background black */}
      <div className='fixed top-0 left-0 w-screen h-screen z-20 bg-black opacity-30'></div>

      {/* Blur */}
      <div className='fade-in fixed top-0 left-0 w-screen h-screen z-20 backdrop-filter backdrop-blur-sm'></div>

      {/* Sidemenu */}
      <nav className='fixed p-5 w-[500px] top-0 right-0 h-screen bg-white z-30 shadow-2xl transform transition-all duration-300 overflow-y-auto'>
        <IoCloseOutline
          size={40}
          className='absolute top-5 right-5 cursor-pointer'
          onClick={() => console.log('close nav')}
        />

        {/* Input */}
        <div className='relative mt-14'>
          <IoSearchOutline size={20} className='absolute top-2 left-2' />
          <input
            type='text'
            placeholder='Buscar'
            className='w-full bg-gray-50 rounded py-1 px-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
          />
        </div>

        {/* Menu */}
        <SidebarLink
          href='/'
          label='Perfil'
          icon={<IoPersonOutline size={30} />}
        />
        <SidebarLink
          href='/'
          label='Login'
          icon={<IoLogInOutline size={30} />}
        />
        <SidebarLink
          href='/'
          label='Logout'
          icon={<IoLogOutOutline size={30} />}
        />

        {/* Line separator */}
        <div className='w-full h-px bg-gray-200 my-10'></div>

        <SidebarLink
          href='/'
          label='Productos'
          icon={<IoShirtOutline size={30} />}
        />
        <SidebarLink
          href='/'
          label='Ordenes'
          icon={<IoTicketOutline size={30} />}
        />
        <SidebarLink
          href='/'
          label='Usuarios'
          icon={<IoPeopleOutline size={30} />}
        />
      </nav>
    </div>
  );
};
