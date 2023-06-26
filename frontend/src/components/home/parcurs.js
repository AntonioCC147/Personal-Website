import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import '../../components/containers/text.css';
import './parcurs.css';

import MePhoto from '../../assets/photos/MePhoto.jpg';

export default function Parcurs() {
    return (
        <Container fluid className="bg-dark" style={{color: "white"}}>
            <p className="title">Parcursul meu</p>
            <p className="subTitle">Subtitlu</p>
            <div className="text-center">
                <Image src={MePhoto} style={{width: "150px", height: "150px"}} roundedCircle/>
                <div className="rightText">
                    <p>a</p>
                    <p>b</p>
                </div>
            </div>
        </Container>
    )
}