import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

import { SkillsCourses, Education, Certifications, Projects, Volunteering } from './cvFunctions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';

import MePhoto from '../../assets/photos/MePhoto.jpg';

import './cv.css';

export default function CV({language}) {
    return (
        <Container>
            <Row>
                <Col>
                    <p className="title">&lt; Curriculum Vitae /&gt;</p>
                    {language === "RO" && ( <p className="subTitle">O mică parte din munca pe care am depus-o în ultima perioadă</p> )}
                    {language === "UK" && ( <p className="subTitle">A small part of the work I have done recently</p> )}
                </Col>
            </Row>
            <Row>
                <Col sm={4} className="text-center">
                    <Image src={MePhoto} className="imgCV" alt="Image" roundedCircle/>
                    <Row>
                        <p className="nameCV">Crantea Antonio-Cristian</p>
                        {language === "RO" && ( <span><FontAwesomeIcon icon={faMap}/>{" "}București</span> )}
                        {language === "UK" && ( <span><FontAwesomeIcon icon={faMap}/>{" "}Bucharest</span> )}
                    </Row>
                    <SkillsCourses language={language}/>
                </Col>
                <Col sm={8}>
                    <Education language={language}/>
                    <Certifications language={language}/>
                    <Projects language={language}/>
                    <Volunteering language={language}/>
                </Col>
            </Row>
        </Container>
    )
}