'use client'

export default function Home() {

  const fetchData = async () => { 

    const mainURL = 'https://pokeapi.co/'

    fetch(`${mainURL}api/v2/pokemon/ditto`)
      .then(res => res.json())
      .catch(err => console.log(`error: ${err}`))
      
      .then(response => console.log(response))

  }


  return (
    <div className="flex flex-col gap-5 text-center w-max mx-auto my-4 h-24 border-slate-950 border px-12">
      <h1>Pokemon</h1>
      <button
        className="mx-auto border border-fuchsia-100"
        onClick={fetchData}>
          Fetch
      </button>


    </div>
 )
}
