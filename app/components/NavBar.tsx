'use client';
import Image from 'next/image';

const NavBar = () => {
	return (
		<nav
			className='h-18 
    flex w-full min-w-max flex-row justify-between bg-yellow'
		>
			<div className='m-2'>
				<Image src='/logo.png' alt='logo' width={100} height={100} />
			</div>
			<div className='mr-3 flex flex-row items-end gap-5'>
				<h1 className='my-auto'>Main</h1>
				<h1 className='my-auto'>About</h1>
				<h1 className='my-auto'>Pokedex</h1>
				<h1 className='my-auto'>Contact</h1>
			</div>
		</nav>
	);
};

export default NavBar;
