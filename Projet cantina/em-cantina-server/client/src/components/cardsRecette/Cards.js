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

  return (
    // création du paterne de la card
    <div className="">
      <Card
        className=" mt-5  neonBlue my-3 m-auto text-center"
        style={{ width: "18rem" }}
      >
        <div className="  cardbackground">
          {/* link vers la recette en focntion de son id*/}
          <a className="carddecoration" href={`/recette/${cardState.id}`}>
            {/* récupération la photo de la recette */}
            <Card.Img
              className=" card-img col-lg-6"
              variant="top"
              src={cardState.photo}
            />

            <Card.Body className="">
              {/* récupération du titre de la recette */}
              <Card.Title className="neonBlueText text-white carddecoration">
                {cardState.titre}
              </Card.Title>

              {/* récupération du niveau de la recette */}
              <Card.Text className=" cardtext pt-2 text-white decorationnon ">
                LVL : {cardState.niveau}
              </Card.Text>
              {/* récupération du nombre de personne pour qui la recette peut être servitr  */}
              <Card.Text className=" text-white decorationnon">
                Pour ~ {cardState.personnes} personnes
              </Card.Text>

              <Card.Text
                className="text-white decorationnon">
                {/* récupération du temps de préparation */}
                Temps de préparation ~ {cardState.tempsPreparation} min
              </Card.Text>
            </Card.Body>
          </a>

          <div className=" mb-3 m-auto row col-sm-12 col-lg-12   ">
            <div className=" col-6 col-sm-6  col-lg-6 m-auto   ">
              <BoutonModifier className=" " cardState={cardState} />
            </div>


            <div className="col-6 col-sm-6 col-lg-6  m-auto   ">
              <Button className=" col-12 col-sm-12 col-lg-12 m-auto" onClick={handleShow} variant="primary">
                Supprimer
              </Button>
            </div>
            <Modal show={show} onHide={handleClose}> {/*Défini l'état initial de la popup*/}
              <Modal.Header>
                <Modal.Title>
                  Êtes-vous sûr de vouloir supprimer cette recette?
                </Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> {/*Permet de fermer la popup*/}
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => suppRecette(true, cardRecette.id)}// Permet de confirmer la suppression de la popup
                >
                  Save Changes
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
