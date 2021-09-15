import React from 'react';

import '../../../src/App.css';


import Form from 'react-bootstrap/Form';

import Image from 'react-bootstrap/Image';




function NouvelleRecette() {
    return (




        <div className="">

            <div className="  col-lg-12  ">
                <Image className="w-100" src="../tatooinecreate.jpg" fluid />
            </div>

            <div className="container col-lg-6 py-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white pb-2">Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                    
                </Form.Group >
                <Form.Group className="container col-lg-6 py-5" controlId="formBasicEmail">
                    <Form.Label className="text-white pb-2">Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white pb-2">Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white pb-2">Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                    
                </Form.Group>
            </div>
        </div>
    )
}

export default NouvelleRecette;
