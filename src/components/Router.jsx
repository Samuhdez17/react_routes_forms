import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cine from './Cine'
import Musica from './Musica'
import FormSimple from './FormSimple'
import Colatz from './Colatz'
import TablaMultiplicarV2 from './TablaMultiplicarV2'
import SelectorMultiple from './SelectorMultiple'

export default class Router extends Component {
    render() { 
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/"                element={<Home />} />
                    <Route path="/cine"            element={<Cine />} />
                    <Route path="/musica"          element={<Musica />} />
                    <Route path="/form"            element={<FormSimple />} />
                    <Route path="/colatz"          element={<Colatz />} />
                    <Route path="/tabla2"          element={<TablaMultiplicarV2 />} />
                    <Route path="/selectorMulti"   element={<SelectorMultiple />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
