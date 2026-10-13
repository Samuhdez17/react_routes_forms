import React, { Component } from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Cine from './Cine'
import Musica from './Musica'
import FormSimple from './FormSimple'
import Colatz from './Colatz'
import TablaMultiplicarV2 from './TablaMultiplicarV2'
import SelectorMultiple from './SelectorMultiple'

// EJEMPLO RUTAS CON PARAMETROS, SE USA EN LA CLASE QUE LO NECESITE, NO AQUI, SOLO ES UN EJEMPLO DE COMO USARLO
function getParametrosCine () {
    const { idPeli, otroPar } = useParams

    return (<Cine  idPeli={idPeli} otro={otroPar}/>)
}

export default class Router extends Component {
    render() { 
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/"                element = {<Home />} />
                    <Route path="/cine"            element = {<Cine />} />
                    <Route path="/musica"          element = {<Musica />} />
                    <Route path="/form"            element = {<FormSimple />} />
                    <Route path="/colatz"          element = {<Colatz />} />
                    <Route path="/tabla2"          element = {<TablaMultiplicarV2 />} />
                    <Route path="/selectorMulti"   element = {<SelectorMultiple />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
