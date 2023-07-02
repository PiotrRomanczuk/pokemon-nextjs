// 'use client'

import React from 'react';
import Image from 'next/image';
import Button from './components/Button';
import FetchPokemon from './Utils/FetchPokemon';
import Card from './components/Card';


const Home = () => {

//   return (
//     <div>
//       <div className="flex flex-col gap-5 text-center w-max mx-auto my-4 h-24 border-slate-950 border px-12">
//         <h1>Pokemon</h1>
//         <Button onClick={FetchPokemon} label='Fetch Poke'/>  
//       </div>
//       <div className="flex flex-col gap-5 text-center w-max mx-auto my-4 h-36 border-slate-950 border px-12">
//         {fetchedPoke && <span>{fetchedPoke.name}</span>}
//         {fetchedPoke && <Image src={fetchedPoke.image} alt='pokeImg' width={100} height={100}/>}
//         {/* {fetchedPoke && <span>{fetchedPoke.id}</span>} */}
//       </div>
//     </div>
  //   );
  return (
    <div className='flex text-center items-center justify-center mt-4'>
      <Card />
    </div>
  )
};

export default Home;


