import React, { useState } from 'react';
import RandomNumber from '../Utils/RandomNumber';
import PokemonInterface from '../interfaces/PokemonInterface';

const mainURL = 'https://pokeapi.co/api/v2';

type FetchPokemonProps = {
	onFetchedPoke: (pokemon: PokemonInterface | null) => void;
};

const FetchPokemon: React.FC<FetchPokemonProps> = ({ onFetchedPoke }) => {
	const handleFetch = async () => {
		let pokeAmount = RandomNumber(151);

		try {
			const response = await fetch(`${mainURL}/pokemon/${pokeAmount}`);
			const data = await response.json();

			const fetchedPoke: PokemonInterface = {
				name: data.name,
				id: data.id,
				image: data.sprites.other.dream_world.front_default,
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
			<button onClick={handleFetch}>Click</button>
		</div>
	);
};

export default FetchPokemon;
