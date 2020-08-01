import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Logo from './images/copo.svg';
// import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div id="meals">
        <span>TRYBE</span>
        <img src={Logo} alt="imageLogo" />
      </div>
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
      <Route exact path="/explorar/comidas/area" component={Login} />
      <Route exact path="/perfil" component={Login} />
      <Route exact path="/receitas-feitas" component={Login} />
      <Route exact path="/receitas-favoritas" component={Login} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
