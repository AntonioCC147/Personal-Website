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
            <p className="subTitle">Acesta reprezinta un subtitlu pe care va trebui sa-l completez</p>
            <Row>
                <Col sm={4}>
                    <div className="skillsContainer">
                        <img src={ReactIcon} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        <p className="skillsTitle">React & JavaScript</p>
                        <p className="skillsDescription">
                            Aceasta este o descriere ampla a reactului. Nu stiu ce ar trebui sa scriu, dar voi scrie ceva aici
                            si dupa asta va fi foarte bine ca am scris.
                        </p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="skillsContainer">
                        <img src={HTMLCSSIcon} style={{marginTop: "10px", width: "25%"}} alt="React"/>
                        <p className="skillsTitle">HTML & CSS</p>
                        <p className="skillsDescription">
                            Aceasta este o descriere ampla a reactului. Nu stiu ce ar trebui sa scriu, dar voi scrie ceva aici
                            si dupa asta va fi foarte bine ca am scris.
                        </p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="skillsContainer">
                        <img src={CppIcon} style={{marginTop: "10px", width: "22%"}} alt="React"/>
                        <p className="skillsTitle">C & C++</p>
                        <p className="skillsDescription">
                            Aceasta este o descriere ampla a reactului. Nu stiu ce ar trebui sa scriu, dar voi scrie ceva aici
                            si dupa asta va fi foarte bine ca am scris.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}