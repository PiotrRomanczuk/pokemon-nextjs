import React from 'react';
import Pokedex from 'pokedex-promise-v2';
import PokemonInterface from '../interfaces/PokemonInterface';

type FetchPokemonProps = {
	onFetchedPoke: (pokemon: PokemonInterface | null) => void;
};

const FetchPokedex = () => {
	const p = new Pokedex();

	const generations = {
		first: 151,
		second: 250,
		third: 400,
		fourth: 650,
	};

	const catchPokemon = async () => {
		try {
			const res = await p.getPokemonsList();
			const data = res.results.slice(0, generations.first);
			return data;
		} catch (err) {
			console.log(`error: ${err}`);
			throw err; // rethrow the error to propagate it
		}
	};

	return <></>;
};

export default FetchPokedex;
