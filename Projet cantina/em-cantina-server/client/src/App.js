import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

import RechercheRecette from './components/rechercheRecette/RechercheRecette';
import NouvelleRecette from './components/nouvelleRecette/NouvelleRecette';


import Header from './components/header/Header';
import DetailRecette from './components/detailRecette/DetailRecette';
import ModifierRecette from './components/modifierRecette/ModifierRecette';
import Error404 from './components/error404/Error404';

function App() {
  

  return (

   <> 
    <BrowserRouter>

      <div className="App">
      

        <Header/>



        <main>

          <Switch>
            <Route exact path="/" component={RechercheRecette}/>
            <Route exact path="/new" component={NouvelleRecette}/>
            <Route exact path="/recette/:id" component={DetailRecette}/>
            <Route exact path="/edit/:id" component={ModifierRecette}/>
            <Route component={Error404}/>

          </Switch>

        </main>


      </div>


       


      </BrowserRouter>

      </>
  );
}

export default App;
