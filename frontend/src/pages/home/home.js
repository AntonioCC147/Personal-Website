import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

import TextEffect from './textEffect';
import Skills from '../../components/home/skills';
import ParcursMain from '../../components/home/parcursMain';
import CV from '../../components/home/cv';

import './home.css';
import '../../components/containers/text.css'

export default function Home({language}) {
    return (
        <div>
            <Container fluid className="principalImg text-center anta">
                <div className="homeContainer">
                    <Row>
                        <Col>
                            <p className="name">{`<`}Antonio-Cristian Crantea{`/>`}</p>
                            <TextEffect language={language} className="textEffect"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {language === "RO" && (
                                <Button variant="dark" href="/despre" className="d-flex align-items-center justify-content-center homeButton">Află mai multe</Button>
                            )}
                            {language === "UK" && (
                                <Button variant="dark" href="/about" className="d-flex align-items-center justify-content-center homeButton">Find out more</Button>
                            )}
                        </Col>
                    </Row>
                </div>
            </Container>
            <Skills language={language}/>
            <ParcursMain language={language}/>
            <CV language={language}/>
        </div>
    )
}