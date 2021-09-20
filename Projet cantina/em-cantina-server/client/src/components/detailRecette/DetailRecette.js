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

    useEffect(() => {
        fetch(`http://localhost:9000/api/recipe/${id}`)
        .then((res) => res.json())
        .then((recipes) => {
            console.log(recipes);
            setRecettes(recipes);
        });
    }, []);

    const suppRecette = (suppBtnRecette, id) =>{
        if(suppBtnRecette===true){ //Verifie que l'utilisateur a appuyer sur le bon bouton
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
              console.log(result);
              setSuppBtnRecette(false);
              props.history.push("/");
        
                },
            (error) => {
              setError(error);
              console.log(error);
            }
          )}
      }

    

 


    return (

        <div className="   col-lg-12">
                {recettes && (

                <div className=" col-lg-12">
                    {/* image d'illustration de la page */}
                    <div className="">
                        <Image className="w-100 col-lg-12" src="../falcon.jpg" fluid />
                    </div>
                    <div className=" col-11 col-md-11 col-lg-12 neonRougeFixe mt-4 container m-auto"><hr className="hrBlue mt-3 mb-5"/></div>
                    {/* récupération et placement du titre de la recette  */}
                    <div className=" col-lg-6 container  m-auto  pb-4  my-3">
                        <h1 className="  neonRougeText" >{recettes.titre}</h1>
                    </div>
                    
                    <div className="col-11 col-md-11 col-lg-12 neonRougeFixe    container m-auto"><hr className="hrBlue mt-3 "/></div>

                    <div className="     pt-4 m-auto container row col-lg-12">
                        <div className="   m-auto col-md-12 mt-5 col-sm-12 col-lg-6 col-xl-7">
                            {/* récupération et placement de la photo de la recette */}
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

                                    {/* Récupération et placement du nombre de personne pour qui la recette peut être préparé*/}
                                <div className=" col-lg-12">
                                    <h4 className="pt-4 pb-2">Pour</h4><p>~ {recettes.personnes} personnes</p>
                                </div>

                                   {/* Récupération et placement du temps de préparation*/}
                                <div className=" col-lg-12">
                                    <h4 className="pt-4 pb-2">Temps</h4><p>~ {recettes.tempsPreparation} min</p>
                                </div>
                                    {/* Bouton permettant la modification et la supppréssion */}

                                <div className=" mb-3  m-auto  col-12 col-md-6 col-sm-12 col-lg-12   ">
                                    <div className=" col-6 col-sm-6 col-md-6 col-lg-6 m-auto   ">
                                        <BoutonModifier className="" cardState={recettes} />
                                    </div>

                                    <div className="br col-6 col-sm-6 col-md-6 col-lg-6 m-auto mt-3    ">

                                        <Button className="br btneonRed text-white col-12 col-sm-12 col-lg-12 m-auto"  onClick={handleShow} /*Permet d'afficher la popup*/ 
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
                                        <Button variant="secondary" onClick={handleClose}> {/*Peremet de fermer la popup*/}
                                        Close
                                        </Button>
                                        <Button
                                            variant="primary"
                                            onClick={() => suppRecette(true, recettes.id)}//Permet au clique de supprimer une recette
                                        >
                                        Save Changes
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
                            
                                        
                                            {recettes && (//Permet d'afficher la liste des ingrédients
                                <div className="row container m-auto col-md-6 col-lg-12 g-4">
                                {recettes.ingredients.map((value, i) => (
                                    <div className="col-lg-4 ">
                                    {value[0]} {value[1]} {/*La place 0 est la quantité la place 1 est l'ingrédient*/}
                                    </div>
                                ))}
                                </div>)}


                            
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

                )}

            
        </div>
    )
}

export default DetailRecette;
