import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

import './feedback.css';

import StarsIcon from '../../assets/icons/StarsIcon.png';

export default function Feedback({language}) {
    return (
        <Container className="bg-dark principalContainer text-center" style={{color: "white"}}>
            <p className="title">Feedback</p>
            {language === "RO" && ( <p className="subTitle">Câteva gânduri de-ale elevilor mei la finalul pregătirilor</p> )}
            {language === "UK" && ( <p className="subTitle">Some thoughts from my students at the end of the preparations</p> )}
            <Row>
                <Carousel>
                    {language === "RO" && (
                        <Carousel.Item interval={2500}>
                            <p className="feedbackNameText">Ștefan 1 | Clasa a XII-a - Informatică | Bacalaureat</p>
                            <img src={StarsIcon} className="stars" alt="Stars"/>
                            <p className="feedbackDescriptionText">
                                Îți multumesc mult pentru ajutor, Toni. Am luat cea mai mare
                                notă din bac din clasă.
                            </p>
                        </Carousel.Item>
                    )}
                    {language === "UK" && (
                        <Carousel.Item interval={2500}>
                            <p className="feedbackNameText">Ștefan 1 | 12th Grade - Informatics | Baccalaureate</p>
                            <img src={StarsIcon} className="stars" alt="Stars"/>
                            <p className="feedbackDescriptionText">
                                Thank you very much for your help, Toni. I got the highest
                                grade in the class on the baccalaureate exam.
                            </p>
                        </Carousel.Item>
                    )}

                    {language === "RO" && (
                        <Carousel.Item interval={4000}>
                            <p className="feedbackNameText">Andrada | Clasa a XII-a - Informatică | Bacalaureat și Admitere</p>
                            <img src={StarsIcon} className="stars" alt="Stars"/>
                            <p className="feedbackDescriptionText">
                                După un an de munca, alături de susținerea, explicațiile și
                                dedicarea ta, pot spune că nu cred că aș fi găsit un interes mai mare sau o voința mai puternica în
                                a ajuta elevii sa-și perpetueze drumul fie oricât de tumultuos. Experienta mea a fost excelenta,
                                având mereu înțelegerea și răbdarea ta, dând dovadă de seriozitate și implicare chiar și în momentele
                                limită ce-ți puneau răbdarea, timpul, la încercare. Ajutorul tău a fost de mare folos și-ți mulțumesc
                                că te oferi să dai mai departe informația pe care o deții, pentru că explici mai bine decat mulți
                                profesori cu calificare pentru acest lucru. Mulțumesc pt colaborarea frumoasă!
                            </p>
                        </Carousel.Item>
                    )}
                    {language === "UK" && (
                        <Carousel.Item interval={4000}>
                            <p className="feedbackNameText">Andrada | 12th Grade - Informatics | Baccalaureate and Admission</p>
                            <img src={StarsIcon} className="stars" alt="Stars"/>
                            <p className="feedbackDescriptionText">
                                After a year of hard work, along with your support, explanations, and dedication,
                                I can say that I couldn't have found a greater interest or stronger determination
                                to help students continue their journey no matter how tumultuous it may be. My experience
                                was excellent, always having your understanding and patience, showing seriousness and
                                commitment even in challenging moments that tested your patience and time. Your help was
                                invaluable, and I thank you for offering to share the knowledge you possess, because you
                                explain better than many qualified teachers. Thank you for the wonderful collaboration!
                            </p>
                        </Carousel.Item>
                    )}

                    {language === "RO" && (
                        <Carousel.Item interval={2500}>
                            <p className="feedbackNameText">Cristiana | Clasa a XI-a - Informatică | Pregătire Școlară</p>
                            <img src={StarsIcon} className="stars" alt="Stars"/>
                            <p className="feedbackDescriptionText">
                                Am vrut să îți zic că îți mulțumesc mult, mult pentru orele
                                făcute de pregătire, m-au ajutat foarte mult și mă bucur foarte mult că am găsit o astfel de
                                persoană, care a reușit să mă ajute să înțeleg informatica, în acest fel!
                            </p>
                        </Carousel.Item>
                    )}
                    {language === "UK" && (
                        <Carousel.Item interval={2500}>
                            <p className="feedbackNameText">Cristiana | 11th Grade - Informatics | School Preparation</p>
                            <img src={StarsIcon} className="stars" alt="Stars"/>
                            <p className="feedbackDescriptionText">
                                I wanted to tell you that I thank you very, very much for the preparation
                                lessons; they helped me a lot, and I am very happy to have found such a person who
                                managed to help me understand computer science this way!
                            </p>
                        </Carousel.Item>
                    )}

                    {language === "RO" && ( 
                        <Carousel.Item interval={2500}>
                            <p className="feedbackNameText">Mihnea | Clasa a X-a - Informatică și Matematică | Pregătire Școlară</p>
                            <img src={StarsIcon} className="stars" alt="Stars"/>
                            <p className="feedbackDescriptionText">
                                Mulțumesc mult pentru tot ajutorul! Ai fost cu adevărat un bun
                                povățuitor, iar lucrul cu tine m-a ajutat extrem de mult la școală.
                            </p>
                        </Carousel.Item>
                    )}
                    {language === "UK" && (
                        <Carousel.Item interval={2500}>
                            <p className="feedbackNameText">Mihnea | 10th Grade - Informatics and Mathematics | School Preparation</p>
                            <img src={StarsIcon} className="stars" alt="Stars"/>
                            <p className="feedbackDescriptionText">
                                Thank you very much for all the help! You have truly been a great
                                guide, and working with you has greatly helped me at school.
                            </p>
                        </Carousel.Item>
                    )}

                    {language === "RO" && (
                        <Carousel.Item interval={2500}>
                            <p className="feedbackNameText">Mama lui Mihnea | Clasa a V-a - Matematică | Pregătire Școlară</p>
                            <img src={StarsIcon} className="stars" alt="Stars"/>
                            <p className="feedbackDescriptionText">
                                Mulțumim mult, Antonio pentru tot ajutorul oferit!
                            </p>
                        </Carousel.Item>
                    )}
                    {language === "UK" && (
                        <Carousel.Item interval={2500}>
                            <p className="feedbackNameText">Mihnea's Mom | 5th Grade - Mathematics | School Preparation</p>
                            <img src={StarsIcon} className="stars" alt="Stars"/>
                            <p className="feedbackDescriptionText">
                                Thank you very much, Antonio, for all the help provided!
                            </p>
                        </Carousel.Item>
                    )}

                    {language === "RO" && (
                        <Carousel.Item interval={2500}>
                            <p className="feedbackNameText">Ștefan 2 | Clasa a XII-a - Informatică | Bacalaureat</p>
                            <img src={StarsIcon} className="stars" alt="Stars"/>
                            <p className="feedbackDescriptionText">
                                Am dat bacul inițial în 2022 în ambele sesiuni, dar nu am avut media necesară pentru a promova,
                                ulterior nici în iunie 2023 neavând media necesară pentru a promova. Dupa aproximativ o luna și câteva zile de muncă
                                la foc automat împreună cu Toni, am reușit împreună ca în sesiunea august 2023 să ajung de la nota
                                6.20 la nota 8.10 la Informatica. Îți mulțumesc mult de tot pentru tot ajutorul acordat și am rămas
                                uimit de modul tău de predare și de explicare a exercițiilor!
                            </p>
                        </Carousel.Item>
                    )}
                    {language === "UK" && (
                        <Carousel.Item interval={2500}>
                            <p className="feedbackNameText">Ștefan 2 | 12th Grade - Informatics | Baccalaureate</p>
                            <img src={StarsIcon} className="stars" alt="Stars"/>
                            <p className="feedbackDescriptionText">
                                I initially took the baccalaureate exam in 2022 in both sessions but didn't have the
                                necessary grade to pass. Later, in June 2023, I still didn't have the required grade to
                                pass. After about a month and a few days of intensive work with Toni, we managed together
                                to improve my grade from 6.20 to 8.10 in Computer Science in the August 2023 session. Thank
                                you very much for all the help, and I was amazed by your teaching and explanation methods!
                            </p>
                        </Carousel.Item>
                    )}
                </Carousel>
            </Row>
        </Container>
    )
}