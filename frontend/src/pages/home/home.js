import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/esm/Button';

import './home.css';

export default function Home() {
    return (
        <>
            <div className="principalImg text-center">
                <Container className="homeContainer">
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
                </Container>
            </div>
            <Container>
                <Row>
                    <Col>
                        FAQ - Sa mut la Despre mine?
                    </Col>
                </Row>
                <Row>
                    <Col>
                        CV Insta Salvate
                    </Col>
                </Row>
            </Container>
        </>
    )
}