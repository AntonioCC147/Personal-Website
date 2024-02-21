import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactIcon from '../../assets/icons/ReactIcon.png';
import HTMLCSSIcon from '../../assets/icons/HTMLCSSIcon.png';
import CppIcon from '../../assets/icons/CppIcon.png';
import MatlabIcon from '../../assets/icons/MatlabIcon.png';
import ManagementIcon from '../../assets/icons/ManagementIcon.png';

import '../../components/containers/text.css';
import './skills.css';

export default function Skills({language}) {
    return (
        <Container className="text-center anta">
            <p className="title">&lt; Skills /&gt;</p>
            {language === "RO" && ( <p className="subTitle">Câteva cunoștințe de bază pe care le-am dobândit de-a lungul anilor</p> )}
            {language === "UK" && ( <p className="subTitle">Some basic knowledge I've picked up over the years</p> )}
            <Row>
                <Col sm={4}>
                    <div className="skillsContainer">
                        <img src={ReactIcon} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        <p className="skillsTitle">React & JavaScript</p>
                        {language === "RO" && (
                            <p className="skillsDescription">
                                Am început să învăț și să lucrez cu React și JavaScript în cadrul "Departamentului de IT". Aici am
                                avut câteva proiecte interne cu care am putut să-mi dezvolt lucrul cu acest framework, dar și să
                                învăț cât mai multe. Spre exemplu, acest site este realizat cu React și JavaScript.
                            </p>
                        )}
                        {language === "UK" && (
                            <p className="skillsDescription">
                                I started learning and working with React and JavaScript in the "IT Department". Here I have
                                had some internal projects with which I was able to develop my work with this framework, but also to
                                I learn as much as possible. For example, this site is built with React and JavaScript.
                            </p>
                        )}
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="skillsContainer">
                        <img src={HTMLCSSIcon} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        <p className="skillsTitle">HTML & CSS</p>
                        {language === "RO" && (
                            <p className="skillsDescription">
                                HTML & CSS sunt cele mai de bază limbaje pe care un program trebuie să le cunoască. Am început să
                                lucrez mai mult cu acestea anul trecut când am realizat "Atestatul la Informatică" pentru liceu,
                                iar ulterior în toate proiectele la care lucram și în React, fiind 100% necesar.
                            </p>
                        )}
                        {language === "UK" && (
                            <p className="skillsDescription">
                                HTML & CSS are the most basic languages ​​a program needs to know. I began to
                                I work more with these last year when I completed the "Informatics Certificate" for high school,
                                and later in all the projects I was working on and in React, being 100% necessary.
                            </p>
                        )}
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="skillsContainer">
                        <img src={CppIcon} style={{marginTop: "10px", width: "22%"}} alt="React"/>
                        <p className="skillsTitle">C & C++</p>
                        {language === "RO" && (
                            <p className="skillsDescription">
                                C & C++ sunt, de asemenea, cele mai de bază limbaje de programare. C++ am făcut la liceu timp de 4
                                ani, iar C am început să fac la facultate. Ambele limbaje îmi sunt plăcute și destul de cunoscute.
                                Urmează, în cadrul cursurilor de la facultate, să pătrund și mai mult în aceste limbaje.
                            </p>
                        )}
                        {language === "UK" && (
                            <p className="skillsDescription">
                                C & C++ are also the most basic programming languages. I did C++ in high school for 4
                                years, and I started doing C in college. Both languages ​​are pleasant and quite familiar to me.
                                I am going to delve even more into these languages ​​in my university courses.
                            </p>
                        )}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={2}/>
                <Col sm={4}>
                    <div className="skillsContainer">
                        <img src={MatlabIcon} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        <p className="skillsTitle">Matlab</p>
                        {language === "RO" && (
                            <p className="skillsDescription">
                                Matlab reprezintă un limbaj pe care l-am utilizat în prima parte a anului universitar 2020-2023.
                                Urmează să îl mai întâlnesc pe parcursul facultății, iar eu nu îl consider un limbaj greu de învățat.
                            </p>
                        )}
                        {language === "UK" && (
                            <p className="skillsDescription">
                                Matlab is a language that I used in the first part of the academic year 2020-2023.
                                I'm going to meet it again during college, and I don't consider it a difficult language to learn.
                            </p>
                        )}
                    </div>
                </Col>
                <Col>
                    <div className="skillsContainer">
                        <img src={ManagementIcon} style={{marginTop: "10px", width: "22%"}} alt="React"/>
                        <p className="skillsTitle">Management & Leadership</p>
                        {language === "RO" && (
                            <p className="skillsDescription">
                                Pe parcursul primului an universitar am avut șansa de a fi "Șef de Grupă", "Șef de Serie" și "Team
                                Lead" în cadrul unui proiect intern din "Departamentul de IT", deci am avut ocazia să lucrez și îndrum
                                oamenii.
                            </p>
                        )}
                        {language === "UK" && (
                            <p className="skillsDescription">
                                During the first academic year I had the chance to be "Head of Group", "Head of Series" and "Team
                                Lead" within an internal project from the "IT Dep", so I had the opportunity to work and guide the people.
                            </p>
                        )}
                    </div>
                </Col>
                <Col sm={2}/>
            </Row>
        </Container>
    )
}