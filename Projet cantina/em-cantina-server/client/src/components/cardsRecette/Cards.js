import React from 'react'
import { Card } from 'react-bootstrap';
import { useState } from 'react';

import Button from 'react-bootstrap/Button'



function Cards(props) {
    "Récupération des données"
    const cardState = props.cardRecette;

    




    
    return (


            <div className="">
                <Card  className=" mt-5 neonBlue my-3 m-auto text-center" style={{ width: '18rem' }}>
                    
                
                            <div  className=" cardbackground">
                            <a className="carddecoration" href={`/recette/${cardState.id}`}  > 

                                <Card.Img className="card-img col-lg-6" variant="top" src={cardState.photo} />
                                
                                    <Card.Body className="">
                                        
                                        <Card.Title className="neonBlueText text-white carddecoration">
                                            {cardState.titre}
                                        </Card.Title>

                                    

                                        <Card.Text  className=" cardtext pt-2 text-white decorationnon " >

                                            LVL :  {cardState.niveau}
                                            
                                        </Card.Text>

                                        <Card.Text  className=" text-white decorationnon" >
                                            Pour ~ {cardState.personnes} personnes
                                        </Card.Text>

                                        <Card.Text  className="
                                        text-white decorationnon" >
                                            Temps de préparation ~ {cardState.tempsPreparation} min
                                        </Card.Text>
                                        
                                       
                                    


                                    </Card.Body>
                                    </a>

                                    <div className=" mb-2  ">
                                            

                                            <Button   className="btneonBlue text-white m-2  mt-3 mb-3" variant="none">Modifier</Button>
                                            <Button   className="btneonRed text-white m-2 mt-3 mb-3  " variant="none">Supprimer</Button>

                                    
                                    </div>
                            </div>
                            
                        
                        </Card>
                        
            </div>
    )
}

export default Cards;
