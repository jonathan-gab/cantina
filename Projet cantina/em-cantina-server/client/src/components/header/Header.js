import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Image from 'react-bootstrap/Image'
import Collapse from 'react-bootstrap/Collapse'

import {BrowserRouter, Route, NavLink} from 'react-router-dom';



function Header() {
    return (

       


        //Création de la barre de naviguation
        <header className="  ">
            <Navbar className=" fixed-top" bg="none" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <div className=" row col-lg-12">
                                {/* Image principale du site */}
                                <Container className=" py-2 m-auto col-lg-2">
                                <a href="/"> <Image  className="neonRouge  my-4 col-sm col-md-1 col-2 col-lg-6" src="../tatooine3.jpg" roundedCircle /></a>
                                </Container>

                                <div className=" col-lg-10"> 

                                    <div className=" me-auto py-lg-5 col-lg-12"> 
                                        <div  className=" me-auto row col-lg-6">
                                            <div  className=" me-auto col-lg-1">
                                                {/* Titre du site */}
                                                <h1 className=" col-lg-4 ">CANTINA</h1>
                                            </div>

                                            <div  className=" m-auto row mx-2 col-lg-6 ">
                                                {/* Bouton de naviguation */}
                                                <NavLink exact to="/new" activeClassName='selected' className=" text-center neonRougeText col-6 col-lg-12 textSize  decorationnon m-auto text-white" >Nouvelle recette</NavLink>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                    

                        </div>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>




    )
}

export default Header
