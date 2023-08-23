import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';

import { SkillsCourses, Education, Certifications, Work, Projects, Volunteering } from './cvFunctions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';

import MePhoto from '../../assets/photos/MePhoto.jpg';

import './cv.css';

export default function CV() {
    return (
        <Container>
            <Row>
                <Col>
                    <p className="title">Curriculum Vitae</p>
                    <p className="subTitle">O mică parte din munca pe care am depus-o în ultima perioadă</p>
                </Col>
            </Row>
            <Row>
                <Col sm={4} className="text-center">
                    <Image src={MePhoto} className="imgCV" alt="Image" roundedCircle/>
                    <Row>
                        <p className="nameCV">Crantea Antonio-Cristian</p>
                        <span><FontAwesomeIcon icon={faEnvelope}/>{" "}antoniocrantea@gmail.com</span>
                        <span><FontAwesomeIcon icon={faMap}/>{" "}București</span>
                    </Row>
                    <SkillsCourses/>
                </Col>
                <Col sm={8}>
                    <Education/>
                    <Certifications/>
                    <Projects/>
                    <Volunteering/>
                </Col>
            </Row>
        </Container>
    )
}