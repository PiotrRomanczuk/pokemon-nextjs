import PokemonInterface from '../interfaces/PokemonInterface';

export default function createPokemon(poke: any) {
	const createdPokemon: any = {
		name: poke.name,
		id: poke.id,
		image: poke.sprites.front_default,
		height: poke.height,
		weight: poke.weight,
		HP: poke.stats[0].base_stats,
		Attack: poke.stats[1].base_stats,
		Defense: poke.stats[2].base_stats,
	};

	return createdPokemon;
}
