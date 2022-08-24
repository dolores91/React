import React from "react";

class Child extends React.Component {
  componentWillUnmount() {
    alert("Tu pedido ha sido cancelado.");
  }
  render() {
    return <h1>Tu pedido: {this.props.food}</h1>;
  }
}

export default Child;
