import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Image } from "react-bootstrap";

function NouvelleRecette(props) { //On défini la fonction NouvelleRecette qui comporte un objet contenant les paramètre vide du formulaire.
   const initChamps = {
    titre: "",
    description: "",
    niveau: "padawan",
    personnes: 0,
    tempsPreparation: 0,
    ingredients: [["", ""]],
    etapes: [""],
    photo: "http://localhost:9000/images/the-organique-naboo.jpg",
  };
  const [recetteEnvoyee, setRecetteEnvoyee] = useState(initChamps); // Constante qui va récupérer ce qu'on écrit dans le formuaire et qui va être envoyé au serveur entant que nouvelle recette.
 

  const [error, setError] = useState(null);// Constante qui va gérer les erreurs, et les afficher



  const handleForm = (e, index = null, value = null) => {// Méthode qui va permettre de détecter et gerer toutes les intéractions de l'utilisateur avec le formulaire afin de définir notre objet recette.
    if (e.target.id == "personnes" || e.target.id == "tempsPreparation") { // Si l'utilisateur remplit les champs personnes et tempsPreparation...
      setRecetteEnvoyee({
        ...recetteEnvoyee,
        [e.target.id]: Number(e.target.value),// ...on transforme la valeur renseigné par l'utilisateur en int
      });
    } else if (e.target.id == "quantite" && index != null) {// Si l'utilisateur rempli les champs quantite du tableau d'ingrédient...
      const nouvelleValeur = recetteEnvoyee;//..on crée une constante local (Temporaire)... 
      nouvelleValeur.ingredients[index][0] = e.target.value;//...on intègre l'information renseigné par l'utilisateur (dans ce cas ci, c'est la quantité de l'ingrédient que l'on cherche à renseigner)...
      setRecetteEnvoyee({ nouvelleValeur });//...et on met à jour la recette
    } else if (e.target.id == "ingredient" && index != null) {// Ici le principe est le même mais concerne le champs ingredient
      const nouvelleValeur = recetteEnvoyee;
      nouvelleValeur.ingredients[index][1] = e.target.value;
      setRecetteEnvoyee({ nouvelleValeur });
    } else if (e.target.id == "etape" && index != null) {// Ici le principe est le même mais concerne le champs etape
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

  const ajoutChamps = (nomId) => {// Permet d'ajouter un ingrédient en plus ou une étape en plus
    if (nomId == "ingrédient") {// Si l'utilisateur souhaite ajouter un ingrédient...
      const champsIngredient = recetteEnvoyee.ingredients;//...On crée une variable locale (temporaire) qui va stoker notre liste actuelle des ingrédients
      champsIngredient.push(["", ""]);//On ajoute une place dans notre tableau d'ingrédient
      setRecetteEnvoyee({
        ...recetteEnvoyee,//on modifie notre recette sans impacté les autres variables
        [recetteEnvoyee.ingredients]: champsIngredient,//on met à jour notre recette avec le nouvel ingrédient ajouté
      });
    } else if (nomId == "étape") {// Ici le principe est le même mais avec le champs etape
      const champsEtape = recetteEnvoyee.etapes;
      champsEtape.push("");
      setRecetteEnvoyee({
        ...recetteEnvoyee,
        [recetteEnvoyee.etapes]: champsEtape,
      });
    }
  };
  const suppChamps = (nomId, i) => {// Permet de supprimer une recette
    if (nomId == "ingrédient") {
      const champsIngredient = recetteEnvoyee.ingredients;
      champsIngredient.splice(i, 1);// Splice est une méthode pour les tableau qui permet de supprimer un élémentà la place i, le 1 permet de dire que l'on veut enlever seulement un élément.
      setRecetteEnvoyee({
        ...recetteEnvoyee,
        [recetteEnvoyee.ingredients]: champsIngredient,
      });
    } else if (nomId == "étape") {// Ici le principe est le même mais avec le champs etape
      const champsEtape = recetteEnvoyee.etapes;
      champsEtape.splice(i, 1);
      setRecetteEnvoyee({
        ...recetteEnvoyee,
        [recetteEnvoyee.etapes]: champsEtape,
      });
    }
  };

  function onValidateForm() {// Cette méthode est utilisé quand un utilisateur valide la création d'une recette, elle permet de l'envoyer au serveur.
    const options = {// la constante option permet de custommiser notre requette
      method: "POST",//on spécifit la méthode à employer en l'occurence elle permet d'envoyer (créer) une donnée au serveur.
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetteEnvoyee),//Transforme l'obejt en JSON
    };
    fetch("http://localhost:9000/api/recipes", options)// On envoi notre requette customisé
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("er", result);//Ici on récupère la réponse du serveur
          props.history.push("/");
        },
        (error) => {
           setError(error);
           console.log(error);// Ici on récupère une potentiel erreur, si on a une erreur alors c'est ici qu'on la récupère.
        }
      );
  }
  return (
    <div>
     
     <div className="">
        <Image className=" w-100" src="tatooinecreate.jpg"/>
      </div>     
        <Form className="child1 col-lg-12 m-auto mt-5 pt-5" onChange={handleForm}>
          <div className=" col-lg-11 container pt-3 mt-3">
            <div className="    py-2 text-center mt-2 mb-3">
              <h1>Ajoutez votre recette</h1>
            </div>

            <div className="  m-auto col-lg-10 row">
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
                    {recetteEnvoyee.ingredients.map((value, index) => (// On parcour le tableau d'ingrédient et on affiche les champs lié aux ingrédients ( et leur nombre).
                      <div key={index}>
                        <Form.Group
                          className="mb-3"
                          controlId="quantité"
                          onChange={(e) => handleForm(e, index, value)}//Permet de détecter quand l'utilisateur remplit une information par rapport à l'ingrédient et l'index renseigne sur la place de l'ingrédient dans le tableau d'ingrédient
                        >
                          <Form.Control
                            type="text"
                            placeholder="quantité"
                          />
                        </Form.Group>

                        <Form.Group className=" col-lg-12"
                          className="mb-3"
                          controlId="ingrédient"
                          onChange={(e) => handleForm(e, index, value)}
                        >
                          <div className=" row col-12 col-lg-12">
                            <div className=" col-10 col-lg-11">
                              <Form.Control  
                                type="text"
                                placeholder="ingrédient"
                              />
                            </div>
                              <div className="col-2  col-lg-1">
                                <Button className="btneonRed text-white" variant="none" onClick={() => suppChamps("ingrédient", index)}> 
                                  X
                                </Button>
                              </div>

                              
                          </div>
                        </Form.Group>
                      </div>
                    ))}
                  </Form.Group>
                  <Button
                    className="my-2 text-white btneonBlue"
                    onClick={() => ajoutChamps("ingrédient")}// Bouton qui permet d'éxecuter la fonction ajoutChamps ( qui, par concéquent ajoute un champs ingrédient).
                    variant="none"
                  >
                    Ajouter des ingrédients
                  </Button>

                  <Form.Group className="mb-3 " controlId="étapes">
                    <Form.Label className=" pt-4 text-white ">
                      Etapes
                    </Form.Label>
                    {recetteEnvoyee.etapes.map((value, index) => ( // On parcour le tableau d'ingrédient et on affiche les champs lié aux étapes.
                      <div>
                        <Form.Group
                          className="py-4"
                          controlId="etape"
                          onChange={(e) => handleForm(e, index, value)} //Permet de détecter quand l'utilisateur remplit une information par rapport à l'etape et l'index renseigne sur la place de l'étape dans le tableau d'ingrédient
                        >
                          <div className="col-12 col-lg-12 row">
                            <div className="col-10 col-lg-11">
                              <Form.Control
                                type="text"
                                placeholder="Ajouter une étape"
                              />
                            </div>
                              {/* Bouton qui va exécuter la fonction suppChamps (qui va donc supprimer un champs étape) */}
                            <div className="col-2 col-lg-1 ">
                              <Button className="btneonRed text-white" variant="none" onClick={() => suppChamps("étape", index)}> 
                                X
                              </Button>
                            </div>

                          </div>

                        </Form.Group>
                      </div>
                    ))}
                    <Button
                     className=" text-white btneonBlue"
                      onClick={() => ajoutChamps("étape")}//Ajoute au clique un champ étape
                      variant="none"
                    >
                      Ajouter des étapes
                    </Button>
                  </Form.Group>

                  <Form.Group className="pt-4" controlId="image">
                    <Form.Label className="text-white ">Image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ajouter votre image"
                    />
                  </Form.Group>
                  <div className=" my-5">
                    <Button  className="my-2 text-white btneonBlue" onClick={onValidateForm}>Ajouter la recette</Button> {/*Bouton qui permet d'ajouter une recette à la base de donnée du serveur*/}
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Form>
      
    </div>
  );
}

export default NouvelleRecette;
