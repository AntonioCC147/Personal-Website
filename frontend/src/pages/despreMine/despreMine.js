import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MePhoto from '../../assets/photos/MePhoto.jpg';
import FAQ from '../../components/faq/faq';

import './despreMine.css';
import '../../components/containers/text.css';
import '../../components/containers/principalContainer.css';

export default function DespreMine() {
    return (
        <>
            <Container className="bg-dark principalContainer text-center">
                <div className="principalTitle">
                    Despre mine
                </div>
                <hr className="hr"/>
                <Row>
                    <Col sm="4">
                        <img src={MePhoto} className="img-setUp" alt="MePhoto"/>
                    </Col>
                    <Col sm="8">
                        <Row>
                            <Col>
                                
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                A
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
            <FAQ/>
        </>
    )
}