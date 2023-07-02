'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from './components/Button';

import Card from './components/Card';
import FetchPokemon, { Pokemon } from './Utils/FetchPokemon';

const Home = () => {
	const [fetchedPoke, setFetchedPoke] = useState<Pokemon | null>(null);

	const handleFetchedPoke = (pokemon: Pokemon | null) => {
		setFetchedPoke(pokemon);
	};

	return (
		<div className='mt-4 flex items-center justify-center text-center'>
			<Card
				pokeName={fetchedPoke?.name}
				pokeID={fetchedPoke?.id}
				pokeImg={fetchedPoke?.image}
			/>
			<div>
				<FetchPokemon onFetchedPoke={handleFetchedPoke} />
				{/* Render the fetchedPoke data from the state here */}
				{fetchedPoke && <></>}
			</div>
		</div>
	);
};

export default Home;
