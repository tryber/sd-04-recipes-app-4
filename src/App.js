import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
<<<<<<< HEAD
import RecipeDetails from './pages/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress';
=======
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
>>>>>>> 5361d7e1b7eb928fcdbbfd0be6e5d55bfc60f360
import NotFound from './pages/NotFound';
import Perfil from './pages/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
<<<<<<< HEAD
        {/* <Route exact path="/comidas" component={Comidas} /> */}
        {/* <Route exact path="/bebidas" component={Bebidas} /> */}
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
        {/* <Route exact path="/perfil" component={Login} /> */}
        {/* <Route exact path="/receitas-feitas" component={Login} /> */}
        {/* <Route exact path="/receitas-favoritas" component={Login} /> */}
=======
        <Route exact path="/comidas" component={Meals} />
        <Route exact path="/bebidas" component={Drinks} />
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
>>>>>>> 5361d7e1b7eb928fcdbbfd0be6e5d55bfc60f360
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
