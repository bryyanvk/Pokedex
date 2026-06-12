export function Type() {
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

      <div className="flex-1 bg-gradient-to-r from-red-100 to-red-200 px-2">
        <div className="flex flex-col items-center justify-center bg-orange-100 my-3 mx-4 py-3 rounded-xl shadow-xl">
          <h1 className="text-2xl font-bold">Tipos de Pokémon</h1>
          <p>Conheça os principais tipos e suas características</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-4">
          <div className="flex flex-col items-center text-center rounded-lg bg-yellow-200 p-3 shadow-lg">
            <div className="text-3xl">⚡</div>
            <h2 className="text-base font-medium mt-1">Elétrico</h2>
            <p className="text-gray-600 text-sm">
              Pokémons rápidos que usam ataques de eletricidade.
            </p>
            <button className="mt-2 px-2 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">
              Ex: Pikachu
            </button>
          </div>

          <div className="flex flex-col items-center text-center rounded-lg bg-green-200 p-3 shadow-lg">
            <div className="text-3xl">🌿</div>
            <h2 className="text-base font-medium mt-1">Planta</h2>
            <p className="text-gray-600 text-sm">
              Usam energia da natureza, folhas, vinhas e sementes.
            </p>
            <button className="mt-2 px-2 py-1 bg-green-400 text-white rounded-md hover:bg-green-500">
              Ex: Bulbasaur
            </button>
          </div>

          <div className="flex flex-col items-center text-center rounded-lg bg-red-200 p-3 shadow-lg">
            <div className="text-3xl">🔥</div>
            <h2 className="text-base font-medium mt-1">Fogo</h2>
            <p className="text-gray-600 text-sm">
              Possuem ataques quentes, intensos e explosivos.
            </p>
            <button className="mt-2 px-2 py-1 bg-red-400 text-white rounded-md hover:bg-red-500">
              Ex: Charmander
            </button>
          </div>

          <div className="flex flex-col items-center text-center rounded-lg bg-blue-200 p-3 shadow-lg">
            <div className="text-3xl">💧</div>
            <h2 className="text-base font-medium mt-1">Água</h2>
            <p className="text-gray-600 text-sm">
              São versáteis e usam jatos de água em batalha.
            </p>
            <button className="mt-2 px-2 py-1 bg-blue-400 text-white rounded-md hover:bg-blue-500">
              Ex: Squirtle
            </button>
          </div>

          <div className="flex flex-col items-center text-center rounded-lg bg-cyan-200 p-3 shadow-lg">
            <div className="text-3xl">❄️</div>
            <h2 className="text-base font-medium mt-1">Gelo</h2>
            <p className="text-gray-600 text-sm">
              Usam frio, neve e congelamento contra os oponentes.
            </p>
            <button className="mt-2 px-2 py-1 bg-cyan-400 text-white rounded-md hover:bg-cyan-500">
              Ex: Lapras
            </button>
          </div>

          <div className="flex flex-col items-center text-center rounded-lg bg-stone-300 p-3 shadow-lg">
            <div className="text-3xl">🗻</div>
            <h2 className="text-base font-medium mt-1">Pedra</h2>
            <p className="text-gray-600 text-sm">
              São resistentes e possuem grande força defensiva.
            </p>
            <button className="mt-2 px-2 py-1 bg-stone-400 text-white rounded-md hover:bg-stone-500">
              Ex: Onix
            </button>
          </div>

          <div className="flex flex-col items-center text-center rounded-lg bg-rose-300 p-3 shadow-lg">
            <div className="text-3xl">🔮</div>
            <h2 className="text-base font-medium mt-1">Psíquico</h2>
            <p className="text-gray-600 text-sm">
              Usam poderes mentais, telecinese e energia psíquica.
            </p>
            <button className="mt-2 px-2 py-1 bg-rose-400 text-white rounded-md hover:bg-rose-500">
              Ex: Mewtwo
            </button>
          </div>

          <div className="flex flex-col items-center text-center rounded-lg bg-pink-300 p-3 shadow-lg">
            <div className="text-3xl">👻</div>
            <h2 className="text-base font-medium mt-1">Fantasma</h2>
            <p className="text-gray-600 text-sm">
              Misteriosos, assustadores e difíceis de atingir.
            </p>
            <button className="mt-2 px-2 py-1 bg-pink-400 text-white rounded-md hover:bg-pink-500">
              Ex: Gengar
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-blue-900 p-3 text-center text-gray-300 text-sm">
        Pokedex • React + Tailwind CSS
      </footer>
    </main>
  );
}