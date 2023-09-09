import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PortofoliuCard from './portofoliuCard';

import ProiectChimie from '../../assets/projects/ProiectChimie.jpg';
    import Chimie1 from '../../assets/projects/Chimie1.jpg';
    import Chimie2 from '../../assets/projects/Chimie2.jpg';
    import Chimie3 from '../../assets/projects/Chimie3.jpg';
import ProiectACS from '../../assets/projects/ProiectACS.jpg';
    import ACS1 from '../../assets/projects/ACS1.jpg';
    import ACS2 from '../../assets/projects/ACS2.jpg';
    import ACS3 from '../../assets/projects/ACS3.jpg';
import ProiectProba from '../../assets/projects/ProiectProba.jpg';
    import Proba1 from '../../assets/projects/Proba1.jpg';
    import Proba2 from '../../assets/projects/Proba2.jpg';
    import Proba3 from '../../assets/projects/Proba3.jpg';
import ProiectConfiguration from '../../assets/projects/ProiectConfiguration.jpg';
    import Config1 from '../../assets/projects/Config1.jpg';
    import Config2 from '../../assets/projects/Config2.jpg';
    import Config3 from '../../assets/projects/Config3.jpg';
import ProiectHack from '../../assets/projects/ProiectHack.jpg';
    import Mental1 from '../../assets/projects/Mental1.jpg';
    import Mental2 from '../../assets/projects/Mental2.jpg';
    import Mental3 from '../../assets/projects/Mental3.jpg';
import ProiectWordScramble from '../../assets/projects/ProiectWordScramble.jpg';
    import WS1 from '../../assets/projects/WS1.jpg';
    import WS2 from '../../assets/projects/WS2.jpg';
    import WS3 from '../../assets/projects/WS3.jpg';
import ProiectPA from '../../assets/projects/ProiectPA.jpg';
    import PA1 from '../../assets/projects/PA1.jpg';
    import PA2 from '../../assets/projects/PA2.jpg';
    import PA3 from '../../assets/projects/PA3.jpg';
import ProiectLitere from '../../assets/projects/ProiectLitere.jpg';
    import Joc1 from '../../assets/projects/Joc1.jpg';
    import Joc2 from '../../assets/projects/Joc2.jpg';
    import Joc3 from '../../assets/projects/Joc3.jpg';

import '../../components/containers/text.css';
import './portofoliu.css';

export default function Portofoliu() {
    return (
        <Container>
            <Row>
                <p className="title">Portofoliu</p>
                <p className="subTitle" style={{marginBottom: "40px"}}>Mai jos prezint câteva creații personale. Acestea nu reprezintă și munca din cadrul Departamentului de IT</p>
                <Col>
                    <PortofoliuCard
                        linkToProject="yes"
                        img={ProiectChimie} img1={Chimie1} img2={Chimie2} img3={Chimie3}
                        title={<>Chemistry App - Web App</>}
                        description={<>Proiectul a fost realizat la "Sesiunea de Comunicări Științifice" și reprezintă o
                        aplicație pentru laboratoarele de chimie.</>}
                        technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                        git="https://github.com/AntonioCC147/Chemistry-App" adress="https://acs-chemistry-app.netlify.app/"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        linkToProject="yes"
                        img={ProiectACS} img1={ACS1} img2={ACS2} img3={ACS3}
                        title={<>ACS IS AA - Web App</>}
                        description={<>Proiectul a fost realizat pentru a oferi un ajutor bobocilor de la Automatică. Conține
                        mai multe informații esențiale, inclusiv feedback la materii.</>}
                        technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                        git="https://github.com/AntonioCC147/ACS-IS-AA-Website" adress="https://acs-is-aa.software/"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        linkToProject="yes"
                        img={ProiectProba} img1={Proba1} img2={Proba2} img3={Proba3}
                        title={<>Proba Tehnică IT - Web App</>}
                        description={<>Proiectul pe care a trebuit să-l realizez drept probă de intrare în cadrul
                        "Departamentului de IT - LSAC".</>}
                        technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                        git="https://github.com/AntonioCC147/Proba-Tehnica-IT" adress="https://proba-meme-it.netlify.app/"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortofoliuCard
                        linkToProject="yes"
                        img={ProiectConfiguration} img1={Config1} img2={Config2} img3={Config3}
                        title={<>Website Config - Web App</>}
                        description={<>Proiect realizat pentru a oferi o configurație celor care doresc să realizeze
                        propriul website, cu câteva exemple și componente ajutătoare.</>}
                        technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                        git="https://github.com/AntonioCC147/Website-Setup-Configuration" adress="https://website-setup-configuration.netlify.app/"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        linkToProject="no"
                        img={ProiectHack} img1={Mental1} img2={Mental2} img3={Mental3}
                        title={<>Mental Health - Web App</>}
                        description={<>Proiect realizat în cadrul primei ediții a Hackathon-ului organizat de către
                        "Departamentul de IT - LSAC".</>}
                        technology={<>Next.JS, JavaScript, HTML, Bootstrap, CSS</>}
                        git="/" adress="/despremine"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        linkToProject="yes"
                        img={ProiectWordScramble} img1={WS1} img2={WS2} img3={WS3}
                        title={<>Word Scramble - Joc</>}
                        description={<>Jocul este unul destul de simplu din punct de vedere al logicii. Acesta dispune atât
                        limba română, cât și limba engleză.</>}
                        technology={<>React, JavaScript, BootStrap</>}
                        git="https://github.com/AntonioCC147/Word-Scramble-Game" adress="https://game-word-scramble.netlify.app/"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortofoliuCard
                        linkToProject="no"
                        img={ProiectPA} img1={PA1} img2={PA2} img3={PA3}
                        title={<>LanParty - Temă</>}
                        description={<>Acest proiect a reprezentat tema pe semestrul II al primului an la materia
                        "Structuri de Date și Algoritmi".</>}
                        technology={<>Limbajul C</>}
                        git="https://github.com/AntonioCC147/PA-Project-LanParty" adress="/"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        linkToProject="no"
                        img={ProiectLitere} img1={Joc1} img2={Joc2} img3={Joc3}
                        title={<>Din Litere în Cifre - Joc</>}
                        description={<>Acest joc presupune scrierea cu litere ale alfabetului a unui număr din intervalul
                        [1, 1.000.000] și ulterior transformarea acestuia în cifre.</>}
                        technology={<>Limbajul C</>}
                        git="https://github.com/AntonioCC147/DinLitereInCifre" adress="/"
                    />
                </Col>
            </Row>
        </Container>
    );
}