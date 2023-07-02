import React, { useState } from 'react';
import RandomNumber from './RandomNumber';

export type Pokemon = {
	name: string;
	image: string;
	id: number;
	// HP: number;
	// Attack: number;
	// Defense: number;
};

const mainURL = 'https://pokeapi.co/api/v2';

export const fetchPoke = async (): Promise<Pokemon | null> => {
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

		return fetchedPoke;
	} catch (error) {
		console.log(`Error: ${error}`);
		return null;
	}
};

export default function FetchPokemon() {
	const [fetchedPoke, setFetchedPoke] = useState<Pokemon | null>(null);

	const handleFetch = async () => {
		const fetchedData = await fetchPoke();
		setFetchedPoke(fetchedData);
	};

	return (
		<div>
			<button onClick={handleFetch}>Fetch Pokemon</button>
			{/* Render the fetched data here */}
		</div>
	);
}
