import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cNumero = React.createRef()
    state = {
        resultados: []
    }

    hacerTabla = (e) => {
        e.preventDefault()
        
        let aux = []
        for (let i = 1; i <= 10; i++) {
            aux.push(this.cNumero.current.value * i)
        }

        this.setState({
            resultados: aux
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.hacerTabla}>
                    <label>Indica un numero</label>
                    <input type="number" required ref={this.cNumero}/>
                    <button>Generar tabla</button>
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
                                            {`${Number(this.cNumero.current.value || 0)} * ${indice + 1}`}
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