import React, { useState } from 'react';

export default function FetchPokemon() {

    type Pokemon = {
        name: string,
        image: string,
        id: number,
    };

    const mainURL = 'https://pokeapi.co/api/v2';
    const [fetchedPoke, setFetchedPoke] = useState<Pokemon | null>(null);

    const fetchPoke = async () => {
        try {
            const response = await fetch(`${mainURL}/pokemon/1`);
            const data = await response.json();

            const fetchedPoke: Pokemon = {
                name: data.name,
                id: data.id,
                image: data.sprites.front_default,
            };
            console.log(fetchedPoke);
            console.log(fetchedPoke.image);

            setFetchedPoke(fetchedPoke);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };
}