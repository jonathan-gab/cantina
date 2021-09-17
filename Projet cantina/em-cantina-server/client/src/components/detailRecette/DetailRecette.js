import React from 'react'
import { Card } from 'react-bootstrap';
import { useState, useEffect, } from 'react';
import {useParams} from "react-router-dom";

import Recettes from '../recettes/Recettes';

import Image from 'react-bootstrap/Image';

import Button from 'react-bootstrap/Button'




function DetailRecette(props) {
    const params = useParams();
    const id = params.id;

    const [recettes, setRecettes] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9000/api/recipe/${id}`)
        .then((res) => res.json())
        .then((recipes) => {
            console.log(recipes);
            setRecettes(recipes);
        });
    }, []);

    

 


    return (

        <div className="   col-lg-12">
                {recettes && (

                <div className=" col-lg-12">
                    {/* image d'illustration de la page */}
                    <div className="">
                        <Image className="w-100" src="../falcon.jpg" fluid />
                    </div>
                    <div className="col-lg-12 neonRougeFixe mt-4 container m-auto"><hr className="hrBlue mt-3 mb-5"/></div>
                    {/* récupération et placement du titre de la recette  */}
                    <div className=" col-lg-6 container  m-auto  pb-4  my-3">
                        <h1 className="  neonRougeText" >{recettes.titre}</h1>
                    </div>
                    
                    <div className="col-lg-12 neonRougeFixe    container m-auto"><hr className="hrBlue mt-3 "/></div>

                    <div className="     pt-4 m-auto container row col-lg-12">
                        <div className="   m-auto col-md-12 mt-5 col-sm-2 col-lg-6 ">
                            {/* récupéeation et placement de la photo de la recette */}
                            <Image className="mb-4  col-lg-6 neonRougeFixe  w-100" src={recettes.photo}/>
                        
                          
                        </div>

                        <div className="  m-auto col-lg-3">
                            

                                <div className="pt-4 mt-4 col-sm-1 col-md-4 col-lg-4 m-auto">
                                    <Image  className=" neonRougeFixe w-100" src="../c3po.png"/>
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
                                    {/* Bouton permettant la modification et la supppré */}
                                <Button   className="btneonBlue text-white m-2 mb-3" variant="none">Modifier</Button>

                                <Button   className="btneonRed text-white m-2 mb-3  " variant="none">Supprimer</Button>

                                <div className="pb-5  m-auto col-md-4 col-lg-4">
                                    <Image  className="neonRougeFixe w-100" src="../R2D2.png"/>
                                </div>


                        </div>



                    </div>

                    <div className="col-lg-12 neonRougeFixe mb-2  container m-auto"><hr className="hrBlue mt-3 "/></div>

                    <h1 className="pt-3 pb-4">Ingrédients</h1>

                    <div className="   col-lg-12">
                        <div className="  text-white m-auto col-lg-6">
                            
                                        
                                            {recettes && (
                                <div className="row col-lg-12 g-4">
                                {recettes.ingredients.map((value, i) => (
                                    <div className="col-lg-4 ">
                                    {value[0]} {value[1]}
                                    </div>
                                ))}
                                </div>)}


                            
                        </div>
                    </div>

                    <h1 className="pt-4">Recette</h1>

                    <div className="col-lg-12">
                        {/* Récupération des étapes de préparation de la recette */}
                        <div className=" m-auto pt-2 text-white   col-lg-6">
                            {recettes.etapes}      
                        </div>               
                    </div>

                    <div className="col-lg-12 neonRougeFixe mt-2   container m-auto"><hr className="hrBlue mt-3 "/></div>


                </div>

                )}
            
        </div>
    )
}

export default DetailRecette;
