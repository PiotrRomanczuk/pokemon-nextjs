'use client';

import React, { useState, useEffect } from 'react';

import Card from './components/Card';
import Image from 'next/image';
import Button from './components/Button';

import Pokedex from 'pokedex-promise-v2';
import { TypePokemon } from './types/TypePokemon';
import FetchPokemon from './Utils/FetchPokemon';

const Home = () => {
	const [fetchedPoke, setFetchedPoke] = useState<TypePokemon | null>(null);

	const P = new Pokedex();

	P.getPokedexList()
		.then((res) => console.log(res))
		.catch((err) => console.log(`error: ${err}`));

	// const handleFetchedPoke = (pokemon: Pokemon | null) => {
	// 	setFetchedPoke(pokemon);
	// };

	// useEffect(() => {
	// 	handleFetchedPoke();
	// }, []);

	return (
		<div className='mt-4 flex items-center justify-center text-center'>
			<Card
				pokeName={fetchedPoke?.name!}
				pokeID={fetchedPoke?.id!}
				pokeImg={fetchedPoke?.image!}
			/>
			<div>
				{/* <FetchPokemon onFetchedPoke={handleFetchedPoke} /> */}
				{/* Render the fetchedPoke data from the state here */}
				{fetchedPoke && <></>}
			</div>
		</div>
	);
};

export default Home;
