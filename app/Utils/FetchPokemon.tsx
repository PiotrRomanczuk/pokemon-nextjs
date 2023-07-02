import React, { useState } from 'react';
import RandomNumber from './RandomNumber';

export type Pokemon = {
	name: string;
	image: string;
	id: number;
};

const mainURL = 'https://pokeapi.co/api/v2';

type FetchPokemonProps = {
	onFetchedPoke: (pokemon: Pokemon | null) => void;
};

const FetchPokemon: React.FC<FetchPokemonProps> = ({ onFetchedPoke }) => {
	const handleFetch = async () => {
		let pokeAmount = RandomNumber(151);

		try {
			const response = await fetch(`${mainURL}/pokemon/${pokeAmount}`);
			const data = await response.json();

			const fetchedPoke: Pokemon = {
				name: data.name,
				id: data.id,
				image: data.sprites.front_default,
			};

			console.log(fetchedPoke);

			onFetchedPoke(fetchedPoke); // Call the callback function with fetchedPoke data
		} catch (error) {
			console.log(`Error: ${error}`);
			onFetchedPoke(null); // Call the callback function with null if there's an error
		}
	};

	return (
		<div>
			<button onClick={handleFetch}>Fetch Pokemon</button>
		</div>
	);
};

export default FetchPokemon;
