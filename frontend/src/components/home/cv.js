import { SkillsCourses, Education, Certifications, Experience, Projects, Volunteering, ProgressBar } from './cvFunctions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';

import MePhoto1 from '../../assets/photos/MePhoto1.png';

import './cv.css';

export default function CV({language}) {
    return (
        <Container className="anta containerWaveText">
            <Row>
                <Col>
                    <p className="title">&lt; Curriculum Vitae /&gt;</p>
                    {language === "RO" && ( <p className="subTitle">O mică parte din munca pe care am depus-o în ultima perioadă</p> )}
                    {language === "UK" && ( <p className="subTitle">A small part of the work I have done recently</p> )}
                </Col>
            </Row>
            <Row>
                <Col sm={4} className="text-center">
                    <Image src={MePhoto1} className="imgCV" alt="Image"/>
                    <p className="nameCV">Crantea Antonio-Cristian</p>
                    <SkillsCourses language={language}/>
                    <ProgressBar/>
                </Col>
                <Col sm={8}>
                    <Education language={language}/>
                    <Certifications language={language}/>
                    <Experience language={language}/>
                    <Projects language={language}/>
                    <Volunteering language={language}/>
                </Col>
            </Row>
        </Container>
    )
}