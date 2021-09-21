import React from 'react'
import {Button} from 'react-bootstrap'

function BoutonModifier(props) {
    const cardState = props.cardState;//Récupère de la part du composant mère (RechercheRecette) les informations sur la recette
    return (
        <div  className=" m-auto ">
            {cardState && (// Vérifie si la recette existe, si elle existe, on affiche le bouton modifier
                <a href={`/edit/${cardState.id}`}>
              <Button  cardState={cardState}
                  
                  className="btneonBlue  m-auto text-white m-2 col-12 col-sm-12 col-lg-12  "
                  variant="none"
                >
                  Modifier
              </Button>
                </a>
            )

            }
        </div>
    )
}

export default BoutonModifier
