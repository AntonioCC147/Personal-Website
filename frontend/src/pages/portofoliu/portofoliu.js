import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PortofoliuCard from './portofoliuCard';

import MePhoto from '../../assets/photos/MePhoto.jpg';

export default function Portofoliu() {
    return (
        <Container>
            <Row>
                <Col>
                    <PortofoliuCard
                        img={MePhoto} title={<>A</>}
                        description={<>1</>}
                        git="/" adress="/despremine"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        img={MePhoto} title={<>A</>}
                        description={<>2</>}
                        git="/" adress="/despremine"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        img={MePhoto} title={<>A</>}
                        description={<>3</>}
                        git="/" adress="/despremine"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortofoliuCard
                        img={MePhoto} title={<>A</>}
                        description={<>4</>}
                        git="/" adress="/despremine"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        img={MePhoto} title={<>A</>}
                        description={<>5</>}
                        git="/" adress="/despremine"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        img={MePhoto} title={<>A</>}
                        description={<>6</>}
                        git="/" adress="/despremine"
                    />
                </Col>
            </Row>
        </Container>
    );
}