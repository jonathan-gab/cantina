import React from 'react'
import {Form, FormControl, InputGroup, Button, Image} from 'react-bootstrap'

import Cards from '../cardsRecette/Cards'

import { useState, useEffect, } from 'react';
import FiltreRecette from '../filtreRecette/FiltreRecette'




function RechercheRecette() {

  const recetteFiltreInit= {
    titre: "",
    niveau: "",
    nbPersonnesMin: 0,
    nbPersonnesMax: 0,
    tempsPreparation: 0
  }

  const [recettes, setRecettes] = useState(null); //State qui permet de récupérer les recettes de l'api
  const [suppBtnRecette, setSuppBtnRecette] = useState(false);
  const [filtre, setFiltre] = useState(recetteFiltreInit) // Permet de récupérer les valeurs marquées dans les chants
  const [recetteFiltre, setRecetteFiltre] = useState(null) //State pour récupérer les recettes après filtration
  const[error, setError]=useState(null);
  useEffect(() => {
    
    getRecette();
  }, []);

  useEffect(() => {
    if (recettes !== null) {// Si recettes est différent de null
    const recherchefiltre = recettes.filter(recette => functionTri(recette)); // Alors on place dans recette les recettes qui répondent à la condition
    setRecetteFiltre(recherchefiltre);
    
    }
  }, [filtre])

  const functionTri = (recette = null) => {
    //Si le titre (en minuscule) d'une recette contient ce qui a été écrit dans le champ titre 
    //Ou si le champ est vide alors on passe à la condition suivante
    if (recette.titre.toLowerCase().includes(filtre.titre.toLowerCase()) || filtre.titre == "") {
      if (recette.tempsPreparation <= filtre.tempsPreparation || filtre.tempsPreparation == 0) {
          if (recette.niveau == filtre.niveau || filtre.niveau == "") {
            if (recette.personnes >= filtre.nbPersonnesMin || filtre.nbPersonnesMin == 0) {
              if (recette.personnes <= filtre.nbPersonnesMax || filtre.nbPersonnesMax == 0) {
                return true;
              }
            }
          }
        }
      }
      return false;
    }

  const handleFormFilter = (e) =>{ // Permet de récupérer ce qu'il y a de marquer dans les chants
    if(e.target.id== "tempsPreparation" || e.target.id == "nbPersonnesMax" || e.target.id == "nbPersonnesMin"){
      setFiltre({ //On ne change pas la structure du filtre sauf pour l'élément qui nous intéresse
        ...filtre,
        [e.target.id]: Number(e.target.value),
      });
    } else {
      setFiltre({ //On ne change pas la structure du filtre sauf pour l'élément qui nous intéresse          
        ...filtre,
        [e.target.id]: e.target.value,
      });
    }
  }
  const getRecette = () =>{
    fetch('http://localhost:9000/api/recipes')
    .then((res) => res.json())
    .then((result) => {
        setRecettes(result);// Modification du state Recettes avec recipes
  setRecetteFiltre(result)//Modification du state RecetteFiltres avec recipes
  })};

  const suppRecette = (suppBtnRecette, id) =>{
    if(suppBtnRecette===true){ //Vérifie que l'utilisateur a appuyé sur le bon bouton.
      const options = {//Permet de customiser la Requête cette fois-cie avec la méthode DELETE qui supprime une recette du serveur.
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch(`http://localhost:9000/api/recipe/${id}`, options)//On envoie notre recette customisé à notre serveur.
      .then((res) => res.json())
      .then(
        (result) => {
          setSuppBtnRecette(false);
         getRecette();
            },
        (error) => {
          setError(error);// Sinon on a une erreur
        }
      )}
  }


  return (


    <div className="  col-lg-12  ">

      <div className="">

        {/* Flèche qui indique qu'il faut scroll */}
        <div className=" col-lg-12 position-relative ">
          <div className=" col-lg-12">
            <div className=" childone start-50 bottom-0  translate-middle position-absolute   col-lg-12     mouse_scroll">

              <div className="m-auto mouse">
                <div className="wheel"></div>
              </div>
              <div className="m-auto pt-3">
                <span className=" m-auto m_scroll_arrows unu"></span>
                <span className=" m-auto m_scroll_arrows doi"></span>
                <span className=" m-auto m_scroll_arrows trei"></span>
            </div>
          </div>
        </div>

          {/* Image d'illustration de la page recherche */}
          <Image className="w-100" src="../cantina2.jpg" fluid />

      
        </div>


        <div className="col-lg-12 neonRougeFixe  mt-5  container m-auto"><hr className="hrBlue mt-3 " /></div>

        <div className="col-lg-9 m-auto ">
        
            <FiltreRecette handleFormFilter={handleFormFilter}/> {/*Permet de détecter toutes les interactions de l'utilisateur sur les champs du formulaire*/}
            {recetteFiltre && (
          <div className="row m-auto col-lg-12 g-4">
            {recetteFiltre.map((recette, i) => (
              <div className="col-md-6 col-lg-6 col-xl-4 m-auto ">
                <Cards cardRecette={recette} suppRecette={suppRecette} />
              </div>
            ))}
          </div>
      )}
        </div>


      </div>




      {" "}
      
    </div>
  );

          }
export default RechercheRecette;
