import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PortofoliuCard from './portofoliuCard';

import ProiectChimie from '../../assets/projects/ProiectChimie.jpg';
import ProiectProba from '../../assets/projects/ProiectProba.jpg';
import ProiectConfiguration from '../../assets/projects/ProiectConfiguration.jpg';
import ProiectHack from '../../assets/projects/ProiectHack.jpg';
import ProiectPA from '../../assets/projects/ProiectPA.jpg';
import ProiectLitere from '../../assets/projects/ProiectLitere.jpg';

export default function Portofoliu() {
    return (
        <Container>
            <Row>
                <Col>
                    <PortofoliuCard
                        linkToProject="yes"
                        img={ProiectChimie} title={<>Chemistry App - Web App</>}
                        description={<>Aplicație pentru laboratoarele de chimie din cadrul facultății.
                        <br/>Proiect realizat la "Sesiunea de Comunicări Științifice".</>}
                        technology={<>React, JavaScript, HTML, CSS</>}
                        git="https://github.com/AntonioCC147/Chemistry-App" adress="https://acs-chemistry-app.netlify.app/"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        linkToProject="yes"
                        img={ProiectProba} title={<>Proba Tehnică IT - Web App</>}
                        description={<>Proiectul pe care a trebuit să-l realizez drept probă de intrare în cadrul
                        "Departamentului de IT - LSAC".</>}
                        technology={<>React, JavaScript, HTML, CSS</>}
                        git="https://github.com/AntonioCC147/Proba-Tehnica-IT" adress="https://proba-meme-it.netlify.app/"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        linkToProject="yes"
                        img={ProiectConfiguration} title={<>Website Configuration - Web App</>}
                        description={<>Proiect realizat pentru a oferi o configurație promptă celor care doresc să realizeze
                        propriul website, cu câteva exemple și componente ajutătoare.</>}
                        technology={<>React, JavaScript, HTML, CSS</>}
                        git="https://github.com/AntonioCC147/Website-Setup-Configuration" adress="https://website-setup-configuration.netlify.app/"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortofoliuCard
                        linkToProject="no"
                        img={ProiectHack} title={<>Mental Health - Web App</>}
                        description={<>Proiect realizat în cadrul primei ediții a Hackathon-ului organizat de către
                        "Departamentul de IT - LSAC".</>}
                        technology={<>Next.JS, JavaScript, HTML, CSS</>}
                        git="/" adress="/despremine"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        linkToProject="no"
                        img={ProiectPA} title={<>LanParty - Temă</>}
                        description={<>Acest proiect a reprezentat tema pe semestrul II al primului an la materia
                        "Structuri de Date și Algoritmi".</>}
                        technology={<>Limbajul C</>}
                        git="https://github.com/AntonioCC147/PA-Project-LanParty" adress="/"
                    />
                </Col>
                <Col>
                    <PortofoliuCard
                        linkToProject="no"
                        img={ProiectLitere} title={<>Din Litere în Cifre - Joc</>}
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