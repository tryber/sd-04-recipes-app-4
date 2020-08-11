import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import RecipeDetails from './pages/RecipeDetails';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import NotFound from './pages/NotFound';
import Perfil from './pages/Perfil';
import RecipeInProgress from './pages/RecipeInProgress';
import FavoriteRicepes from './pages/FavoriteRicepes';
import Loading from './components/Loading';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={Meals} />
        <Route exact path="/bebidas" component={Drinks} />
        <Route exact path="/comidas/:id" component={RecipeDetails} />
        <Route exact path="/bebidas/:id" component={RecipeDetails} />
        <Route exact path="/comidas/:id/in-progress" component={RecipeInProgress} />
        <Route exact path="/bebidas/:id/in-progress" component={RecipeInProgress} />
        {/* <Route exact path="/explorar" component={Login} /> */}
        {/* <Route exact path="/explorar/comidas" component={Login} /> */}
        {/* <Route exact path="/explorar/bebidas" component={Login} /> */}
        {/* <Route exact path="/explorar/comidas/ingredientes" component={Login} /> */}
        {/* <Route exact path="/explorar/bebidas/ingredientes" component={Login} /> */}
        {/* <Route exact path="/explorar/comidas/area" component={Login} /> */}
        <Route exact path="/perfil" component={Perfil} />
        {/* <Route exact path="/receitas-feitas" component={Login} /> */}
        <Route exact path="/receitas-favoritas" component={FavoriteRicepes} />
        <Route exact path="/loading" component={Loading} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
