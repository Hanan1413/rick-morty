import Character from "./Character";
import { useState, useEffect } from "react";




function List() {
    //  <h2>Characters</h2>
    const[character, setCharacters] = useState([])
    const[loading, setLoading] = useState(true)

    // useEffect to handle side effect
    useEffect(() =>{
        async function fetchData(){
            const data = await fetch(
                'https://rickandmortyapi.com/api/character')

                const {results} = await data.json()

                setCharacters( results)
                setLoading(false)
            
        }
        fetchData();
        // the hook is only calling the logic to retrieve the data from the api 
        // when the length of the characters state change
    }, [character.length])
  return (
     <div   >    
        
        <div className="row flex-wrap mx-4">
         {loading ?(
           <div>Loading...</div> ) : (
            character.map((character => (
            
            <Character 
            character={character} 
            key={character.id}
            name={character.name}
            origin={character.origin}
            image={character.image}
            />
         

      
            ))
            ))}
 
        </div>
            
      


    </div>
     
  )
}

export default List;
