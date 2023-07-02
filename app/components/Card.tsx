import React from 'react';
import Image from 'next/image';

const Card = () => {
	return (
		<div className='flex h-128 w-80 flex-col rounded-md border border-slate-500'>
			{/* Header */}
			<div className='flex h-12 w-full items-center justify-start bg-mainRed pl-4'>
				Bulbazaur
			</div>
			{/* Main */}
			<div className='h-38 flex w-full bg-yellow'>
				<div className='w-1/2 p-6'>
					<Image src='/bulbazaur.svg' alt='bulb' width={100} height={100} />
				</div>
				<div className='my-3 flex flex-col text-left text-sm'>
					<span>HP</span>
					<span>Attack</span>
					<span>Defense</span>
					<span>Special-Attack</span>
					<span>Special-Defense</span>
					<span>Speed</span>
				</div>
			</div>
			{/* Evolutions */}

			{/* Buttons */}

			{/* Footer */}
		</div>
	);
};

export default Card;
