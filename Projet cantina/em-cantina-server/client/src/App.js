import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

import RechercheRecette from './components/rechercheRecette/RechercheRecette';
import NouvelleRecette from './components/nouvelleRecette/NouvelleRecette';


import Header from './components/hedear/Header';
import DetailRecette from './components/detailRecette/DetailRecette';

function App() {
  
  // const [recettes,setRecettes]=useState(null);

  // useEffect(()=>{
  //   fetch('http://localhost:9000/api/recipes')
  //   .then(res=>res.json())
  //   .then(recipes=>{
  //     setRecettes(recipes);
  //   })
  // },[]);

 


  return (

   <> 
    <BrowserRouter>

      <div className="App">
        {/* <h1>list des recettes</h1>
        {recettes && recettes.map(recette => 
          <div key={recette.id}>
          <h1 >{recette.titre}</h1>
          <p>{recette.description}</p>
          </div>
        )} */}

        <header><Header/></header>



        <main>

          <Switch>
            <Route exact path="/" component={RechercheRecette}/>
            <Route exact path="/new" component={NouvelleRecette}/>
            <Route exact path="/recette/:id" component={DetailRecette}/>
          </Switch>

        </main>

        <footer>
          
        </footer>

      </div>


        {/* Rechercher */}
        {/* <Route exact path="/recherche" component={Recherche}/> */}
        {/* /Favoris */}
       


      </BrowserRouter>

      </>
  );
}

export default App;
