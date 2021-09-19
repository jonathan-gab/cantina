import React from "react";
import { Form, Col, Row } from "react-bootstrap";

function FiltreRecette(props) {
    const handleFormFilter=props.handleFormFilter;
  return (
    <div className="col-lg-12 ">
      <Form className="    col-lg-12  " onChange={handleFormFilter}>
        <div className=" col-lg-12 mb-3 mt-4">
          <div className="  py-5 text-center mt-1 pb-2">
            <h1>Filtres</h1>
          </div>

          <div className=" m-auto col-lg-10 row">
            <div className="  pb-5  m-auto col-lg-12">
                <Form.Group className="" controlId="titre">
                  <Form.Label className="text-white ">Titre</Form.Label>
                  <Form.Control type="text" placeholder="Entrez votre titre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="niveau">
                  <Form.Label className="py-2 pt-4 text-white ">
                    Sélectionnez le niveau
                  </Form.Label>
                  <Form.Select className="neonRouge" aria-label="padawan">
                    <option value="padawan">padawan</option>
                    <option value="jedi">jedi</option>
                    <option value="maitre">maître</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label className="text-white ">
                    Nombre de personne
                  </Form.Label>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="nbPersonnesMin">
                        <Form.Control type="number" placeholder="First name" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="nbPersonnesMax">
                        <Form.Control type="number" placeholder="First name" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3" controlId="tempsPreparation">
                  <Form.Label className="text-white ">
                    Temps de préparation
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez le temps de préparation"
                  />
                </Form.Group>
              </div>
            </div>
          </div>
      </Form>
    </div>
  );
}

export default FiltreRecette;
