import React from 'react'

function Error404() {
    return (
        <>
        <div className=" py-5 my-5 col-lg-12"></div>
        {/*Affichage erreur 404*/}
        <div className=" py-5 my-5 col-lg-12">
            <div className=" m-auto pb-5 col-lg-12">
                <h1 className="  m-auto col-lg-4">ERROR</h1>
                <h1 style={{fontSize:'170px'}} className="py-4 m-auto col-lg-4">404</h1>
                <h1 className="  m-auto col-lg-4">Page introuvable</h1>
            </div>
            <div className=" m-auto mt-5 col-lg-12">
                <div>
                    <h4 className="h4ObiWan m-auto pb-3">Obi-Wan Kenobi : Ce n'est pas la page que vous recherchez...</h4>
                    <h4 className="h4Utilisateur m-auto col-sm-6">Vous : Ce n'est pas la page que je recherche, je vais retourner à la page d'acceuil en cliquant <a href="/">ici</a>...</h4> {/*Balise "a" renvoyant à la page d'acceuil*/} 
                </div>
            </div>

        </div>
        </>
    )
}

export default Error404
