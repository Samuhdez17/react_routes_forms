import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    sNumeros = React.createRef()

    state = {
        resultados: [],
        numeros: []
    }

    genNums = (e) => {
        let aux = []

        for (let i = 0; i < 5; i++) {
            let numRan = parseInt(Math.random() * 50) + 1
            aux.push(numRan)
        }

        this.setState({
            numeros: aux
        })
    }

    hacerTabla = (e) => {
        e.preventDefault()
        
        let aux = []
        let numero = this.sNumero.current.value
        
        for (let i = 1; i <= 10; i++) {
            aux.push(parseInt(numero * i))
        }

        this.setState({
            resultados: aux
        })
    }

    componentDidMount() {
        this.genNums()
    }

    render() {
        return (
            <div>
                <button onClick={this.genNums}>Generar nuevos numeros</button>
                <form onSubmit={this.hacerTabla}>
                    <label>Indica un numero</label>
                    <select ref={this.sNumeros}>
                        {
                            this.state.numeros.map((n, i) => {
                                return(
                                    <option key={i}>{n}</option>
                                )
                            })
                        }
                    </select>
                    <button >Generar tabla</button>
                </form>

                <table border="1">
                    {
                        this.state.resultados.length > 0 && (
                            <thead>
                                <tr>
                                    <th>Operacion</th>
                                    <th>Resultado</th>
                                </tr>
                            </thead>
                        )
                    }

                    <tbody>
                        {
                            this.state.resultados.map((resultado, indice) => {
                                return (
                                    <tr key={indice}>
                                        <td>
                                            {`${Number(parseInt(this.sNumero) || 0)} * ${indice + 1}`}
                                        </td>
                                        <td>
                                            {`${resultado}`}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>    
            </div>
        )
    }
}