import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

import './feedback.css';

import StarsIcon from '../../assets/icons/StarsIcon.png';

export default function Feedback() {
    return (
        <Container className="bg-dark principalContainer text-center" style={{color: "white"}}>
            <p className="title">Feedback</p>
            <p className="subTitle">Câteva gânduri de-ale elevilor mei la finalul pregătirilor</p>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <p className="feedbackNameText">Ștefan - Clasa a XII-a, Informatică</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">Îți multumesc mult pentru ajutor, Toni. Am luat cea mai mare
                            notă din bac din clasă.
                        </p>
                    </Carousel.Item>

                    <Carousel.Item>
                        <p className="feedbackNameText">Cristiana - Clasa a XI-a, Informatică</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">Am vrut să îți zic că îți mulțumesc mult mult pentru orele
                            făcute de pregătire, m-au ajutat foarte mult și mă bucur foarte mult că am găsit o astfel de
                            persoană, care a reușit să mă ajute să înțeleg informatica, în acest fel!
                        </p>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    )
}