import { titleFont } from '@/config/fonts';
import { LoginForm } from './ui/LoginForm';

export default function LoginPage() {
	return (
		<section className='flex flex-col justify-center h-[calc(100dvh-2rem)] mb-8'>
			<h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>

			<LoginForm />
		</section>
	);
}
