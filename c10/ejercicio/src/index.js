import React from "react";
import ReactDOM from "react-dom";
import Child from "./components/child";
import ContainerF from './components/container-funcional' 

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imHungryFor: "",
      show: true
    };
  }

  cancelOrder = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ imHungryFor: "Pizzas" });
    }, 2000);
  }
  componentDidUpdate() {
    console.log("El componente se actualizó!");
  }
  render() {
    let myOrder;
    if (this.state.show) {
      myOrder = <Child food={this.state.imHungryFor} />;
    }
    return (
      <div>
        {myOrder}
        <button type="button" onClick={this.cancelOrder}>
          Cancelar pedido.
        </button>
      </div>
    );
  }
}

ReactDOM.render(<ContainerF />, document.getElementById("root"));
