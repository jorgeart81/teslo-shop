'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';

import { authenticate } from '@/actions';

export const LoginForm = () => {
	const [state, dispatch] = useFormState(authenticate, undefined);

	console.log({ state });
	return (
		<form action={dispatch} className='flex flex-col'>
			<label htmlFor='email'>Correo electrónico</label>
			<input
				id='email'
				type='email'
				name='email'
				placeholder='example@mail.com'
				className='px-5 py-2 border bg-gray-200 rounded mb-5'
			/>

			<label htmlFor='password'>Contraseña</label>
			<input
				id='password'
				name='password'
				type='password'
				placeholder='contraseña'
				className='px-5 py-2 border bg-gray-200 rounded mb-5'
			/>

			<button type='submit' className='btn-primary'>
				Ingresar
			</button>

			{/* divisor line */}
			<div className='flex items-center my-5'>
				<div className='flex-1 border-t border-gray-500'></div>
				<div className='px-2 text-gray-800'>O</div>
				<div className='flex-1 border-t border-gray-500'></div>
			</div>

			<Link href='/auth/register' className='btn-secondary text-center'>
				Crear una nueva cuenta
			</Link>
		</form>
	);
};
