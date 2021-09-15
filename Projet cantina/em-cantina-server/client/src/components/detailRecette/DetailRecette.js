import React from 'react'
import { Card } from 'react-bootstrap';
import { useState, useEffect, } from 'react';

import Recettes from '../recettes/Recettes';


function DetailRecette() {



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
        <div>











                {" "}
                {recettes && (
                <div className="row m-auto col-lg-12 g-4">
                    {recettes.map((recette, i) => (
                    <div className="col-lg-4 ">
                        <Recettes Recette={recette} />
                    </div>
                    ))}
                </div>
                )}
            
        </div>
    )
}

export default DetailRecette;
