export default interface PokemonInterface {
	name: string;
	id: number | null;
	image?: string;
	height?: number | undefined;
	weight?: number | undefined;
	HP?: number | undefined;
	Attack?: number | undefined;
	Defense?: number | undefined;
}
