
export function Welcome() {



  return (
    <main >
      
      
          <div className="text-2xl font-bold text-white bg-red-500 flex flex-auto justify-between space-x-4 p-4 ">
            <h1>Pokedex </h1>
            <div className="flex  space-x-4 text-white text-lg">
              <div>home</div>
              <div>Pokemons</div>
              <div>tipos</div>
            </div>
          </div>
          <div className="flex space-x-4  ">
  
          </div>
          
        <input className=" border-2 border-gray-300 rounded-lg p-2 mt-4" placeholder=""  />

        <div className="flex flex-row space-x-4 mt-4 ">
         
           <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  
              <div className="space-y-2 text-center sm:text-left bg-yellow-200 p-4 rounded-lg"> 
                 <div className="space-y-0.5">
                    <p className="text-lg font-semibold text-black">Pikachu</p>
                 </div>
              <button className="border-purple-200 text-yellow-600 hover:border-transparent hover:bg-purple-600 hover:text-black   active:bg-purple-700 ...">
                Eletrico
              </button>
              </div>

              <div className="space-y-2 text-center sm:text-left bg-green-400 p-4 rounded-lg">
                  <div className="space-y-0.5">
                      <p className="text-lg font-semibold text-black">Bulbasaur</p>
                  </div>
                <button className="border-green-200 text-green-600 hover:border-transparent hover:bg-green-600 hover:text-black   active:bg-green-700 ...">
                  Planta
                </button>
                </div>

              <div className="space-y-2 text-center sm:text-left bg-red-400 p-4 rounded-lg">
                  <div className="space-y-0.5">
                      <p className="text-lg font-semibold text-black">Charmander</p>
                  </div>
                <button className="border-red-200 text-red-600 hover:border-transparent hover:bg-red-600 hover:text-black   active:bg-red-700 ...">
                  Fogo
                </button>
                </div>  
    
                <div className="space-y-2 text-center sm:text-left bg-blue-400 p-4 rounded-lg">
                    <div className="space-y-0.5">
                        <p className="text-lg font-semibold text-black">Squirtle</p>
                    </div>
                  <button className="border-blue-200 text-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-black   active:bg-blue-700 ...">
                    Agua
                  </button>
                </div>
            </div>  
      </div>

    <div className="footer ">
      <p className="text-center text-gray-500 text-sm mt-4 bg-blue-900">Pokedex ° React + tailwind</p>
    </div>
  
   
    </main>

  );
}
