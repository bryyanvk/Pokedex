type PokemonType =
  | "Planta"
  | "Fogo"
  | "Água"
  | "Elétrico"
  | "Normal"
  | "Fantasma"
  | "Pedra/Rocha"
  | "Gelo/Voador"
  | "Dragão/Voador"
  | "Psíquico";

type PokemonData = {
  id: number;
  name: string;
  type: PokemonType;
  image: string;
};

export default function Pokemon() {
  const pokemons: PokemonData[] = [
    {
      id: 1,
      name: "Bulbasaur",
      type: "Planta",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: 4,
      name: "Charmander",
      type: "Fogo",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 7,
      name: "Squirtle",
      type: "Água",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 25,
      name: "Pikachu",
      type: "Elétrico",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    {
      id: 39,
      name: "Jigglypuff",
      type: "Normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    },
    {
      id: 52, 
      name: "Meowth",
      type: "Normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",  
     },  
     {
      id: 54,
      name: "Psyduck",
      type: "Água",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    },
    {
      id: 59,
      name: "Arcanine",
      type: "Fogo",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    },
    {
      id: 74,
      name: "Golem",
      type: "Pedra/Rocha",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    },
    {
      id: 92,
      name: "Gastly",
      type: "Fantasma",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    },
    {
      id: 95,
      name: "Onix",
      type: "Pedra/Rocha",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    },
    { 
      id: 113,
      name: "Chansey",
      type: "Normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    },
    {
      id: 129,
      name: "Magikarp",
      type: "Água",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    },
    {
      id: 130,
      name: "Gyarados",
      type: "Água/Voador",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    },
    {
      id: 131,
      name: "Lapras",
      type: "Água",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    },
    {
      id: 133,
      name: "Eevee",
      type: "Normal", 
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    },
    {
      id: 143,
      name: "Snorlax",
      type: "Normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    },
    {
      id: 144,
      name: "Articuno",
      type: "Gelo/Voador",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    },
    {
      id: 149,
      name: "Dragonite",  
     type: "Dragão/Voador",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    },
    {
      id: 150,
      name: "Mewtwo",
      type: "Psíquico",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    }

  ];

  const coresElemento = {
    Planta: "bg-green-300",
    Fogo: "bg-red-300",
    Água: "bg-blue-200",
    Elétrico: "bg-yellow-200",
    Normal: "bg-gray-200",
    Fantasma: "bg-purple-200",
    "Pedra/Rocha": "bg-gray-400",
    "Gelo/Voador": "bg-blue-300",
    "Dragão/Voador": "bg-purple-400",
    Psíquico: "bg-pink-300",
  };
  return (
    <main className="min-h-screen flex flex-col">
      <div className="text-2xl font-bold text-white bg-gradient-to-r from-red-500 to-yellow-500 justify-between flex items-center p-4">
        <div>
          <h1>Pokedex</h1>
        </div>

        <div className="flex space-x-4 text-white text-lg">
          <div>home</div>
          <div>Pokemons</div>
          <div>tipos</div>
        </div>
      </div>

      <div className="flex-1 flex bg-gradient-to-r from-red-100 to-red-100">
        <aside className="w-56 flex flex-col bg-gradient-to-b from-blue-50 to-blue-100 text-black p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h1 className="text-2xl font-bold mb-6  flex items-center gap-2">
            <span>🔍</span> Filtros
          </h1>
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow">
              <p className="font-semibold text-sm text-red-600 mb-2">Tipo</p>
              <select className="w-full px-3 py-2 border border-blue-200 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Todos</option>
                <option>Planta</option>
                <option>Fogo</option>
                <option>Água</option>
                <option>Elétrico</option>
              </select>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow">
              <p className="font-semibold text-sm text-red-600 mb-2">Geração</p>
              <select className="w-full px-3 py-2 border border-blue-200 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Todas</option>
                <option>Geração I</option>
                <option>Geração II</option>
              </select>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow">
              <p className="font-semibold text-sm text-red-600 mb-2">Ordenar por</p>
              <select className="w-full px-3 py-2 border border-blue-200 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Número</option>
                <option>Nome A-Z</option>
                <option>Nome Z-A</option>
              </select>
            </div>
            
            
          </div>
          
          <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition-colors">
            Limpar Filtros
          </button>
        </aside>

        <section className="flex-1 ml-4 items-center">
          <div className="mx-auto flex flex-col max-w-364 text-center items-center gap-x-4 rounded-xl bg-white p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <h1 className="text-xl font-medium text-black dark:text-white flex text-center ">Pokemons</h1>
            <p className="text-gray-500 dark:text-gray-400">Conheça os Pokemons da região de Kanto!</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4"> {/* grids */}
            {pokemons.map((pokemon) => (
              <div
                key={pokemon.id}
                className={`flex flex-col justify-between h-72 w-full max-w-64 text-center items-center rounded-xl p-5 shadow-lg border border-black/5 transition-transform duration-300 hover:scale-105 ${coresElemento[pokemon.type] || 'bg-gray-200'}`}>
                <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 object-contain" />
                <div>
                  <h1 className="text-lg font-semibold">{pokemon.name}</h1>
                  <h4 className="text-sm">{pokemon.type}</h4>
                  <h4 className="text-xs text-gray-700">#{pokemon.id}</h4>
                </div>
              </div>
            ))}
          </div>

      
        </section>
      </div>
        
        
      <footer className="bg-blue-900 p-3 text-center text-gray-300 text-sm">
        Pokedex • React + Tailwind CSS
      </footer>
    </main>
  );
}