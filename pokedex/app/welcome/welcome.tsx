
export function Welcome() {



  return (
    <main >
      
       
         
            <div className="text-2xl font-bold text-white bg-linear-to-r from-red-500 to-yellow-500 justify-between flex items-center p-4">
              <div>
                <h1>Pokedex </h1>

              </div>
             
              <div className="flex  space-x-4 text-white text-lg">
                <div>home</div>
                <div>Pokemons</div>
                <div>tipos</div>
              </div>
            </div>
      
          
  
          
      <div className=" flex flex-col justify-between min-h-[calc(104.4vh-106px)] bg-red-100"> 
        <div className="flex h-20 items-center bg-white mx-10 mt-10 rounded-lg p-4">
          <form className="w-full relative">
             <input 
                type="text"
                className="w-330 p-3 pb- pb-1 border-b border-gray-200 focus:outline-none "
               />
             <button className="absolute right-2 bottom-1 bg-red-500 border-red-200 text-red-200 hover:border-transparent hover:bg-red-700 active:bg-red-700 bg-red-500 rounded-lg p-2 mt-10  ">
               Buscar
             </button>
          </form>
        
          </div>

      
         
           <div className="flex flex-wrap gap-8 justify-center mt-10 ">
  
            <div className="flex flex-col h-70 w-110 items-center justify-center text-center sm:text-center bg-yellow-200  rounded-2xl p-6 "> 
               <div className="space-y-0.5">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" className="w-40 h-40 mx-auto mb-2" />
                  <p className="text-lg font-semibold text-black">Pikachu</p>
               </div>
            <button className="border-purple-200 text-yellow-200 hover:border-transparent hover:bg-yellow-600 bg-yellow-500 rounded-lg p-2 mt-4  ">
              Eletrico
            </button>
            </div>
            <div className="flex flex-col h-70 w-110 items-center justify-center text-center sm:text-center bg-green-300 p-6 rounded-lg">
                <div className="space-y-0.5">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" className="w-40 h-40 mx-auto mb-2" />
                    <p className="text-lg font-semibold text-black">Bulbasaur</p>
                </div>
              <button className="border-green-200 text-green-300 hover:border-transparent hover:bg-green-700 bg-green-500 rounded-lg p-2 mt-4  ">
                Planta
              </button>
              </div>
            <div className="flex flex-col h-70 w-110 items-center justify-center text-center sm:text-center bg-red-300 p-6 rounded-lg">
                <div className="space-y-0.5">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" className="w-40 h-40 mx-auto mb-2" />
                    <p className="text-lg font-semibold text-black">Charmander</p>
                </div>
              <button className="border-red-200 text-red-200 hover:border-transparent hover:bg-red-700 bg-red-500 rounded-lg p-2 mt-4  ">
                Fogo
              </button>
              </div>  
  
              <div className="flex flex-col h-70 w-110 items-center justify-center text-center sm:text-center bg-blue-200 p-6 rounded-lg">
                  <div className="space-y-0.5">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle" className="w-40 h-40 mx-auto mb-2" />
                      <p className="text-lg font-semibold text-black bg-">Squirtle</p>
                  </div>
                <button className="border-blue-200 text-blue-200   hover:border-transparent hover:bg-blue-700 bg-blue-500 rounded-lg p-2 mt-4  ">
                  Agua
                </button>
              </div>
          </div>  
      
    
    <div className=" ">
      <p className=" p-3 flex justify-center  text-gray-500 text-sm mt-4 bg-blue-900">Pokedex ° React + tailwind</p>
    </div>
  </div> 
   
    </main>

  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                       