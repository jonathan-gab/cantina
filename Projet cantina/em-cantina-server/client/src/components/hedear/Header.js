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

        //création de la navbar
        // <div className="  col-lg-12 " >
        //     <Navbar className=" fixed-top " bg="none" expand="lg">
        //         <Container className="  ">
        //             <div className=" container row col-lg-12">
                        
        //                 <div className="  col-lg-2  ">
        //                     <div className="  col-lg-12  ">
        //                         <a className="" href="/#"><Image className="neonRouge py-1 col-sm col-md-1 col-2 col-lg-6" src="../tatooine3.jpg" roundedCircle /></a>
        //                     </div>
        //                 </div>        


        //                 <div className="col-lg-10 m-auto  ">
        //                     <div className=" col-lg-11 col-sm  col-1   ">

        //                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //                         <Navbar.Collapse id="basic-navbar-nav">
                    
        //                             <h1 className=" ">CANTINA</h1>

        //                             <Nav className="me-auto">
                                    
        //                                 <NavLink exact to="/" activeClassName='selected' className="neonRougeText textSize mx-4  decorationnon text-white" >Acceuil</NavLink>
        //                                 <NavLink exact to="/new" activeClassName='selected' className="neonRougeText textSize decorationnon center text-white" >Création</NavLink>
                                
        //                             </Nav>

        //                         </Navbar.Collapse>
        //                     </div> 
        //                 </div>
        //             </div>
        //         </Container>
        //     </Navbar>

        // </div>


        //Création de la barre naviguation
        <Navbar className="fixed-top" bg="none" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="me-auto">

                    <div className=" row col-lg-12">
                            {/* Image principal du site */}
                            <Container className=" py-2 m-auto col-lg-2">
                                <Image className="neonRouge  my-4 col-sm col-md-1 col-2 col-lg-6" src="../tatooine3.jpg" roundedCircle />
                            </Container>

                            

                            <div className=" col-lg-10"> 

                                <div className=" me-auto  py-lg-5 col-lg-12"> 
                                    <div  className=" me-auto row col-lg-6">
                                        <div  className=" me-auto col-lg-1">
                                            {/* Titre du site */}
                                                <h1 className=" col-lg-4 ">CANTINA</h1>
                                        </div>

                                        <div  className=" m-auto col-lg-4">
                                                {/* Boutons dde naviguation */}
                                            <NavLink exact to="/" activeClassName='selected' className="neonRougeText textSize mx-4  decorationnon text-white" >Accueil</NavLink>
                                            <NavLink exact to="/new" activeClassName='selected' className="neonRougeText textSize decorationnon center text-white" >Création</NavLink>
                                        </div>
                                    </div>

                                </div>

                            </div>
                                

                    </div>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>




    )
}

export default Header
