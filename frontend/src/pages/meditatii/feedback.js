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
                    <Carousel.Item interval={2500}>
                        <p className="feedbackNameText">Ștefan | Clasa a XII-a - Informatică | Bacalaureat</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">Îți multumesc mult pentru ajutor, Toni. Am luat cea mai mare
                            notă din bac din clasă.
                        </p>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <p className="feedbackNameText">Andrada | Clasa a XII-a - Informatică | Bacalaureat și Admitere</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">După un an de munca, alături de susținerea, explicațiile și
                            dedicarea ta, pot spune că nu cred că aș fi găsit un interes mai mare sau o voința mai puternica în
                            a ajuta elevii sa-și perpetueze drumul fie oricât de tumultuos. Experienta mea a fost excelenta,
                            având mereu înțelegerea și răbdarea ta, dând dovadă de seriozitate și implicare chiar și în momentele
                            limită ce-ți puneau răbdarea, timpul, la încercare. Ajutorul tău a fost de mare folos și-ți mulțumesc
                            că te oferi să dai mai departe informația pe care o deții, pentru că explici mai bine decat mulți
                            profesori cu calificare pentru acest lucru. Mulțumesc pt colaborarea frumoasă!
                        </p>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <p className="feedbackNameText">Cristiana | Clasa a XI-a - Informatică | Pregătire Școlară</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">Am vrut să îți zic că îți mulțumesc mult, mult pentru orele
                            făcute de pregătire, m-au ajutat foarte mult și mă bucur foarte mult că am găsit o astfel de
                            persoană, care a reușit să mă ajute să înțeleg informatica, în acest fel!
                        </p>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <p className="feedbackNameText">Mihnea | Clasa a X-a - Informatică și Matematică | Pregătire Școlară</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">Mulțumesc mult pentru tot ajutorul! Ai fost cu adevărat un bun
                            povățuitor, iar lucrul cu tine m-a ajutat extrem de mult la școală.
                        </p>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <p className="feedbackNameText">Mama lui Mihnea | Clasa a V-a - Matematică | Pregătire Școlară</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">Mulțumim mult, Antonio pentru tot ajutorul oferit!
                        </p>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    )
}