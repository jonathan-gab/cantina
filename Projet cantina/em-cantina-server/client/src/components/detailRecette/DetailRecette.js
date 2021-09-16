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

                    <div className="">
                        <Image className="w-100" src="../falcon.jpg" fluid />
                    </div>
                    <div className="col-lg-12 neonRouge mt-4 container m-auto"><hr className="hrBlue mt-3 mb-5"/></div>

                    <div className=" col-lg-6 container  m-auto  pb-4  my-3">
                        <h1 className="  neonRougeText" >{recettes.titre}</h1>
                    </div>

                    <div className="col-lg-12 neonRouge    container m-auto"><hr className="hrBlue mt-3 "/></div>

                    <div className="    pt-4 m-auto container row col-lg-12">
                        <div className="   m-auto col-md-12 mt-5 col-sm-2 col-lg-6 ">
                            <Image className="mb-4  col-lg-6 neonRougeFixe  w-100" src={recettes.photo}/>
                        
                          
                        </div>

                        <div className=" m-auto col-lg-3">
                            

                                <div className="pt-4 mt-4 col-sm-1 col-md-4 col-lg-4 m-auto">
                                    <Image  className=" neonRougeFixe w-100" src="../c3po.png"/>
                                </div>


                                <div className=" col-lg-12">
                                    <h4 className="pt-4 pb-2">Description</h4><p>{recettes.description}</p>
                                </div>

                                <div className="       col-lg-12">
                                    <h4 className="pt-4 pb-2">Niveau</h4><p>{recettes.niveau}</p>
                                </div>

                                <div className="      col-lg-12">
                                    <h4 className="pt-4 pb-2">Pour</h4><p>~ {recettes.personnes} personnes</p>
                                </div>

                                <div className="       col-lg-12">
                                    <h4 className="pt-4 pb-2">Temps</h4><p>~ {recettes.tempsPreparation} min</p>
                                </div>

                                <Button   className="btneonBlue text-white m-2 mb-3" variant="none">Modifier</Button>

                                <Button   className="btneonRed text-white m-2 mb-3  " variant="none">Supprimer</Button>

                                <div className="pb-5  m-auto col-md-4 col-lg-4">
                                    <Image  className="neonRougeFixe w-100" src="../R2D2.png"/>
                                </div>


                        </div>



                    </div>

                </div>

                )}
            
        </div>
    )
}

export default DetailRecette;
