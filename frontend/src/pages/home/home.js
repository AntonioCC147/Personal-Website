import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

import Skills from '../../components/home/skills';
import ParcursMain from '../../components/home/parcursMain';
import CV from '../../components/home/cv';

import './home.css';
import '../../components/containers/text.css';

export default function Home() {
    return (
        <>
            <Container className="principalImg text-center">
                <div className="homeContainer">
                    <Row>
                        <Col>
                            <p className="name">{`<`}Antonio-Cristian Crantea{`/>`}</p>
                            <p className="studied">Automatic Control & Computer Science</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="secondary" href="/despremine">Află mai multe</Button>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Skills/>
            <ParcursMain/>
            <CV/>
                
        </>
    )
}