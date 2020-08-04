import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Perfil from './pages/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/comidas" component={Comidas} /> */}
        {/* <Route exact path="/bebidas" component={Bebidas} /> */}
        {/* <Route exact path="/comidas/:id" component={Login} />
      <Route exact path="/bebidas/:id" component={Login} />
      <Route exact path="/comidas/:id/in-progress" component={Login} />
      <Route exact path="/bebidas/:id/in-progress" component={Login} />
      <Route exact path="/explorar" component={Login} />
      <Route exact path="/explorar/comidas" component={Login} />
      <Route exact path="/explorar/bebidas" component={Login} />
      <Route exact path="/explorar/comidas/ingredientes" component={Login} />
      <Route exact path="/explorar/bebidas/ingredientes" component={Login} />
      <Route exact path="/explorar/comidas/area" component={Login} /> */}
        <Route exact path="/perfil" component={Perfil} />
        {/* <Route exact path="/receitas-feitas" component={Login} />
      <Route exact path="/receitas-favoritas" component={Login} /> */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
