import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/cine">Cine</a>
            </li>
            <li>
                <a href="/musica">Musica</a>
            </li>
            <li>
                <a href="/form">Formulario</a>
            </li>
            <li>
                <a href="/colatz">Colatz</a>
            </li>
            <li>
                <a href="/tabla2">tabla de multiplicar</a>
            </li>
            <li>
                <a href="/selectorMulti">selector multiple</a>
            </li>
        </ul>
      </div>
    )
  }
}
