import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import MePhoto from '../../assets/photos/MePhoto.jpg';

import './parcurs.css';

export default function ParcursText(props) {
    const { direction, title, period, description } = props;

    const isMobile = window.innerWidth;

    if(isMobile < 1000)
        return (
            <>
                <div className="container2">
                    <div className="content">
                        <Image src={MePhoto} style={{width: "150px", height: "150px"}} className="imgParcurs" roundedCircle/>
                        <div>
                            <span className="titleParcurs">{title}</span><br/>
                            <span className="periodParcurs">{period}</span><br/>
                            <span className="descriptionParcurs">{description}</span>
                        </div>
                    </div>
                </div>
                <div className="verticalMobileLine"/>
            </> 
        )
    else if(direction === "left")
        return (
            <Row>
                <Col sm={4}>
                    <div className="leftText">
                        <span className="titleParcurs">{title}</span><br/>
                        <span className="periodParcurs">{period}</span><br/>
                        <span className="descriptionParcurs">{description}</span>
                    </div>
                </Col>
                <Col sm={4} >
                    <Image src={MePhoto} style={{width: "150px", height: "150px"}} className="imgParcurs" roundedCircle/>
                </Col>
                <Col sm={4}/>
                <div className="verticalLine"/>
            </Row>
        )
    else if(direction === "right")
        return (
            <Row>
                <Col sm={4}/>
                <Col sm={4} >
                    <Image src={MePhoto} style={{width: "150px", height: "150px"}} className="imgParcurs" roundedCircle/>
                </Col>
                <Col sm={4}>
                    <div className="rightText">
                        <span className="titleParcurs">{title}</span><br/>
                        <span className="periodParcurs">{period}</span><br/>
                        <span className="descriptionParcurs">{description}</span>
                    </div>
                </Col>
                <div className="verticalLine"/>
            </Row>
        )
}