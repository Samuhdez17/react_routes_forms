import React, { Component } from 'react'

export default class Colatz extends Component {
    cNumero = React.createRef()

    generarColatz = (e) => {
        e.preventDefault()
        let numero = parseInt(this.cNumero.current.value)
        let aux = []

        while(numero !== 1) {
            if (numero % 2 === 0) 
                numero = numero / 2
            else 
                numero = (numero * 3) + 1
            
            aux.push(numero)
        }

        this.setState({
            numeros: aux
        })
    }

    state = {
        numeros: []
    }

    render() {
        return (
            <div>
                <h1>Conjetura de Collatz</h1>

                <form onSubmit={this.generarColatz}>
                    <label>Introduce el numero</label>
                    <input type="number" ref = {this.cNumero}/>
                    <button>Mostrar colatz</button>
                </form>

                <ul>
                    {
                    this.state.numeros.map((num, index) => {
                        return (
                            <li key={index}>{num}</li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}
