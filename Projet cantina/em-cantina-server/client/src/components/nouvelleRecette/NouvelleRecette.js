import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function NouvelleRecette() {
   const initChamps = {
    titre: "",
    description: "",
    niveau: "padawan",
    personnes: 0,
    tempsPreparation: 0,
    ingredients: [["", ""]],
    etapes: [""],
    photo: "",
  };
  const [recetteEnvoyee, setRecetteEnvoyee] = useState(initChamps);
 

  const [error, setError] = useState(null);



  const handleForm = (e, index = null, value = null) => {
    if (e.target.id == "personnes" || e.target.id == "tempsPreparation") {
      setRecetteEnvoyee({
        ...recetteEnvoyee,
        [e.target.id]: Number(e.target.value),
      });
    } else if (e.target.id == "quantite" && index != null) {
      const nouvelleValeur = recetteEnvoyee;
      nouvelleValeur.ingredients[index][0] = e.target.value;
      setRecetteEnvoyee({ nouvelleValeur });
    } else if (e.target.id == "ingredient" && index != null) {
      const nouvelleValeur = recetteEnvoyee;
      nouvelleValeur.ingredients[index][1] = e.target.value;
      setRecetteEnvoyee({ nouvelleValeur });
    } else if (e.target.id == "etape" && index != null) {
      const nouvelleValeur = recetteEnvoyee;
      nouvelleValeur.etapes[index] = e.target.value;
      setRecetteEnvoyee({ nouvelleValeur });
    } else {
      setRecetteEnvoyee({
        ...recetteEnvoyee,
        [e.target.id]: e.target.value,
      });
    }
  };

  const ajoutChamps = (nomId) => {
    if (nomId == "ingrédient") {
      const champsIngredient = recetteEnvoyee.ingredients;
      champsIngredient.push(["", ""]);
      setRecetteEnvoyee({
        ...recetteEnvoyee,
        [recetteEnvoyee.ingredient]: champsIngredient,
      });
    } else if (nomId == "étape") {
      const champsIngredient = recetteEnvoyee.ingredients;
      champsIngredient.push("");
      setRecetteEnvoyee({
        ...champsIngredient,
        [champsIngredient.etapes]: champsIngredient,
      });
    }
  };
  const suppChamps = (nomId, i) => {
    if (nomId == "ingrédient") {
      const champsIngredient = recetteEnvoyee.ingredients;
      champsIngredient.splice(i, 1);
      setRecetteEnvoyee({
        ...recetteEnvoyee,
        [recetteEnvoyee.ingredient]: champsIngredient,
      });
    } else if (nomId == "étape") {
      const champsIngredient = recetteEnvoyee.ingredients;
      champsIngredient.splice(i, 1);
      setRecetteEnvoyee({
        ...champsIngredient,
        [champsIngredient.etapes]: champsIngredient,
      });
    }
  };

  function onValidateForm() {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetteEnvoyee),
    };
    fetch("http://localhost:9000/api/recipes", options)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("er", result);
        },
        (error) => {
           setError(error);
           console.log(error);
        }
      );
  }
  return (
    <div>
        <Form onChange={handleForm} className="    col-lg-12 m-auto pt-4">
          <div className=" col-lg-11 pt-4 container br   mt-4">
            <div className="  py-5 text-center mt-1 pb-2">
              <h1>Modifier votre recette</h1>
            </div>

            <div className=" br m-auto col-lg-10 row">
              <div className="  pb-5  m-auto col-lg-10">
                <Form>
                  <Form.Group className="" controlId="titre">
                    <Form.Label className="text-white ">Titre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez votre titre"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 " controlId="description">
                    <Form.Label className="py-2 pt-4 text-white ">
                      Description
                    </Form.Label>
                    <Form.Control
                      className="neonRouge"
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="niveau">
                    <Form.Label className="py-2 pt-4 text-white ">
                      Sélectionnez le niveau
                    </Form.Label>
                    <Form.Select
                      className="neonRouge"
                      aria-label="padawan"
                    >
                      <option value="padawan">padawan</option>
                      <option value="jedi">jedi</option>
                      <option value="maitre">maître</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="personnes">
                    <Form.Label className="text-white ">
                      Nombre de personne
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Entrez pour combien de personne la recette est réalisable"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="tempsPreparation">
                    <Form.Label className="text-white ">
                      Temps de préparation
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Entrez le temps de préparation"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="ingrédients">
                    <Form.Label className="text-white ">Ingrédients</Form.Label>
                    {recetteEnvoyee.ingredients.map((value, index) => (
                      <div key={index}>
                        <Form.Group
                          className="mb-3"
                          controlId="quantité"
                          onChange={(e) => handleForm(e, index, value)}
                        >
                          <Form.Control
                            type="text"
                            placeholder="quantité"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="ingrédient"
                          onChange={(e) => handleForm(e, index, value)}
                        >
                          <Form.Control
                            type="text"
                            placeholder="ingrédient"
                          />
                        </Form.Group>
                      </div>
                    ))}
                  </Form.Group>
                  <Button
                    onClick={() => ajoutChamps("ingrédient")}
                    variant="primary"
                  >
                    Ajouter des ingrédients
                  </Button>

                  <Form.Group className="mb-3 " controlId="étapes">
                    <Form.Label className="py-2 pt-4 text-white ">
                      Etapes
                    </Form.Label>
                    {recetteEnvoyee.etapes.map((value, index) => (
                      <div>
                        <Form.Group
                          className=""
                          controlId="etape"
                          onChange={(e) => handleForm(e, index, value)}
                        >
                          <Form.Control
                            type="text"
                            placeholder="Entrez votre image"
                          />
                          <Button onClick={() => suppChamps("étape", index)}>
                            X
                          </Button>
                        </Form.Group>
                      </div>
                    ))}
                    <Button
                      onClick={() => ajoutChamps("étape")}
                      variant="primary"
                    >
                      Ajouter des étapes
                    </Button>
                  </Form.Group>

                  <Form.Group className="" controlId="image">
                    <Form.Label className="text-white ">Image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez votre image"
                    />
                  </Form.Group>

                    <Button onClick={onValidateForm}>Ajouter</Button>
                 
                </Form>
              </div>
            </div>
          </div>
        </Form>
      
    </div>
  );
}

export default NouvelleRecette;
