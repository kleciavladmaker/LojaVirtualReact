import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';

import HomeScreen from './home/HomeScreen'
import CategoriaScreen from './categoria/CategoriaScreen'

function App() {
  
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <HomeScreen />
        </Route>
        <Route path="/categorias/:id">
            <CategoriaScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
