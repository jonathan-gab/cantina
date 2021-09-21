import React from 'react'
import { Card, Modal } from 'react-bootstrap';
import { useState, useEffect, } from 'react';
import {useParams} from "react-router-dom";



import Image from 'react-bootstrap/Image';

import Button from 'react-bootstrap/Button'
import BoutonModifier from "../boutonModifier/BoutonModifier";




function DetailRecette(props) {
    const params = useParams();
    const id = params.id;

    const [recettes, setRecettes] = useState(null);
    const [suppBtnRecette, setSuppBtnRecette] = useState(false);
    const[error, setError]=useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showTime = () => {
        const heure = Math.floor(recettes.tempsPreparation / 60);
        const minutes = recettes.tempsPreparation % 60;
        const compactTime = heure > 0 ? heure + "h" : "";
        const finalTime = compactTime + minutes
        return finalTime
    }

    useEffect(() => {
        fetch(`http://localhost:9000/api/recipe/${id}`)
        .then((res) => res.json())
        .then((recipes) => {
            if (recipes.errorMessage) {
                props.history.push("/");
            }
            setRecettes(recipes);
        });
    }, []);

    const suppRecette = (suppBtnRecette, id) =>{
        if(suppBtnRecette===true){ //Vérifie que l'utilisateur a appuyé sur le bon bouton
          const options = {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        };
    
        fetch(`http://localhost:9000/api/recipe/${id}`, options)
          .then((res) => res.json())
          .then(
            (result) => {
              setSuppBtnRecette(false);
              props.history.push("/");
        
                },
            (error) => {
              setError(error);
            }
          )}
      }

    

 


    return (

        <div className="   col-lg-12">
                {recettes ? (

                <div className=" col-lg-12">
                    {/* Image d'illustration de la page */}
                    <div className="">
                        <Image className="w-100 col-lg-12" src="../falcon.jpg" fluid />
                    </div>
                    <div className=" col-11 col-md-11 col-lg-12 neonRougeFixe mt-4 container m-auto"><hr className="hrBlue mt-3 mb-5"/></div>
                    {/* Récupération et placement du titre de la recette*/}
                    <div className=" col-lg-6 container  m-auto  pb-4  my-3">
                        <h1 className="  neonRougeText" >{recettes.titre}</h1>
                    </div>
                    
                    <div className="col-11 col-md-11 col-lg-12 neonRougeFixe    container m-auto"><hr className="hrBlue mt-3 "/></div>

                    <div className="     pt-4 m-auto container row col-lg-12">
                        <div className="   m-auto col-md-12 mt-5 col-sm-12 col-lg-6 col-xl-7">
                            {/* Récupération et placement de la photo de la recette*/}
                            <Image className="mb-4  col-md-8 col-lg-6  neonRougeFixe  w-100" src={recettes.photo}/>
                        
                          
                        </div>

                        <div className="  m-auto col-lg-3">
                            

                                <div className="pt-4 mt-4 col-3 col-sm-3 col-md-3 col-lg-4 m-auto">
                                    <Image  className="  neonRougeFixe w-100" src="../c3po.png"/>
                                </div>

                                    {/* Récupération et placement de la description de la recette */}
                                <div className=" col-lg-12">
                                    <h4 className="pt-4 pb-2">Description</h4><p>{recettes.description}</p>
                                </div>

                                    {/* Récupération et placement du niveau de la recette */}
                                <div className=" col-lg-12">
                                    <h4 className="pt-4 pb-2">Niveau</h4><p>{recettes.niveau}</p>
                                </div>

                                    {/* Récupération et placement du nombre de personnes pour qui la recette peut être préparé*/}
                                <div className=" col-lg-12">
                                    <h4 className="pt-4 pb-2">Pour</h4><p> {recettes.personnes} personnes</p>
                                </div>

                                   {/* Récupération et placement du temps de préparation de la recette*/}
                                <div className=" col-lg-12">
                                    <h4 className="pt-4 pb-2">Temps</h4><p> {showTime()} min</p>
                                </div>
                                    {/* Bouton permettant la modification et la suppression */}

                                <div className=" mb-3  m-auto  col-12 col-md-6 col-sm-12 col-lg-12   ">
                                    <div className=" col-6 col-sm-6 col-md-6 col-lg-6 m-auto   ">
                                        <BoutonModifier className="" cardState={recettes} />
                                    </div>

                                    <div className="br col-6 col-sm-6 col-md-6 col-lg-6 m-auto mt-3    ">

                                        <Button className="br btneonRed text-white col-12 col-sm-12 col-lg-12 m-auto"  onClick={handleShow} /*Permet d'afficher la pop-up*/ 
                                             variant="none">
                                            Supprimer
                                        </Button>
                                    </div>

                                </div>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header>
                                        <Modal.Title>
                                        Êtes-vous sûr de vouloir supprimer cette recette?
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Footer>
                                        <Button className="btneonBlue text-white" variant="none" onClick={handleClose}> {/*Permet de fermer la pop-up*/}
                                        Fermer
                                        </Button>
                                        <Button
                                            className="btneonRed text-white" variant="none"
                                            variant="none"
                                            onClick={() => suppRecette(true, recettes.id)}//Permet, au clique, de supprimer une recette
                                        >
                                        Supprimer
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <div className="pb-5  m-auto col-3 col-sm-3 col-md-3 col-lg-4">
                                    <Image  className="neonRougeFixe w-100" src="../R2D2.png"/>
                                </div>

                        </div>



                    </div>

                    <div className="col-11 col-md-11 col-lg-12 neonRougeFixe mb-2  container m-auto"><hr className="hrBlue mt-3 "/></div>

                    <h1 className="pt-3 pb-4">Ingrédients</h1>

                    <div className="   col-lg-12">
                        <div className="  text-white m-auto col-lg-6">
                            
                                        
                            {recettes.ingredients ? (//Permet d'afficher la liste des ingrédients
                                <div className="row container m-auto col-md-6 col-lg-12 g-4">
                                    {recettes.ingredients.map((value, i) => (
                                        <div className="col-lg-4 ">
                                            {value[0]} {value[1]} {/*La place 0 est la quantité la place 1 est l'ingrédient*/}
                                        </div>
                                    ))}
                                </div>) 
                                : 
                                <h1 className="pt-3 pb-4">Pas d'ingrédients</h1>
                            }
                            
                        </div>
                    </div>

                    <h1 className="pt-4">Recette</h1>

                    <div className="col-lg-12">
                        {/* Récupération des étapes de préparation de la recette */}
                        <div className=" m-auto pt-2 text-white col-8 col-md-9  col-lg-6">
                            {recettes.etapes}      
                        </div>               
                    </div>

                    <div className="col-11 col-md-11 col-lg-12 neonRougeFixe mt-2   container m-auto"><hr className="hrBlue mt-3 "/></div>

                </div>

                ) : 
            <div className=" py-5 my-5 col-lg-12">
                <div className=" m-auto pb-5 col-lg-12">
                    <h1 className="  m-auto col-lg-4">ERROR</h1>
                    <h1 style={{fontSize:'170px'}} className="py-4 m-auto col-lg-4">404</h1>
                    <h1 className="  m-auto col-lg-4">Page introuvable</h1>
                </div>
                <div className=" m-auto mt-5 col-lg-12">
                    <div>
                        <h4 className="h4ObiWan m-auto pb-3">Obi-Wan Kenobi : Ce n'est pas la page que vous recherchez...</h4>
                        <h4 className="h4Utilisateur m-auto col-sm-6">Vous : Ce n'est pas la page que je recherche, je vais retourner à la page d'acceuil en cliquant <a href="/">ici</a>...</h4> {/*Balise "a" renvoyant à la page d'acceuil*/} 
                    </div>
                </div>
            </div>
                }

            
        </div>
    )
}

export default DetailRecette;
