import React from 'react'

function Character(character) {
  return <div className='col-lg-3 col-md-6 col-sm-9 m-auto  '> 
     <div className='card mb-4'>
   
     <img 
     src={character.image} 
      className='card-img-top'
        />
       <div className="card-body content"
>
        <h3 className='card-title'>{character.name}</h3>
        <p>{`Origin:${character.origin &&
         character.origin.name}`}</p>
     </div>
       </div>


  </div> 
  
  
}

export default Character
