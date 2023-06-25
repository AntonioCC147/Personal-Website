import React from 'react';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function verifyLinkToProject(linkToProject) {
    if(linkToProject === "yes") return 1;
    return null;
}

export default function PortofoliuCard(props) {
    const { linkToProject, img, title, description, technology, git, adress } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <div className="d-flex justify-content-around" bgColor="dark">
                <Card style={{ margin: '10px', width: '20rem', height: 'auto', background: '' }}>
                    <Card.Img variant="top" src={img} onClick={handleShow}/>
                    <Card.Body>
                        <Card.Title style={{fontWeight: "bold"}}>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>
                            <span style={{fontWeight: "600"}}>Tehnologii: </span>{technology}
                        </Card.Text>
                        <div className="d-flex justify-content-between">
                            <Button variant="secondary" href={git} target="_blank">GitHub</Button>
                            {verifyLinkToProject(linkToProject) ? (
                                <Button className="btn btn-danger" href={adress} target="_blank">
                                Link to Project
                                </Button>
                            ) : (
                                null
                            )}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
