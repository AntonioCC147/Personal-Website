import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactIcon from '../../assets/icons/ReactIcon.png';
import HTMLCSSIcon from '../../assets/icons/HTMLCSSIcon.png';
import CppIcon from '../../assets/icons/CppIcon.png';

import '../../components/containers/text.css';
import './skills.css';

export default function Skills() {
    return (
        <Container className="text-center">
            <p className="title">Skills</p>
            <p className="subTitle">Câteva cunoștințe de bază pe care le-am dobândit de-a lungul anilor</p>
            <Row>
                <Col sm={4}>
                    <div className="skillsContainer">
                        <img src={ReactIcon} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        <p className="skillsTitle">React & JavaScript</p>
                        <p className="skillsDescription">
                            Am început să învăț și să lucrez cu React și JavaScript în cadrul "Departamentului de IT". Aici am
                            avut câteva proiecte interne cu care am putut să-mi dezvolt lucrul cu acest framework, dar și să
                            învăț cât mai multe. Spre exemplu, acest site este realizat cu React și JavaScript.
                        </p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="skillsContainer">
                        <img src={HTMLCSSIcon} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        <p className="skillsTitle">HTML & CSS</p>
                        <p className="skillsDescription">
                            HTML & CSS sunt cele mai de bază limbaje pe care un program trebuie să le cunoască. Am început să
                            lucrez mai mult cu acestea anul trecut când am realizat "Atestatul la Informatică" pentru liceu,
                            iar ulterior în toate proiectele la care lucram și în React, fiind 100% necesar.
                        </p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="skillsContainer">
                        <img src={CppIcon} style={{marginTop: "10px", width: "22%"}} alt="React"/>
                        <p className="skillsTitle">C & C++</p>
                        <p className="skillsDescription">
                            C & C++ sunt, de asemenea, cele mai de bază limbaje de programare. C++ am făcut la liceu timp de 4
                            ani, iar C am început să fac la facultate. Ambele limbaje îmi sunt plăcute și destul de cunoscute.
                            Urmează, în cadrul cursurilor de la facultate, să pătrund și mai mult în aceste limbaje.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}