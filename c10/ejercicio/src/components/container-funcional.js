import Child from './child';
import { useEffect, useState } from 'react';

const ContainerF = () => {

  const [imHungryFor, setImHungryFor] = useState("");
  const [show, setShow] = useState(true);

  const cancelOrder = () => {
    setShow(false);
  };

useEffect(()=>{
  setTimeout(() => {
    setImHungryFor("Pizzas")
  }, 2000);
},[])

useEffect(()=>{
  console.log("El componente se actualizó!");
},[imHungryFor])


  return (
    <div>
      {show ? <Child food={imHungryFor} /> : ""}
      <button type="button" onClick={cancelOrder}>
        Cancelar pedido.
      </button>
    </div>
  );
};

export default ContainerF;