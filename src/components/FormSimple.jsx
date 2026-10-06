import React, { Component } from 'react'

export default class FormSimple extends Component {
    cNombre = React.createRef();
    cNumero = React.createRef();

    enviarInfo = (e) => {
        e.preventDefault();
        console.log('datos enviados');

        let nombre = this.cNombre.current.value;
        let numero = this.cNumero.current.value;

        console.log(`Datos enviados: ${nombre} ; ${numero}`);
    }

  render() {
    return (
      <div>
        <h1>Formulario simple</h1>

        <form onSubmit={this.enviarInfo}
        style={{
            padding: '20px',
            margin: '10px',
        }}
        >
            <div>
                <label> Nombre: </label>
                <input type="text" required ref={this.cNombre} />
            </div>

            <div>
                <label> Numero: </label>
                <input type="text" required ref={this.cNumero} />
            </div>

            <button>Enviar</button>
        </form>
      </div>
    )
  }
}
