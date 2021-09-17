import React from 'react'
import { Card } from 'react-bootstrap';
import { useState } from 'react';

import Button from 'react-bootstrap/Button'



function Cards(props) {
    "Récupération des données de l'API"
    const cardState = props.cardRecette;

    




    
    return (

            // création du paterne de la card
            <div className="">
                <Card  className=" mt-5 neonBlue my-3 m-auto text-center" style={{ width: '18rem' }}>
                    
                
                            <div  className=" cardbackground">
                                {/* link vers la recette en focntion de sson id*/}
                            <a className="carddecoration" href={`/recette/${cardState.id}`}  > 
                                {/* récupération la photo de la recette */}
                                <Card.Img className="card-img col-lg-6" variant="top" src={cardState.photo} />
                                
                                    <Card.Body className="">
                                        {/* récupération du titre de la recette */}
                                        <Card.Title className="neonBlueText text-white carddecoration">
                                            {cardState.titre}
                                        </Card.Title>

                                    
                                        {/* récupération du niveau de la recette */}
                                        <Card.Text  className=" cardtext pt-2 text-white decorationnon " >

                                            LVL :  {cardState.niveau}
                                            
                                        </Card.Text>
                                        {/* récupération du nombre de personne pour qui la recette peut être servitr  */}
                                        <Card.Text  className=" text-white decorationnon" >
                                            Pour ~ {cardState.personnes} personnes
                                        </Card.Text>

                                        <Card.Text  className="
                                        text-white decorationnon" >
                                            {/* récupération du temps de préparation */}
                                            Temps de préparation ~ {cardState.tempsPreparation} min
                                        </Card.Text>
                                        
                                       
                                    


                                    </Card.Body>
                                    </a>

                                    <div className=" mb-2  ">
                                            
                                        {/* Boutons de modification et supression de recette */}
                                            <Button   className="btneonBlue text-white m-2  mt-3 mb-3" variant="none">Modifier</Button>
                                            <Button   className="btneonRed text-white m-2 mt-3 mb-3  " variant="none">Supprimer</Button>

                                    
                                    </div>
                            </div>
                            
                        
                        </Card>
                        
            </div>
    )
}

export default Cards;
