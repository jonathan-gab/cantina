import React from "react";
import { useState } from "react";

import { Button, Modal, Card } from "react-bootstrap";
import BoutonModifier from "../boutonModifier/BoutonModifier";

function Cards(props) {
  const suppRecette = props.suppRecette;
  const cardRecette = props.cardRecette;
  const cardState = props.cardRecette;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showTime = () => {
    const heure = Math.floor(cardRecette.tempsPreparation / 60);
    const minutes = cardRecette.tempsPreparation % 60;
    const compactTime = heure > 0 ? heure + "h" : "";
    const finalTime = compactTime + minutes
    return finalTime
  }

  return (
    // Création du paterne de la card
    <div className="">
      <Card
        className=" mt-5  neonBlue my-3 m-auto text-center"
        style={{ width: "18rem" }}
      >
        <div className="  cardbackground">
          {/* Link vers la recette en fonction de son id*/}
          <a className="carddecoration" href={`/recette/${cardState.id}`}>
            {/* Récupération la photo de la recette */}
            <Card.Img
              className=" card-img col-lg-6"
              variant="top"
              src={cardState.photo}
            />

            <Card.Body className="">
              {/* Récupération du titre de la recette */}
              <Card.Title className="neonBlueText text-white carddecoration">
                {cardState.titre}
              </Card.Title>

              {/* Récupération du niveau de la recette */}
              <Card.Text className=" cardtext pt-2 text-white decorationnon ">
                LVL : {cardState.niveau}
              </Card.Text>
              {/* Récupération du nombre de personnes pour qui la recette peut être servit  */}
              <Card.Text className=" text-white decorationnon">
                Pour {cardState.personnes} personnes
              </Card.Text>

              <Card.Text
                className="text-white decorationnon">
                {/* Récupération du temps de préparation */}
                Temps de préparation {showTime()} min
              </Card.Text>
            </Card.Body>
          </a>

          <div className=" mb-3 m-auto row col-sm-12 col-lg-12   ">
            <div className=" col-6 col-sm-6  col-lg-6 m-auto   ">
              <BoutonModifier className=" " cardState={cardState} />
            </div>


            <div className="col-6 col-sm-6 col-lg-6  m-auto   ">
              <Button className="btneonRed text-white col-12 btn col-sm-12 col-lg-12 m-auto" onClick={handleShow} variant="none">
                Supprimer
              </Button>
            </div>
            <Modal show={show} onHide={handleClose}> {/*Défini l'état initial de la pop-up*/}
              <Modal.Header>
                <Modal.Title>
                  Êtes-vous sûr de vouloir supprimer cette recette?
                </Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button className="btneonBlue text-white" variant="none" onClick={handleClose}> {/*Permet de fermer la pop-up*/}
                  Fermer
                </Button>
                <Button
                  
                  className="btneonRed text-white" 
                  variant="none"
                  onClick={() => suppRecette(true, cardRecette.id)}// Permet de confirmer la suppression de la pop-up
                >
                  Supprimer
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Cards;
