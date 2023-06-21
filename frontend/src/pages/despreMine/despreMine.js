import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../components/containers/text.css';
import '../../components/containers/principalContainer.css';

export default function DespreMine() {
    return (
        <Container className="principalContainer text-center">
            <div className="principalTitle">
                Despre mine
                
            </div>
            <hr className="hr"/>
            <Row>
                <Col sm="6">
                    a
                </Col>
                <Col sm="6">
                    <Row>
                        <Col>
                            POZA
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            TEXT
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            SOCIAL
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}