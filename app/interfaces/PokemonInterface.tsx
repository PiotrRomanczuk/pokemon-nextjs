export default interface PokemonInterface {
	name: string;
	image: string;
	id: number;
	height?: number | undefined;
	weight?: number | undefined;
	HP?: number | undefined;
	Attack?: number | undefined;
	Defense?: number | undefined;
}
