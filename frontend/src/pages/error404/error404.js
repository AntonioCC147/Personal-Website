import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './error404.css';

import error404 from '../../assets/photos/error404.png';

export default function Error404({language}) {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <img className="errorPhoto" src={error404} alt="Error 404"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    {language === "RO" && ( <p className="errorText">Pagina căutată se pare că nu există!</p> )}
                    {language === "UK" && ( <p className="errorText">The page you're looking for doesn't seem to exist!</p> )}
                </Col>
            </Row>
        </Container>
    )
}