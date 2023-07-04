'use client';

import React, { useState, useEffect } from 'react';

import Card from './components/Card';
import Image from 'next/image';
import Button from './components/Button';
import SelectComponent from './components/Select';

import PokemonInterface from './interfaces/PokemonInterface';

import getPokemonsList from './api/GetPokemonsList';
import createPokemon from './api/CreatePokemon';
import getPokemonByName from './api/GetPokemonByName';

const Home = () => {
	const [fetchedPoke, setFetchedPoke] = useState<PokemonInterface | null>(null);
	const [pokeArray, setPokeArray] = useState<string[]>([]);
	const [selectedPokemon, setSelectedPokemon] = useState('');

	useEffect(() => {
		getPokemonsList(0, 151)
			.then((pokemons) => {
				setPokeArray(pokemons.map((p) => p.name));
			})
			.catch((err) => console.log(`error: ${err}`));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSelectPokemon = async (option: string) => {
		setSelectedPokemon(option);
		const poke = getPokemonByName(option);
		setFetchedPoke(await poke);
	};

	return (
		<div className='mt-4 flex items-center justify-center text-center'>
			<Card
				pokeName={fetchedPoke?.name!}
				pokeID={fetchedPoke?.id!}
				pokeImg={fetchedPoke?.image!}
			/>
			<div>
				<SelectComponent options={pokeArray} onSelect={handleSelectPokemon} />
			</div>
		</div>
	);
};

export default Home;
