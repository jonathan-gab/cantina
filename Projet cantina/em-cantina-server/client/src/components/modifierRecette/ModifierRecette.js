import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function ModifierRecette() {
  const params = useParams();
  const id = params.id;
  const [recetteEnvoyee, setRecetteEnvoyee] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9000/api/recipe/${id}`)
      .then((res) => res.json())
      .then((recipes) => {
          console.log(recipes);
        setRecetteEnvoyee(recipes);
      });
  }, []);

  const handleForm = (e, index = null, value = null) => {
    if (e.target.id == "personnes" || e.target.id == "tempsPreparation") {
      setRecetteEnvoyee({
        ...recetteEnvoyee,
        [e.target.id]: Number(e.target.value),
      });
    } else if (e.target.id == "quantité" && index != null) {
      console.log("1");
      const nouvelleValeur = recetteEnvoyee;
      nouvelleValeur.ingredients[index][0] = e.target.value;
      setRecetteEnvoyee({ nouvelleValeur });
    } else if (e.target.id == "ingrédient" && index != null) {
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

  function onValidateForm() { // Cette méthode est utilisé quand un utilisateur valide la modification d'une recette, elle permet de l'envoyer au serveur.
    const options = {// la constante option permet de custommiser notre requette
      method: "PUT",//Avec PUT on modifit une donnée de la base de donnée du serveur
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetteEnvoyee),//Transforme l'obejt en JSON
    };
    fetch(`http://localhost:9000/api/recipe/${id}`, options)// On envoi notre requette customisé
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("er", result);
          setRecetteEnvoyee(result);//Ici on récupère la réponse du serveur
        },
        (error) => {
          //  setError(error);
          //  console.log(error);
        }
      );
  }
  return (
    <div>
      
      {recetteEnvoyee && (
        <Form onChange={handleForm} className="    col-lg-12 m-auto pt-4">
          <div className=" col-lg-11 pt-4 container mt-4">
            <div className="  py-5 text-center mt-1 pb-2">
              <h1>Modifier votre recette</h1>
            </div>

            <div className=" m-auto col-lg-10 row">
              <div className="  pb-5  m-auto col-lg-10">
                <Form>
                  <Form.Group className="" controlId="titre">
                    <Form.Label className="text-white ">Titre</Form.Label>
                    <Form.Control
                      value={recetteEnvoyee.titre}//Ce champ récupère le titre de la recette (qu'on a récupéré via l'API).
                      type="text"
                      placeholder="Entrez votre titre"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 " controlId="description">
                    <Form.Label className="py-2 pt-4 text-white ">
                      Description
                    </Form.Label>
                    <Form.Control
                      value={recetteEnvoyee.description}//Ce champ récupère le description de la recette (qu'on a récupéré via l'API).
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
                      value={recetteEnvoyee.niveau}//Ce champ récupère le niveau de la recette (qu'on a récupéré via l'API).
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
                      value={recetteEnvoyee.personnes}//Ce champ récupère le nombre de personne pour qui la recette peut être préparé (qu'on a récupéré via l'API).
                      type="number"
                      placeholder="Entrez pour combien de personne la recette est réalisable"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="tempsPreparation">
                    <Form.Label className="text-white ">
                      Temps de préparation
                    </Form.Label>
                    <Form.Control
                      value={recetteEnvoyee.tempsPreparation}//Ce champ récupère le temps de préparation de la recette (qu'on a récupéré via l'API).
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
                            value={value[0]}
                            type="text"
                            placeholder="quantité"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="ingrédient"
                          onChange={(e) => handleForm(e, index, value)}
                        >
                        <div className="col-12 col-lg-12 row">
                          <div className="col-10 col-lg-11">
                            <Form.Control
                              value={value[1]}
                              type="text"
                              placeholder="ingrédient"
                            />
                          </div>   
                          <div className="col-2 col-lg-1 ">

                            <Button className="btneonRed text-white" variant="none" onClick={()=> suppChamps("ingrédient", index)}>
                              X
                            </Button>
                          </div>
                        </div>

                        </Form.Group>
                      </div>
                    ))}
                  </Form.Group>
                  <Button className="btneonBlue text-white" onClick={() => ajoutChamps("ingrédient")}// Bouton qui permet d'éxecuter la fonction ajoutChamps ( qui, par concéquent ajoute un champs ingrédient).
                   variant="none">
                    Ajouter des ingrédients
                  </Button>

                  <Form.Group className="mb-3 " controlId="étapes">
                    <Form.Label className="py-2  mx-3 pt-4 text-white ">
                      Etapes
                    </Form.Label>
                    {recetteEnvoyee.etapes.map((value, index)=>(// On parcour le tableau d'ingrédient et on affiche les champs lié aux étapes.
                        <div>
                  <Form.Group className="" controlId="etape" onChange={(e)=>handleForm(e,index,value)}>
                  <div className="col-12 col-lg-12 row">
                    <div className="col-10 col-lg-11">

                      <Form.Control
                        className="mb-3"
                        value={value}
                        type="text"
                        placeholder="Ajoutez une étape"
                      
                      /> 
                    
                    </div>
                    <div className="col-2 col-lg-1 ">

                      <Button className="btneonRed text-white" variant="none" onClick={() => suppChamps("étape", index)}> {/* Bouton qui va exécuter la fonction suppChamps (qui va donc supprimer un champs étape) */}
                              X
                      </Button>
                    </div>
                  </div>

                  </Form.Group>
                        </div>
                    ))}
                    <Button className="btneonBlue text-white my-3" onClick={()=>ajoutChamps("étape")}//Ajoute au clique un champ étape
                      variant="none">Ajouter des étapes
                    </Button>
                    
                  </Form.Group>

                  <Form.Group className="" controlId="image">
                    <Form.Label className="text-white ">Image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ajoutez votre image"
                    />
                  </Form.Group>

                  <a href="/">
                    <Button className="btneonBlue text-white my-5" variant="none"
                      onClick={onValidateForm}>Modifier la recette
                    </Button>
                  </a> {/*Bouton qui permet d'ajouter une recette à la base de donnée du serveur*/}
                </Form>
              </div>
            </div>
          </div>
        </Form>
      )}
    </div>
  );
}

export default ModifierRecette;
