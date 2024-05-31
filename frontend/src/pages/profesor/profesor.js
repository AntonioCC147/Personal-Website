import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PCLP from '../../assets/profesor/PCLP.png';
import SDA from '../../assets/profesor/SDA.png';
import OOP from '../../assets/profesor/OOP.png';
import TW from '../../assets/profesor/TW.png';
import Info from '../../assets/profesor/Info.png';
import Mate from '../../assets/profesor/Mate.png';
import Tehn from '../../assets/profesor/Tehn.png';
import Verify from '../../assets/profesor/Verify.png';

import '../../components/containers/text.css';
import './profesor.css';

export default function Profesor({language}) {
    return (
        <Container className="text-center anta">
            <Row  className="text-center">
                {language === "RO" && ( <p className="title">&lt; Profesor /&gt;</p> )}
                {language === "UK" && ( <p className="title">&lt; Teacher /&gt;</p> )}
                {language === "RO" && ( <p className="subTitle" style={{ marginBottom: "40px" }}>Educația reprezintă una dintre prioritățile mele principale</p> )}
                {language === "UK" && ( <p className="subTitle" style={{ marginBottom: "40px" }}>Education is one of my main priorities</p> )}
                {language === "RO" && ( <p className="subSubTitle">&lt; Voluntar la Laborator /&gt;</p> )}
                {language === "UK" && ( <p className="subSubTitle">&lt; Laboratory Volunteer /&gt;</p> )}
                <Col lg={2}/>
                <Col lg={4}>
                    <div className="teacherContainerLeft">
                        <img src={PCLP} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        {language === "RO" && (
                            <>
                                <p className="teacherTitle">Programarea Calculatoarelor și Limbaje de Programare 1</p>
                                <p className="teacherLanguage">Limbajul C</p>
                                <p className="teacherYear">Anul 1, Seria AA</p>
                                <p className="teacherData">Octombrie 2023 - Prezent</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Voluntar la laborator</p>
                            </>
                        )}
                        {language === "UK" && (
                            <>
                                <p className="teacherTitle">Computer Programming and Programming Languages 1</p>
                                <p className="teacherLanguage">C Language</p>
                                <p className="teacherYear">Year 1, Series AA</p>
                                <p className="teacherData">October 2023 - Present</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Laboratory Volunteer</p>
                            </>
                        )}
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="teacherContainerRight">
                        <img src={SDA} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        {language === "RO" && (
                            <>
                                <p className="teacherTitle">Proiectarea Algoritmilor<br/>(Structuri de Date și Algoritmi)</p>
                                <p className="teacherLanguage">Limbajul C</p>
                                <p className="teacherYear">Anul 1, Seria AA</p>
                                <p className="teacherData">Februarie 2024 - Prezent</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Voluntar la laborator</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Suport la teme</p>
                            </>
                        )}
                        {language === "UK" && (
                            <>
                                <p className="teacherTitle">Algorithms Design<br/>(Data Structures and Algorithms)</p>
                                <p className="teacherLanguage">C Language</p>
                                <p className="teacherYear">Year 1, Series AA</p>
                                <p className="teacherData">February 2024 - Present</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Laboratory Volunteer</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Homework support</p>
                            </>
                        )}
                    </div>
                </Col>
                <Col lg={2}/>
            </Row>
            <Row  className="text-center">
                <Col lg={2}/>
                <Col lg={4}>
                    <div className="teacherContainerLeft">
                        <img src={OOP} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        {language === "RO" && (
                            <>
                                <p className="teacherTitle">Programare Orientată pe Obiect</p>
                                <p className="teacherLanguage">Limbajul C++</p>
                                <p className="teacherYear">Anul 2, Seria AA</p>
                                <p className="teacherData">Va urma</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Voluntar la laborator</p>
                            </>
                        )}
                        {language === "UK" && (
                            <>
                                <p className="teacherTitle">Object Oriented Programming</p>
                                <p className="teacherLanguage">C++ Language</p>
                                <p className="teacherYear">Year 2, Series AA</p>
                                <p className="teacherData">Coming Soon</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Laboratory Volunteer</p>
                            </>
                        )}
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="teacherContainerRight">
                        <img src={TW} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        {language === "RO" && (
                            <>
                                <p className="teacherTitle">Tehnologii Web</p>
                                <p className="teacherLanguage">HTML, CSS, JavaScript</p>
                                <p className="teacherYear">Anul 2, Seria AA / AC</p>
                                <p className="teacherData">Va urma</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Susținător de laborator</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Mentor React pe proiecte interne</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Organizator ZebraHack (Hackathon Intern)</p>
                            </>
                        )}
                        {language === "UK" && (
                            <>
                                <p className="teacherTitle">Web Technology</p>
                                <p className="teacherLanguage">HTML, CSS, JavaScript</p>
                                <p className="teacherYear">Year 2, Series AA / AC</p>
                                <p className="teacherData">Coming Soon</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Laboratory Supporter</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Mentor React on internal projects</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Zebra Hack Organizer (Internal Hackathon)</p>
                            </>
                        )}
                    </div>
                </Col>
                <Col lg={2}/>
            </Row>
            <Row  className="text-center">
                {language === "RO" && ( <p className="subSubTitle">&lt; Mentor Educațional /&gt;</p> )}
                {language === "UK" && ( <p className="subSubTitle">&lt; Educational Mentor /&gt;</p> )}
                <Col lg={2}/>
                <Col lg={4}>
                    <div className="teacherContainerLeft">
                        <img src={Info} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        {language === "RO" && (
                            <>
                                <p className="teacherTitle">Informatică</p>
                                <p className="teacherLanguage">Limbajele C / C++</p>
                                <p className="teacherData">August 2021 - Prezent</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}100+ elevi ajutați</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Suport la școală (aprofundare, teme, teste)</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Suport la examenul de bacalaureat</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Suport la examenul de admitere (UPB, UniBuc)</p>
                            </>
                        )}
                        {language === "UK" && (
                            <>
                                <p className="teacherTitle">Computer Science</p>
                                <p className="teacherLanguage">C / C++ Languages</p>
                                <p className="teacherData">August 2021 - Present</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}100+ students helped</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}School support (study, homework, tests)</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Support for the baccalaureate exam</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Support for the entrance exam (UPB, UniBuc)</p>
                            </>
                        )}
                    </div>
                </Col>
                <Col lg={4}>
                <div className="teacherContainerRight">
                        <img src={Mate} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        {language === "RO" && (
                            <>
                                <p className="teacherTitle">Matematică</p>
                                <p className="teacherLanguage">Algebră, Geometrie, Analiză</p>
                                <p className="teacherData">Septembrie 2022 - Prezent</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}10+ elevi ajutați</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Suport la școală (aprofundare, teme, teste)</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Suport la examenul de bacalaureat</p>
                            </>
                        )}
                        {language === "UK" && (
                            <>
                                <p className="teacherTitle">Mathematics</p>
                                <p className="teacherLanguage">Algebra, Geometry, Analysis</p>
                                <p className="teacherData">September 2022 - Present</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}10+ students helped</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}School support (study, homework, tests)</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Support for the baccalaureate exam</p>
                            </>
                        )}
                    </div>
                </Col>
                <Col lg={2}/>
            </Row>
            <Row  className="text-center">
                <Col lg={4}/>
                <Col lg={4}>
                    <div className="teacherContainerCenter">
                        <img src={Tehn} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        {language === "RO" && (
                            <>
                                <p className="teacherTitle">Tehnologii Web</p>
                                <p className="teacherLanguage">React, HTML, CSS, BootStrap</p>
                                <p className="teacherData">Iulie 2023 - Prezent</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}10+ elevi ajutați</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Suport la proiecte</p>
                            </>
                        )}
                        {language === "UK" && (
                            <>
                                <p className="teacherTitle">Web Technologies</p>
                                <p className="teacherLanguage">React, HTML, CSS, BootStrap</p>
                                <p className="teacherData">July 2023 - Present</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}10+ students helped</p>
                                <p className="teacherDescription"><img src={Verify} style={{width: "25px"}} alt="Verify"/>{' '}Project support</p>
                            </>
                        )}
                    </div>
                </Col>
                <Col lg={4}/>
            </Row>
        </Container>
    )
}