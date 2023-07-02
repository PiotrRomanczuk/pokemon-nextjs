'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const PokemonComponent = () => {
  type Pokemon = {
    name: string,
    image: string,
    id: number,
  };

  const mainURL = 'https://pokeapi.co/api/v2';
  const [fetchedPoke, setFetchedPoke] = useState<Pokemon | null>(null);

  const fetchPoke = async () => {
    try {
      const response = await fetch(`${mainURL}/pokemon/bulbasaur`);
      const data = await response.json();

      const fetchedPoke: Pokemon = {
        name: data.name,
        image: data.sprites.front_default,
        id: data.id,
      };
      console.log(fetchedPoke);
      setFetchedPoke(fetchedPoke);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5 text-center w-max mx-auto my-4 h-24 border-slate-950 border px-12">
        <h1>Pokemon</h1>
        <button className="mx-auto border border-fuchsia-100" onClick={fetchPoke}>
          Fetch Pokemon
        </button>
      </div>
      <div className="flex flex-col gap-5 text-center w-max mx-auto my-4 h-24 border-slate-950 border px-12">
        {fetchedPoke && <span>{fetchedPoke.name}</span>}
        {fetchedPoke && <span>{fetchedPoke.image}</span>}
        {fetchedPoke && <span><Image src={fetchedPoke.image} alt='pokeImg' width={50} height={50}/></span>}
      </div>
    </div>
  );
};

export default PokemonComponent;
