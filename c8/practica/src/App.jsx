import React, { Component } from 'react'
import Button from './Button'
import "./App.css";
import ColorsF from './components/ColorsF';

export default class App extends Component {
  colors = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */
 constructor(){
  super()
  this.state={
    colores: this.colors
  }
  

 }


  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */
  shuffle = () =>{
    this.setState({
        colores:(this.state.colores.sort(()=> Math.random() - 0.5))
      }) 
  }


  render() {
    return (
    <div className="container">
      
        <div className="panel">
          {this.state.colores.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
    <Button fn={this.shuffle} />*

      </div>

    )
  }
}
