import Pokedex from 'pokedex-promise-v2';
import PokemonInterface from '../interfaces/PokemonInterface';
import createPokemon from './CreatePokemon';

const P = new Pokedex();

export default async function getPokemonByName(
	name: string
): Promise<PokemonInterface> {
	let newPokemon: PokemonInterface = {
		name: '',
		id: null,
	};

	try {
		const response = await P.getPokemonByName(name);
		newPokemon = createPokemon(response);
	} catch (err) {
		console.log(err);
	}

	return newPokemon;
}
