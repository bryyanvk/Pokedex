
export function Welcome() {



  return (
    <main >
      
       
         
            <div className="text-2xl font-bold text-white bg-red-500 justify-between flex items-center p-4">
              <div>
                <h1>Pokedex </h1>

              </div>
             
              <div className="flex  space-x-4 text-white text-lg">
                <div>home</div>
                <div>Pokemons</div>
                <div>tipos</div>
              </div>
            </div>
      
          
  
          
      <div className=" flex flex-col justify-between min-h-[calc(106vh-106px)]"> 
        <div className="flex  justify-between gap-2 p-2 ">
          <input className=" border-2 border-gray-300 rounded-lg p-2 mt-4 bg-white  w-300" placeholder=""  />
          <button className="border-red-200 text-red-200 hover:border-transparent hover:bg-red-700 active:bg-red-700 bg-red-500 rounded-lg p-2 mt-4  ">
            Buscar
          </button>
          </div>

      
         
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-3 ">
  
            <div className=" text-center sm:text-left bg-yellow-200  rounded-lg p-6 "> 
               <div className="space-y-0.5">
                  <p className="text-lg font-semibold text-black">Pikachu</p>
               </div>
            <button className="border-purple-200 text-yellow-200 hover:border-transparent hover:bg-yellow-600 bg-yellow-500 rounded-lg p-2 mt-4  ">
              Eletrico
            </button>
            </div>
            <div className="space-y-2 text-center sm:text-left bg-green-300 p-6 rounded-lg">
                <div className="space-y-0.5">
                    <p className="text-lg font-semibold text-black">Bulbasaur</p>
                </div>
              <button className="border-green-200 text-green-300 hover:border-transparent hover:bg-green-700 hover:text-black   active:bg-green-700 bg-green-600 rounded-lgp-2 mt-4 ">
                Planta
              </button>
              </div>
            <div className="space-y-2 text-center sm:text-left bg-red-300 p-6 rounded-lg">
                <div className="space-y-0.5">
                    <p className="text-lg font-semibold text-black">Charmander</p>
                </div>
              <button className="border-red-200 text-red-200 hover:border-transparent hover:bg-red-700 hover:text-black   active:bg-red-700 bg-red-500">
                Fogo
              </button>
              </div>  
  
              <div className="space-y-2 text-center sm:text-left bg-blue-200 p-6 rounded-lg">
                  <div className="space-y-0.5">
                      <p className="text-lg font-semibold text-black bg-">Squirtle</p>
                  </div>
                <button className="border-blue-200 text-blue-200 hover:border-transparent hover:bg-blue-700 hover:text-black   active:bg-blue-700 bg-blue-600">
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