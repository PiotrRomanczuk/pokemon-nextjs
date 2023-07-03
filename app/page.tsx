'use client';

import React, { useState, useEffect } from 'react';
import Pokedex from 'pokedex-promise-v2';

import Card from './components/Card';
import Image from 'next/image';
import Button from './components/Button';

import PokemonInterface from './interfaces/PokemonInterface';
import FetchPokemon from './api/FetchPokemon';
import SelectComponent from './components/Select';

const Home = () => {
	const P = new Pokedex();

	const [fetchedPoke, setFetchedPoke] = useState<PokemonInterface | null>(null);
	const [pokeArray, setPokeArray] = useState<string[]>([]);
	const [selectedPokemon, setSelectedPokemon] = useState('');

	let pokeList: string[] = [];

	useEffect(() => {
		catchPokemonFirstGen()
			.then((pokemonFirstGen) => {
				setPokeArray(pokemonFirstGen.map((p) => p.name));
				const pokemonsNames = pokemonFirstGen.map((p) => p.name);
			})
			.catch((err) => console.log(`error: ${err}`));
	}, []);

	const catchPokemonFirstGen = async () => {
		return P.getPokemonsList()
			.then((res) => res.results.slice(0, 151))
			.catch((err) => {
				console.log(`error: ${err}`);
				throw err; // rethrow the error to propagate it
			});
	};

	const handleSelectPokemon = (option: string) => {
		setSelectedPokemon(option);
		console.log(option); // Optional: You can also log the selected option in the parent component
	};

	console.log(pokeArray);

	return (
		<div className='mt-4 flex items-center justify-center text-center'>
			<Card
				pokeName={fetchedPoke?.name!}
				pokeID={fetchedPoke?.id!}
				pokeImg={fetchedPoke?.image!}
			/>
			{/* <SelectComponent
				options={pokeArray}
				onSelect={
					{ handleSelectOption }
					// console.log();
				}
			/> */}
			<div>
				<h2>{selectedPokemon}</h2>
				<SelectComponent options={pokeArray} onSelect={handleSelectPokemon} />
			</div>

			<div>
				{/* <FetchPokemon onFetchedPoke={handleFetchedPoke} /> */}
				{/* Render the fetchedPoke data from the state here */}
				{fetchedPoke && <></>}
			</div>
		</div>
	);
};

export default Home;
