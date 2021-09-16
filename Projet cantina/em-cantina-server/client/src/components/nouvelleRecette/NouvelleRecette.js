import React from 'react';

import '../../../src/App.css';


import Form from 'react-bootstrap/Form';

import Image from 'react-bootstrap/Image';




function NouvelleRecette() {
    return (




        <div className="">

            <div className="  col-lg-12  ">
                <Image className="w-100" src="../tatooinecreate.jpg" fluid />
            </div>

            
                <Form className="   child1 col-lg-12 m-auto pt-4">
                    
                        <div className=" col-lg-11 pt-4 container br   mt-4">
                            <div className="  py-5 text-center mt-1 pb-2"><h1>Enregistrez votre recette</h1></div>

                                <div className=" br m-auto col-lg-10 row">
                                    <div className="  pb-5  m-auto col-lg-10">
                                        <div className=" "> 
                                            <Form.Group className="" controlId="formBasicEmail">
                                                <Form.Label className="text-white ">Titre</Form.Label>
                                                <Form.Control type="text" placeholder="Entrez votre titre" />
                                                
                                            </Form.Group >

                                            <Form.Group className="mb-3 " controlId="Description">
                                                <Form.Label className="py-2 pt-4 text-white ">Description</Form.Label>
                                                <Form.Control className="neonRouge" as="textarea" rows={3} />
                                            </Form.Group>
                                            

                                            <Form.Group className="mb-3" controlId="niveau">
                                                <Form.Label className="py-2 pt-4 text-white ">Sélectionnez le niveau</Form.Label>
                                                <Form.Select className="neonRouge" aria-label="padawan">
                                                    <option value="padawan">padawan</option>
                                                    <option value="jedi">jedi</option>
                                                    <option value="maitre">maître</option>
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="Nombre de personne">
                                                <Form.Label className="text-white ">Nombre de personne</Form.Label>
                                                <Form.Control type="text" placeholder="Entrez pour combien de personne la recette est réalisable" />
                                                
                                            </Form.Group >

                                            <Form.Group className="mb-3" controlId="Time">
                                                <Form.Label className="text-white ">Temps de préparation</Form.Label>
                                                <Form.Control type="text" placeholder="Entrez le temps de préparation" />
                                                
                                            </Form.Group >

                                            <Form.Group className="mb-3" controlId="Ingrédients">
                                                <Form.Label className="text-white ">Ingrédients</Form.Label>
                                                <Form.Control type="text" placeholder="Entrez vos ingtrédients" />
                                                
                                            </Form.Group >


                                            <Form.Group className="mb-3 " controlId="Description">
                                                <Form.Label className="py-2 pt-4 text-white ">Etapes</Form.Label>
                                                <Form.Control className="neonRouge" as="textarea" rows={3} />
                                            </Form.Group>


                                            <Form.Group className="" controlId="formBasicEmail">
                                                <Form.Label className="text-white ">Titre</Form.Label>
                                                <Form.Control type="text" placeholder="Entrez votre titre" />
                                                
                                            </Form.Group >
                                            

                                        


                                        </div>
                                    </div>


                                    {/* <div className="    me-auto col-lg-6">
                                        <div className=" "> 
                                            <Form.Group className="" controlId="formBasicEmail">
                                                <Form.Label className="text-white ">Titre</Form.Label>
                                                <Form.Control type="text" placeholder="Entrz votre titre" />
                                                
                                            </Form.Group >

                                            <Form.Group className=" col-lg-6 py-4" controlId="formBasicEmail">
                                                <Form.Label className="text-white ">Email address</Form.Label>
                                                <Form.Control type="text" placeholder="Enter email" />
                                                
                                            </Form.Group>
                                            

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-white ">Email address</Form.Label>
                                                <Form.Control type="text" placeholder="Enter email" />
                                                
                                            </Form.Group>
                                            <Form.Group className="" controlId="formBasicEmail">
                                                <Form.Label className="text-white ">Titre</Form.Label>
                                                <Form.Control type="text" placeholder="Entrez votre titre" />
                                                
                                            </Form.Group >
                                            <Form.Group className="" controlId="formBasicEmail">
                                                <Form.Label className="text-white ">Titre</Form.Label>
                                                <Form.Control type="text" placeholder="Entrez votre titre" />
                                                
                                            </Form.Group >

                                        


                                        </div>
                                </div> */}
                            </div>
                        </div>
                </Form>
            
        </div>
    )
}

export default NouvelleRecette;
