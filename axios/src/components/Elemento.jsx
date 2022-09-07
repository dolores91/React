import React, {useEffect} from 'react';

const Elemento = ({name, image}) => {
    useEffect( () => {
        return  () =>{
            console.log('se desmonto el personaje')
        } 
    }, [])
  
    return (
      <>
        <h2>{name}</h2>
        <img src={image} alt={name}></img>
      </>
    )
}

export default Elemento;
