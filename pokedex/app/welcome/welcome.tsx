export function Welcome() {
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

      <div className="flex-1 flex flex-col bg-gradient-to-r from-red-100 to-red-200 px-2">
        <div className="flex h-20 items-center bg-white mx-2 mt-6 rounded-lg p-4">
          <form className="w-full relative">
            <input
              type="text"
              className="w-full max-w-xl p-3 border-b border-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 bottom-2 bg-red-500 text-white hover:bg-red-700 active:bg-red-700 rounded-lg p-2"
            >
              Buscar
            </button>
          </form>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-4 px-2">
          <div className="flex flex-col w-full sm:w-80 max-w-sm items-center justify-center text-center bg-yellow-200 rounded-xl p-4">
            <div>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="Pikachu"
                className="w-24 h-24 mx-auto mb-2"
              />
              <p className="text-base font-semibold text-black">Pikachu</p>
            </div>
            <button className="border-purple-200 text-yellow-200 hover:border-transparent hover:bg-yellow-600 bg-yellow-500 rounded-lg px-3 py-2 mt-3 text-sm">
              Eletrico
            </button>
          </div>

          <div className="flex flex-col w-full sm:w-72 max-w-sm items-center justify-center text-center bg-green-300 p-4 rounded-xl">
            <div className="space-y-1">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-24 h-24 mx-auto mb-2"
              />
              <p className="text-base font-semibold text-black">Bulbasaur</p>
            </div>
            <button className="border-green-200 text-green-300 hover:border-transparent hover:bg-green-700 bg-green-500 rounded-lg px-3 py-2 mt-3 text-sm">
              Planta
            </button>
          </div>

          <div className="flex flex-col w-full sm:w-72 max-w-sm items-center justify-center text-center bg-red-300 p-4 rounded-xl">
            <div className="space-y-1">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                alt="Charmander"
                className="w-24 h-24 mx-auto mb-2"
              />
              <p className="text-base font-semibold text-black">Charmander</p>
            </div>
            <button className="border-red-200 text-red-200 hover:border-transparent hover:bg-red-700 bg-red-500 rounded-lg px-3 py-2 mt-3 text-sm">
              Fogo
            </button>
          </div>

          <div className="flex flex-col w-full sm:w-72 max-w-sm items-center justify-center text-center bg-blue-200 p-4 rounded-xl">
            <div className="space-y-1">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                alt="Squirtle"
                className="w-24 h-24 mx-auto mb-2"
              />
              <p className="text-base font-semibold text-black">Squirtle</p>
            </div>
            <button className="border-blue-200 text-blue-200 hover:border-transparent hover:bg-blue-700 bg-blue-500 rounded-lg px-3 py-2 mt-3 text-sm">
              Agua
            </button>
          </div>
        </div>

        <div className="mt-auto">
          <p className="p-3 flex justify-center text-gray-300 text-sm mt-4 bg-blue-900">
            Pokedex ° React + tailwind
          </p>
        </div>
      </div>
    </main>
  );
}