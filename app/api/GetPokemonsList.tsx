import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

const getPokemonsList = async (startIdx: number, endIdx: number) => {
	return P.getPokemonsList()

		.then((res) => res.results.slice(startIdx, endIdx))
		.catch((err) => {
			console.log(`error: ${err}`);
			throw err; // rethrow the error to propagate it
		});
};

export default getPokemonsList;
