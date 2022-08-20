import React, { Component } from "react";
import Swal from "sweetalert2";


export default class Rejuvenecedor extends Component {
    state = { name: "", age: "", error: false };

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
            error: false
        });
    };

    handleAgeChange = (event) => {
        this.setState({
            age: event.target.value,
            error: false
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newAge = this.state.age - 10;
        if (this.state.name === "" || newAge < 0) {
            this.setState({ error: true });
        } else {
            Swal.fire("Hola " + this.state.name + ", tu edad es: " + newAge);
            this.setState({ name: "", age: "" });
        }
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Ingrese su nombre:</label>
                <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange}/>
                <label htmlFor="age">Ingrese su edad:</label>
                <input
                    name="age" type="number" value={this.state.age}
                    onChange={this.handleAgeChange}/>
                {this.state.error && <span>Hay algún campo sin completar</span>}
                <button type="submit">Enviar</button>
            </form>
        );
    }
}
