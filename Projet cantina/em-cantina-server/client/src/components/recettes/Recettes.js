import React from 'react'
import { useState } from 'react';


function Recettes(props) {


    "Récupération des données"
    const cardState = props.Recette;

    return (

        
        <h1  >
            {cardState.titre}

        </h1>
    )
}

export default Recettes;
