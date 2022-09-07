import axios from "axios";
import React, { useState, useEffect } from 'react';
import './App.css';
import Elemento from './components/Elemento';
//import axios from "axios";
//para no estar escribiendo la url
const endpoint = "https://rickandmortyapi.com/api/character/?page=";


function App() {
  //declaramos las variables, el cambio e inicializamos de loading, pagina y personajes
  const [loading, setLoading] = useState(true)
  const [personajes, setPersonajes] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [buttonPages, setButtonPages] = useState([])


  useEffect(() => {
    async function fetchData() {
      //unimos la url en lugar de pasarla como ´template´
      const url = endpoint + page;

    //esto es lo nuevo
      const response = await axios.get(url)
      //es lo mismo que poniamos setpersonajes(data.results)
      const Elemento = response.data.results;
      //para hacer consol.log del objeto
      const info = response.data.info;
      console.log(info)

      setPersonajes(Elemento)
      setTotal(info.pages)
      setLoading(false)

      let botones = []
      for (let index = 1; index <= total; index++) {
        botones.push({ page: index, url: endpoint + index })
      }
      setButtonPages(botones)
    }

    fetchData()
  }, [page])

  //manejo de los botones
  const handleNext = () => {
    setPage(page + 1)
  }

  const handlePrevius = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  //me gustaria ponerlo al ppio pero react no me deja poner condicionales, es el manejo de la espera
  if (loading) {
    return (
      <h4>cargando informacion</h4>
    )
  }
  return (
    <>
    <div>
      {page > 1 && <button onClick={handlePrevius}>Prev</button>}
      <button onClick={handleNext}>Next</button>
    </div>
    <div>
      {personajes.map((personaje) =>
        <Elemento key={personaje.id} name={personaje.name} image={personaje.image} />
      )}
    </div>
    //ademas agregamos un map buttons xq pone todos abajo
    <div>
      {buttonPages.map( (item) => <button onClick={() => setPage(item.page)}>{item.page}</button>)}
    </div>
  </>
  );
}

export default App;