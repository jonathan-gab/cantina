import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import Image from 'react-bootstrap/Image'

import Cards from '../cardsRecette/Cards'

import { useState, useEffect, } from 'react';




function RechercheRecette() {

        const [recettes, setRecettes] = useState(null);

    useEffect(() => {
        fetch("http://localhost:9000/api/recipes")
        .then((res) => res.json())
        .then((recipes) => {
            console.log(recipes);
            setRecettes(recipes);
        });
    }, []);

    



    return (


        <div className="  col-lg-12  ">

            <div className="">
              

                <div className=" col-lg-12 position-relative ">
                  {/* Image d'illustration de la page recherche */}
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
                      
                    <Image className="w-100" src="../cantina2.jpg" fluid  />
                    
                   {/* Arrow */}
                  
                    
                    
                </div>

                  

                    
                  

                <div className="col-lg-12 neonRougeFixe  mt-5  container m-auto"><hr className="hrBlue mt-3 "/></div>
                
                    <div className="my-5 py-5 col-lg-5 m-auto mb-3">
                        <InputGroup className=" col-lg-6 ">
                            <FormControl
                            placeholder="Demandez à Boba"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />

                            <Button
                            className="col-lg-2 p-0"
                            variant="outline-secondary"
                            id="button-addon2"
                            >
                            <a className=" " href="/#">
                                <Image
                                className=" py-1 col-sm col-md-1 col-2 col-lg-7"
                                src="../boba.png"
                                roundedCircle
                                />
                            </a>
                            </Button>
                        </InputGroup>
                    </div>
                    <div className="col-lg-12 neonRougeFixe  mt-5  container m-auto"><hr className="hrBlue mt-3 "/></div>


            </div>

               


        {" "}
        {recettes && (
          <div className="row m-auto col-lg-12 g-4">
            {recettes.map((recette, i) => (
              <div className="col-lg-4 ">
                <Cards cardRecette={recette} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
}

export default RechercheRecette
