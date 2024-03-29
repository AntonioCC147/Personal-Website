import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './portofoliu.css';

function verifyLinkToProject(linkToProject) {
    if(linkToProject === "yes") return 1;
    return null;
}

function verifyLinkToGitHub(linkToGitHub) {
    if(linkToGitHub === "yes") return 1;
    return null;
}

export default function PortofoliuCard(props) {
    const { language, linkToProject, linkToGitHub, img, img1, img2, img3, title, description, technology, git, adress } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {language==="RO" && <Modal.Title>Imagini</Modal.Title>}
                    {language==="UK" && <Modal.Title>Images</Modal.Title>}
                </Modal.Header>
                <Modal.Body>
                    <Carousel slide={false}>
                        <Carousel.Item>
                            <img className="d-block w-100" src={img1} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={img2} alt="Second slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={img3} alt="Third slide"/>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
                <Modal.Footer>
                    {language==="RO" &&
                        <Button variant="secondary" onClick={handleClose}>
                            Închide
                        </Button>
                    }
                    {language==="UK" &&
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    }
                </Modal.Footer>
            </Modal>

            <div className="containerPortofoliu">
                <div className="cardPortofoliu" style={{color: "black"}}>
                    <div className="imgBx">
                        <button onClick={handleShow} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                            <img src={img} alt="Img" />
                        </button>
                    </div>
                    <div className="contentPortofoliu">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <Card.Text>
                            {language==="RO" && <div><span style={{fontWeight: "600"}}>Tehnologii: </span>{technology}</div>}
                            {language==="UK" && <div><span style={{fontWeight: "600"}}>Technologies: </span>{technology}</div>}
                        </Card.Text>
                        <div className="d-flex justify-content-between">
                            {verifyLinkToGitHub(linkToGitHub) ? (
                                <Button variant="secondary" href={git} target="_blank" style={{marginTop: "15px"}}>
                                    GitHub
                                </Button>
                            ) : (
                                null
                            )}
                            
                            {verifyLinkToProject(linkToProject) && language==="RO" ? (
                                <Button className="btn btn-danger" href={adress} target="_blank" style={{marginTop: "15px"}}>
                                    Link către Proiect
                                </Button>
                            ) : (
                                null
                            )}
                            {verifyLinkToProject(linkToProject) && language==="UK" ? (
                                <Button className="btn btn-danger" href={adress} target="_blank" style={{marginTop: "15px"}}>
                                    Link to Project
                                </Button>
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
