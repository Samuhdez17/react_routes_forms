import React, { Component } from 'react'

export default class SelectorMultiple extends Component {
    selectorMultiple = React.createRef()

    state = {
        seleccionados: '',
    }

    mostrarSeleccionados = (e) => {
        e.preventDefault()

        let opciones = this.selectorMultiple.current.options;
        let datos = ''

        for (let o of opciones) {
            if (o.selected)
                datos += o.value + ', '
        }

        this.setState({
            seleccionados: datos
        })
    }
    
    render() {
        return (
            <div>
                <h1>Selector multiple</h1>

                <h3 style={{
                    backgroundColor: 'lightblue',
                }}> {this.state.seleccionados} </h3>

                <form onSubmit={this.mostrarSeleccionados}>
                    <label> Seleccione elementos </label>
                    <select size='5' multiple ref={this.selectorMultiple}>
                        <option>OPCION 1</option>
                        <option>OPCION 2</option>
                        <option>OPCION 3</option>
                        <option>OPCION 4</option>
                        <option>OPCION 5</option>
                        <option>OPCION 6</option>
                        <option>OPCION 7</option>
                        <option>OPCION 8</option>
                        <option>OPCION 9</option>
                    </select>
                    <button>Mostrar seleccionados</button>
                </form>
            </div>
        )
    }
}
