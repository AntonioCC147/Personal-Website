import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

import Feedback from './feedback';

import Info from '../../assets/meditatii/Info.png';
import Mate from '../../assets/meditatii/Mate.png';
import Tehn from '../../assets/meditatii/Tehn.png';

import '../../components/containers/text.css';
import './meditatii.css';

export default function Meditatii() {
    return (
        <Container className="text-center">
            <p className="title">Meditații</p>
            <p className="subTitle">Dorești să devii o persoană mai bună și să-ți întreci limitele?</p>
            <Row>
                <Col sm={4}>
                    <div className="meditatiiContainer">
                        <img src={Info} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        <p className="meditatiiTitle">Informatică</p>
                        <p className="meditatiiPrice">100 lei / 2 ore | 75 de lei / 1.30 ore</p>
                        <p className="meditatiiDescription">
                            <span className="bold">Ce vom învăța: </span>Limbajele de programare C / C++ și informatica pentru
                            nivel de bacalaureat.
                        </p>
                        <p className="meditatiiDescription">
                            <span className="bold">Pentru ce ne vom pregăti? </span>Începători, Nivel de școală sau Examenul.
                            de Bacalaureat
                        </p>
                        <p className="meditatiiDescription">
                            <span className="bold">Unde se vor desfășura sesiunile de pregătire? </span>Pregătirile se vor
                            desfășura fizic (București) sau în mediul online (Google Meet / Discord).
                        </p>
                        <p className="meditatiiDescription">
                            <span className="bold">Descriere: </span>Dacă dorești să-ți dezvolți și mai mult cunoștințele la
                            informatică, să iei Examenul de Bacalaureat sau pur și simplu să te descurci mai bine la școală,
                            acesta este momentul perfect pentru a începe o colaborare.
                        </p>
                        <br/>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="meditatiiContainer">
                        <img src={Mate} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        <p className="meditatiiTitle">Matematică</p>
                        <p className="meditatiiPrice">100 lei / 2 ore | 75 de lei / 1.30 ore</p>
                        <p className="meditatiiDescription">
                            <span className="bold">Ce vom învăța: </span>Matematica pentru nivel de bacalaureat.
                        </p>
                        <p className="meditatiiDescription">
                            <span className="bold">Pentru ce ne vom pregăti? </span>Nivel de școală sau Examenul de Bacalaureat.
                        </p>
                        <p className="meditatiiDescription">
                            <span className="bold">Unde se vor desfășura sesiunile de pregătire? </span>Pregătirile se vor
                            desfășura fizic (București) sau în mediul online (Google Meet / Discord).
                        </p>
                        <p className="meditatiiDescription">
                            <span className="bold">Descriere: </span>Pregătirile la matematică se susțin în cea mai mare parte
                            pentru Examenul de Bacalaureat, în special pentru profilurile "Științele-Naturii" și "Tehnologic".
                            Dacă ești la unul dintre ele (sau chiar la "Matematică-Informatică") și dorești să iei o notă cât mai
                            mare în examen, acesta este momentul.
                        </p>
                        <br/>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="meditatiiContainer">
                        <img src={Tehn} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        <p className="meditatiiTitle">Tehnologii Web</p>
                        <p className="meditatiiPrice">100 lei / 2 ore | 75 de lei / 1.30 ore</p>
                        <p className="meditatiiDescription">
                            <span className="bold">Ce vom învăța: </span>Bazele React, BootStrap, HTML și CSS.
                        </p>
                        <p className="meditatiiDescription">
                            <span className="bold">Pentru ce ne vom pregăti? </span>Începători, Nivel de școală sau diverse teme
                            / proiecte pentru școală / facultate.
                        </p>
                        <p className="meditatiiDescription">
                            <span className="bold">Unde se vor desfășura sesiunile de pregătire? </span>Pregătirile se vor
                            desfășura doar în mediul online (Google Meet / Discord).
                        </p>
                        <p className="meditatiiDescription">
                            <span className="bold">Descriere: </span>Dacă dorești să înveți cât mai multe despre cele mai utilizate
                            tehnologii din domeniul web, ai o temă la școală / facultate sau pur și simplu este pasionat de domeniu
                            și nu știi de unde să începi, acesta este momentul pentru ca tu să mă contactezi.
                        </p>
                        <br/>
                    </div>
                </Col>
            </Row>
            
            <Feedback/>
            <Row className="text-center">
                <div class="buttonContainer">
                    <Button variant="secondary" className="d-flex align-items-center justify-content-center meditatiiButton" href="/contact">Contactează-mă aici</Button>
                </div>
            </Row>
        </Container>
    )
}