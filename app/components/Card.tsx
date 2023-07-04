import React from 'react';
import Image from 'next/image';
import Button from './Button';

import SelectComponent from './Select';

interface CardProps {
	pokeName: string | null;
	pokeID: number | null;
	pokeImg: string | null;
	options?: string[];
}

const Card = ({ pokeName, pokeID, pokeImg, options }: CardProps) => {
	const arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];

	return (
		<div className='flex h-128 w-80 flex-col rounded-md border border-slate-500'>
			{/* Header */}
			<div className='flex h-12 w-full items-center justify-start bg-mainRed pl-4'>
				{pokeName}
			</div>
			{/* Main */}
			<div className='h-38 flex w-full bg-yellow'>
				<div className='w-1/2 p-6'>
					<div className='inset-0 h-24 w-24 object-cover'>
						{pokeImg ? (
							<Image src={pokeImg} alt='pokemon' width={750} height={750} />
						) : (
							''
						)}
					</div>
				</div>
				<div className='my-3 flex flex-col text-left text-sm'>
					<span>{pokeID}</span>

					{/*<span>HP: 73</span>
					<span>HP: 73</span>
					<span>Attack: 73</span>
					<span>Defense: 73</span>
					<span>Special-Attack: 73</span>
					<span>Special-Defense: 82</span>
					<span>Speed: 11</span> */}
					{/* <SelectComponent options={options} onSelect={() => {}} /> */}
				</div>
			</div>
			{/* Evolutions */}

			{/* Buttons */}

			{/* Footer */}
		</div>
	);
};

export default Card;
