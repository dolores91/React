import React,{useState, useEffect} from 'react';
import './App.css';
import Elemento from './components/Elemento';

//para no estar escribiendo la url
const endpoint = "https://rickandmortyapi.com/api/character/?page=";


function App() {
  //declaramos las variables, el cambio e inicializamos de loading, pagina y personajes
const [loading, setloading] = useState(true);
const [page, setpage] = useState(1);
const [personajes, setpersonajes] = useState([]);



useEffect( () => {
  console.log('1')
    //fetch al endpoint y el then al json son siempre iguales
    fetch(`${endpoint}${page}`)
    .then( (response) => response.json())
    //aca va la logica: muestra los resultados y da de baja el loading
    .then( (data) => {
        setpersonajes(data.results)
        setloading(false)
    })
}, [])
//vacio para q se ejecute solo una vez

//lo mismo pero agrega el cambio de pagina
useEffect( () => {
  fetch(`${endpoint}${page}`)
  .then( (response) => response.json())
  .then( (data) => {
      console.log('page')
      setpersonajes(data.results)
      setloading(false)
  })
}, [page])

//manejo de los botones
const handleNext=()=>{
  setpage(page+1)
}

const handlePrevius=()=>{
  if (page>1) {
    setpage(page-1)
  }
}
//me gustaria ponerlo al ppio pero react no me deja poner condicionales, es el manejo de la espera
if (loading) {
  return(
    <h4>cargando informacion</h4>
  )
}
  return (
      <>
        <div>
            <button onClick={handlePrevius}>Previo</button>
            <button onClick={handleNext}>Siguiente</button>
        </div>
        {personajes.map( (personaje) => <Elemento key={personaje.id} name={personaje.name} image={personaje.image} />)}
      </>
  );
}

export default App;
