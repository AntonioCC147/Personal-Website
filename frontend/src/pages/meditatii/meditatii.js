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

export default function Meditatii({language}) {
    return (
        <Container className="text-center">
            {language === "RO" && ( <p className="title">&lt; Meditatii /&gt;</p> )}
            {language === "UK" && ( <p className="title">&lt; Mentoring /&gt;</p> )}
            {language === "RO" && ( <p className="subTitle">Dorești să devii o persoană mai bună și să-ți întreci limitele?</p> )}
            {language === "UK" && ( <p className="subTitle">Do you want to become a better person and give back your limitations?</p> )}
            {language === "UK" && ( <p className="subTitle" style={{color: "red", fontWeight: "bolder"}}>The mentoring take place strictly in the Romanian language!</p> )}
            <Row>
                <Col sm={4}>
                    {language === "RO" && (
                        <div className="meditatiiContainer">
                            <img src={Mate} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                            <p className="meditatiiTitle">Matematică</p>
                            <p className="meditatiiPrice">100 lei / 1 oră și jumătate | 75 de lei / 1 oră</p>
                            <p className="meditatiiDescription">
                                <span className="bold">Ce vom învăța: </span>Algebră, Geometrie și Analiză Matematică.
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Pentru ce ne vom pregăti? </span>Nivel de Școală sau Examenul de Bacalaureat.
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Unde se vor desfășura sesiunile de pregătire? </span>Pregătirile se vor
                                desfășura fizic (București) sau în mediul online (Google Meet / Discord).
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Descriere: </span>Pregătirile la Matematică se susțin în cea mai mare parte
                                pentru Examenul de Bacalaureat, dar nu numai. Dacă îți dorești să iei o notă cât mai mare în examen,
                                sau să îți îmbunătățești cunoștințele matematice, acesta este momentul.
                            </p>
                            <br/>
                        </div>
                    )}
                    {language === "UK" && (
                        <div className="meditatiiContainer">
                            <img src={Mate} style={{ marginTop: "10px", width: "25%" }} alt="React"/>
                            <p className="meditatiiTitle">Mathematics</p>
                            <p className="meditatiiPrice">100 lei / 1 hour and half | 75 lei / 1 hour</p>
                            <p className="meditatiiDescription">
                                <span className="bold">What will we learn: </span>Algebra, Geometry, and Mathematical Analysis.
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">What are we preparing for: </span>School Level or Baccalaureate Exam.
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Where will the meditatii sessions take place: </span>Sessions can take
                                place in-person (Bucharest) or online (Google Meet / Discord).
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Description: </span>Preparations in Mathematics are mostly conducted for
                                the Baccalaureate Exam and not only, but not exclusively. If you want to achieve the highest
                                possible grade on the exam or improve your mathematical knowledge, this is the moment.
                            </p>
                            <br/>
                        </div>
                    )}
                </Col>
                <Col sm={4}>
                    {language === "RO" && (
                        <div className="meditatiiContainer">
                            <img src={Info} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                            <p className="meditatiiTitle">Informatică</p>
                            <p className="meditatiiPrice">100 lei / 1 oră și jumătate | 75 de lei / 1 oră</p>
                            <p className="meditatiiDescription">
                                <span className="bold">Ce vom învăța: </span>Limbajele de programare C / C++.
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Pentru ce ne vom pregăti? </span>Nivel de Școală sau Examenul
                                de Bacalaureat.
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Unde se vor desfășura sesiunile de pregătire? </span>Pregătirile se vor
                                desfășura fizic (București) sau în mediul online (Google Meet / Discord).
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Descriere: </span>Informatica reprezintă mai mult decât niște cod scris pe o
                                foaie. Dacă dorești să-ți dezvolți și mai mult cunoștințele la Informatică, să iei Examenul de
                                Bacalaureat sau pur și simplu să te descurci mai bine la școală, acesta este momentul perfect pentru
                                a începe o colaborare.
                            </p>
                            <br/>
                        </div>
                    )}
                    {language === "UK" && (
                        <div className="meditatiiContainer">
                            <img src={Info} style={{ marginTop: "10px", width: "25%" }} alt="React"/>
                            <p className="meditatiiTitle">Informatics</p>
                            <p className="meditatiiPrice">100 lei / 1 hour | 75 lei / 1 hour</p>
                            <p className="meditatiiDescription">
                                <span className="bold">What will we learn: </span>Programming languages C / C++.
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">What are we preparing for: </span>School level or the Baccalaureate Exam.
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Where will the tutoring sessions take place: </span>Sessions can take place
                                in-person (Bucharest) or online (Google Meet / Discord).
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Description: </span>Informatics is more than just code written on a
                                sheet. If you want to further develop your knowledge in Informatics, pass the Baccalaureate
                                Exam, or simply perform much better in school, this is the perfect moment to start a collaboration.
                            </p>
                            <br/>
                        </div>
                    )}
                </Col>
                <Col sm={4}>
                    {language === "RO" && (
                        <div className="meditatiiContainer">
                            <img src={Tehn} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                            <p className="meditatiiTitle">Tehnologii Web</p>
                            <p className="meditatiiPrice">100 lei / 1 oră și jumătate | 75 de lei / 1 oră</p>
                            <p className="meditatiiDescription">
                                <span className="bold">Ce vom învăța: </span>Bazele React, JavaScript, Bootstrap, HTML și CSS.
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Pentru ce ne vom pregăti? </span>Începători, Nivel de Școală sau diverse Teme
                                / Proiecte pentru Școală / Facultate.
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Unde se vor desfășura sesiunile de pregătire? </span>Pregătirile se vor
                                desfășura doar în mediul online (Google Meet / Discord).
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Descriere: </span>Dacă dorești să înveți cât mai multe despre cele mai utilizate
                                Tehnologii din domeniul Web, ai o temă la școală / facultate sau pur și simplu este pasionat de domeniu
                                și nu știi de unde să începi, acesta este momentul pentru ca tu să mă contactezi.
                            </p>
                            <br/>
                        </div>
                    )}
                    {language === "UK" && (
                        <div className="meditatiiContainer">
                            <img src={Tehn} style={{ marginTop: "10px", width: "25%" }} alt="React"/>
                            <p className="meditatiiTitle">Web Technologies</p>
                            <p className="meditatiiPrice">100 lei / 1 hour | 75 lei / 1 hour</p>
                            <p className="meditatiiDescription">
                                <span className="bold">What will we learn: </span>Fundamentals of React, JavaScript, Bootstrap,
                                HTML, and CSS.
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">What are we preparing for: </span>Beginners, School Level, or various
                                Assignments / Projects for School / College.
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Where will the tutoring sessions take place: </span>Tutoring sessions
                                will take place only in the online environment (Google Meet / Discord).
                            </p>
                            <p className="meditatiiDescription">
                                <span className="bold">Description: </span>If you want to learn as much as possible about the
                                most commonly used technologies in the Web field, have a college assignment, or simply
                                have a passion and don't know where to start, this is the moment for you to contact me.
                            </p>
                            <br/>
                        </div>
                    )}
                </Col>
            </Row>
            <Feedback language={language}/>
            <Row className="text-center">
                <div class="buttonContainer">
                    {language === "RO" && (
                        <Button variant="dark" className="d-flex align-items-center justify-content-center meditatiiButton" href="/contact">
                            Contactează-mă aici
                        </Button>
                    )}
                    {language === "UK" && (
                        <Button variant="dark" className="d-flex align-items-center justify-content-center meditatiiButton" href="/contact">
                            Contact me here
                        </Button>
                    )}
                </div>
            </Row>
        </Container>
    )
}