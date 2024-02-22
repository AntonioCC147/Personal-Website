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
//alea 3
import ProiectConfiguration from '../../assets/projects/ProiectConfiguration.jpg';
    import Config1 from '../../assets/projects/Config1.jpg';
    import Config2 from '../../assets/projects/Config2.jpg';
    import Config3 from '../../assets/projects/Config3.jpg';
import ProiectGCCC from '../../assets/projects/GCCC.jpg';
    import CCC1 from '../../assets/projects/CCC1.jpg';
    import CCC2 from '../../assets/projects/CCC2.jpg';
    import CCC3 from '../../assets/projects/CCC3.jpg';
import ProiectHackIntern1 from '../../assets/projects/ProiectHackIntern1.jpg';
    import Mental1 from '../../assets/projects/Mental1.jpg';
    import Mental2 from '../../assets/projects/Mental2.jpg';
    import Mental3 from '../../assets/projects/Mental3.jpg';
import ProiectWordScramble from '../../assets/projects/ProiectWordScramble.jpg';
    import WS1 from '../../assets/projects/WS1.jpg';
    import WS2 from '../../assets/projects/WS2.jpg';
    import WS3 from '../../assets/projects/WS3.jpg';
import ProiectHangMan from '../../assets/projects/ProiectHangMan.jpg';
    import HM1 from '../../assets/projects/HM1.jpg';
    import HM2 from '../../assets/projects/HM2.jpg';
    import HM3 from '../../assets/projects/HM3.jpg';
import ProiectLitere from '../../assets/projects/ProiectLitere.jpg';
    import Joc1 from '../../assets/projects/Joc1.jpg';
    import Joc2 from '../../assets/projects/Joc2.jpg';
    import Joc3 from '../../assets/projects/Joc3.jpg';
import ProiectPA from '../../assets/projects/ProiectPA.jpg';
    import PA1 from '../../assets/projects/PA1.jpg';
    import PA2 from '../../assets/projects/PA2.jpg';
    import PA3 from '../../assets/projects/PA3.jpg';
import ProiectCT from '../../assets/projects/ProiectCT.jpg';
    import CT1 from '../../assets/projects/CT1.jpg';
    import CT2 from '../../assets/projects/CT2.jpg';
    import CT3 from '../../assets/projects/CT3.jpg';
import ProiectGAP from '../../assets/projects/ProiectGAP.jpg';
    import GAP1 from '../../assets/projects/GAP1.jpg';
    import GAP2 from '../../assets/projects/GAP2.jpg';
    import GAP3 from '../../assets/projects/GAP3.jpg';
import ProiectHackIT from '../../assets/projects/ProiectHackIT.jpg';
    import HackIT1 from '../../assets/projects/HackIT1.jpg';
    import HackIT2 from '../../assets/projects/HackIT2.jpg';
    import HackIT3 from '../../assets/projects/HackIT3.jpg';
import ProiectCSA from '../../assets/projects/ProiectCSA.jpg';
    import CSA1 from '../../assets/projects/CSA1.jpg';
    import CSA2 from '../../assets/projects/CSA2.jpg';
    import CSA3 from '../../assets/projects/CSA3.jpg';

import '../../components/containers/text.css';
import './portofoliu.css';

export default function Portofoliu({language}) {
    return (
        <Container className="anta">
            <Row>
                {language === "RO" && ( <p className="title">&lt; Portofoliu /&gt;</p> )}
                {language === "UK" && ( <p className="title">&lt; Portofolio /&gt;</p> )}
                {language === "RO" && ( <p className="subTitle" style={{ marginBottom: "40px" }}>Mai jos prezint câteva creații personale. Acestea nu reprezintă și munca din cadrul Departamentului de IT</p> )}
                {language === "UK" && ( <p className="subTitle" style={{ marginBottom: "40px" }}>Below I present some personal creations. They also do not represent the work within the IT Department</p> )}
                {language === "RO" && ( <p className="subSubTitle">&lt; Website-uri /&gt;</p> )}
                {language === "UK" && ( <p className="subSubTitle">&lt; Websites /&gt;</p> )}
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectChimie} img1={Chimie1} img2={Chimie2} img3={Chimie3}
                            title={<>Chemistry App - Web App</>}
                            description={<>Proiectul a fost realizat la "Sesiunea de Comunicări Științifice" și reprezintă o
                            aplicație pentru laboratoarele de chimie.</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/Chemistry-App" adress="https://acs-chemistry-app.netlify.app/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectChimie} img1={Chimie1} img2={Chimie2} img3={Chimie3}
                            title={<>Chemistry App - Web App</>}
                            description={<>The project was created during the "Scientific Communications Session" and represents an
                            application for chemistry laboratories.</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/Chemistry-App" adress="https://acs-chemistry-app.netlify.app/"
                        />
                    )}
                </Col>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectACS} img1={ACS1} img2={ACS2} img3={ACS3}
                            title={<>ACS IS AA - Web App</>}
                            description={<>Proiectul a fost realizat pentru a oferi un ajutor bobocilor de la Automatică. Conține
                            mai multe informații esențiale, inclusiv feedback la materii.</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/ACS-IS-AA-Website" adress="https://acs-is-aa.software/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectACS} img1={ACS1} img2={ACS2} img3={ACS3}
                            title={<>ACS IS AA - Web App</>}
                            description={<>The project was created to provide assistance to freshmen at the Faculty of Automatic Control and Computers. It includes various essential info.</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/ACS-IS-AA-Website" address="https://acs-is-aa.software/"
                        />
                    )}
                </Col>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectProba} img1={Proba1} img2={Proba2} img3={Proba3}
                            title={<>Proba Tehnică IT - Web App</>}
                            description={<>Proiectul pe care a trebuit să-l realizez drept probă de intrare în cadrul
                            "Departamentului de IT - LSAC".</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/Proba-Tehnica-IT" adress="https://proba-meme-it.netlify.app/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectProba} img1={Proba1} img2={Proba2} img3={Proba3}
                            title={<>Technical Test IT - Web App</>}
                            description={<>The project I had to create as an entrance test for the "IT Department - LSAC".</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/Proba-Tehnica-IT" address="https://proba-meme-it.netlify.app/"
                        />
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectProba} img1={Proba1} img2={Proba2} img3={Proba3}
                            title={<>Proba Tehnică IT - Web App</>}
                            description={<>Proiectul pe care a trebuit să-l realizez drept probă de intrare în cadrul
                            "Departamentului de IT - LSAC".</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/Proba-Tehnica-IT" adress="https://proba-meme-it.netlify.app/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectProba} img1={Proba1} img2={Proba2} img3={Proba3}
                            title={<>Technical Test IT - Web App</>}
                            description={<>The project I had to create as an entrance test for the "IT Department - LSAC".</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/Proba-Tehnica-IT" address="https://proba-meme-it.netlify.app/"
                        />
                    )}
                </Col>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectProba} img1={Proba1} img2={Proba2} img3={Proba3}
                            title={<>Proba Tehnică IT - Web App</>}
                            description={<>Proiectul pe care a trebuit să-l realizez drept probă de intrare în cadrul
                            "Departamentului de IT - LSAC".</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/Proba-Tehnica-IT" adress="https://proba-meme-it.netlify.app/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectProba} img1={Proba1} img2={Proba2} img3={Proba3}
                            title={<>Technical Test IT - Web App</>}
                            description={<>The project I had to create as an entrance test for the "IT Department - LSAC".</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/Proba-Tehnica-IT" address="https://proba-meme-it.netlify.app/"
                        />
                    )}
                </Col>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectProba} img1={Proba1} img2={Proba2} img3={Proba3}
                            title={<>Proba Tehnică IT - Web App</>}
                            description={<>Proiectul pe care a trebuit să-l realizez drept probă de intrare în cadrul
                            "Departamentului de IT - LSAC".</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/Proba-Tehnica-IT" adress="https://proba-meme-it.netlify.app/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectProba} img1={Proba1} img2={Proba2} img3={Proba3}
                            title={<>Technical Test IT - Web App</>}
                            description={<>The project I had to create as an entrance test for the "IT Department - LSAC".</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/Proba-Tehnica-IT" address="https://proba-meme-it.netlify.app/"
                        />
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectConfiguration} img1={Config1} img2={Config2} img3={Config3}
                            title={<>Website Config - Web App</>}
                            description={<>Proiect realizat pentru a oferi o configurație celor care doresc să realizeze
                            propriul website, cu câteva exemple și componente ajutătoare.</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/Website-Setup-Configuration" adress="https://website-setup-configuration.netlify.app/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectConfiguration} img1={Config1} img2={Config2} img3={Config3}
                            title={<>Website Configuration - Web App</>}
                            description={<>A project created to provide configuration options for those who want to build their own website.</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                            git="https://github.com/AntonioCC147/Website-Setup-Configuration" address="https://website-setup-configuration.netlify.app/"
                        />
                    )}
                </Col>
            </Row>
            {language === "RO" && ( <p className="subSubTitle">&lt; Hackathon /&gt;</p> )}
            {language === "UK" && ( <p className="subSubTitle">&lt; Hackathon /&gt;</p> )}
            <Row>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectGCCC} img1={CCC1} img2={CCC2} img3={CCC3}
                            title={<>GreenCCC - Web App</>}
                            description={<>Proiectul cu care am câștigat locul 2 la ZebraHack, un Hackahton intern organizat
                            de către facultate la care au participat peste 150 de studenți.</>}
                            technology={<>HTML, CSS, JavaScript</>}
                            git="https://github.com/AntonioCC147/GreenCCC-Website" adress="https://grenccc.netlify.app/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectGCCC} img1={CCC1} img2={CCC2} img3={CCC3}
                            title={<>GreenCCC - Web App</>}
                            description={<>The project with which I won 2nd place at ZebraHack, an organized internal Hackathon
                            by the faculty attended by over 150 students.</>}
                            technology={<>HTML, CSS, JavaScript</>}
                            git="https://github.com/AntonioCC147/GreenCCC-Website" adress="https://grenccc.netlify.app/"
                        />
                    )}
                </Col>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="no" linkToGitHub="yes"
                            img={ProiectHackIntern1} img1={Mental1} img2={Mental2} img3={Mental3}
                            title={<>Mental Health - Web App</>}
                            description={<>Proiect realizat în cadrul primei ediții a Hackathon-ului organizat de către
                            "Departamentul de IT - LSAC".</>}
                            technology={<>Next.JS, JavaScript, HTML, Bootstrap, CSS</>}
                            git="/" adress="/despremine"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="no" linkToGitHub="yes"
                            img={ProiectHackIntern1} img1={Mental1} img2={Mental2} img3={Mental3}
                            title={<>Mental Health - Web App</>}
                            description={<>A project created during the first edition of the Hackathon organized by the "IT
                            Department - LSAC".</>}
                            technology={<>Next.js, JavaScript, HTML, Bootstrap, CSS</>}
                            git="/" address="/aboutme"
                        />
                    )}
                </Col>
            </Row>
            {language === "RO" && ( <p className="subSubTitle">&lt; Jocuri /&gt;</p> )}
            {language === "UK" && ( <p className="subSubTitle">&lt; Games /&gt;</p> )}
            <Row>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectWordScramble} img1={WS1} img2={WS2} img3={WS3}
                            title={<>Word Scramble - Joc</>}
                            description={<>Jocul este unul destul de simplu din punct de vedere al logicii. Acesta dispune atât
                            limba română, cât și limba engleză.</>}
                            technology={<>React, JavaScript, BootStrap</>}
                            git="https://github.com/AntonioCC147/Word-Scramble-Game" adress="https://game-word-scramble.netlify.app/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectWordScramble} img1={WS1} img2={WS2} img3={WS3}
                            title={<>Word Scramble - Game</>}
                            description={<>The game is quite simple in terms of logic. It supports both Romanian and English
                            languages.</>}
                            technology={<>React, JavaScript, Bootstrap</>}
                            git="https://github.com/AntonioCC147/Word-Scramble-Game" address="https://game-word-scramble.netlify.app/"
                        />
                    )}
                </Col>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectHangMan} img1={HM1} img2={HM2} img3={HM3}
                            title={<>HangMan - Joc</>}
                            description={<>Acest joc este clasicul Spânzurătoarea pe care îl cunoaștem cu toții de mici. Ai de
                            ales litere din alfabet până nimerești cuvântul, sau pierzi.</>}
                            technology={<>React, JavaScript, BootStrap</>}
                            git="https://github.com/AntonioCC147/HangMan-Game" adress="https://game-hangman-acc.netlify.app/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="yes"
                            img={ProiectHangMan} img1={HM1} img2={HM2} img3={HM3}
                            title={<>Hangman - Game</>}
                            description={<>This game is the classic Hangman that we all know from our childhood. You have to choose
                            letters from the alphabet until you guess the word or lose.</>}
                            technology={<>React, JavaScript, Bootstrap</>}
                            git="https://github.com/AntonioCC147/HangMan-Game" address="https://game-hangman-acc.netlify.app/"
                        />
                    )}
                </Col>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="no" linkToGitHub="yes"
                            img={ProiectLitere} img1={Joc1} img2={Joc2} img3={Joc3}
                            title={<>Din Litere în Cifre - Joc</>}
                            description={<>Acest joc presupune scrierea cu litere ale alfabetului a unui număr din intervalul
                            [1, 1.000.000] și ulterior transformarea acestuia în cifre.</>}
                            technology={<>Limbajul C</>}
                            git="https://github.com/AntonioCC147/DinLitereInCifre" adress="/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="no" linkToGitHub="yes"
                            img={ProiectLitere} img1={Joc1} img2={Joc2} img3={Joc3}
                            title={<>From Letters to Numbers</>}
                            description={<>This game involves writing a number in letters from the alphabet in the range [1,
                            1,000,000], and then converting it into digits.</>}
                            technology={<>C Language</>}
                            git="https://github.com/AntonioCC147/DinLitereInCifre" address="/"
                        />
                    )}
                </Col>
            </Row>
            {language === "RO" && ( <p className="subSubTitle">&lt; Proiecte / Teme /&gt;</p> )}
            {language === "UK" && ( <p className="subSubTitle">&lt; Projects / Homeworks /&gt;</p> )}
            <Row>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="no" linkToGitHub="yes"
                            img={ProiectPA} img1={PA1} img2={PA2} img3={PA3}
                            title={<>LanParty - Proiect</>}
                            description={<>Acest proiect a reprezentat un proiect pe semestrul II al primului an de facultate la
                            materia "Structuri de Date și Algoritmi".</>}
                            technology={<>Limbajul C</>}
                            git="https://github.com/AntonioCC147/PA-Project-LanParty" adress="/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="no" linkToGitHub="yes"
                            img={ProiectPA} img1={PA1} img2={PA2} img3={PA3}
                            title={<>LanParty - Project</>}
                            description={<>This project was the project for the second semester of the first year at faculty in
                            the "Data Structures and Algorithms" course.</>}
                            technology={<>C Language</>}
                            git="https://github.com/AntonioCC147/PA-Project-LanParty" address="/"
                        />
                    )}
                </Col>
            </Row>
            <Row>
                {language === "RO" && ( <p className="subSubTitle">&lt; Proiecte Departamentul de IT /&gt;</p> )}
                {language === "UK" && ( <p className="subSubTitle">&lt; IT Department Projects /&gt;</p> )}
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="no"
                            img={ProiectCT} img1={CT1} img2={CT2} img3={CT3}
                            title={<>Career Talks - Web App</>}
                            description={<>Am fost "Manager de Departament - IT" în cadrul evenimentului, unde am organizat
                            echipa de IT și am ajuns la rezultatul care se poate vedea.</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, SCSS, CSS</>}
                            git="/" adress="https://careertalks.lsacbucuresti.ro/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="no"
                            img={ProiectCT} img1={CT1} img2={CT2} img3={CT3}
                            title={<>Career Talks - Web App</>}
                            description={<>I was "Department Manager - IT" in the event, where I organized the IT team and we
                            reached the result that can be seen from the front.</>}
                            technology={<>React, JavaScript, HTML, Bootstrap, SCCS, CSS</>}
                            git="/" adress="https://careertalks.lsacbucuresti.ro/"
                        />
                    )}
                </Col>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="no" linkToGitHub="no"
                            img={ProiectGAP} img1={GAP1} img2={GAP2} img3={GAP3}
                            title={<>Admin Panel - Boilerplate</>}
                            description={<>Având responsabilitatea de "Team Lead", am organizat echipa și am creat un Generic
                            Admin Panel ușor de folosit, fiind un proiect open-source.</>}
                            technology={<>React, TypeScript, JavaScript, HTML, CSS</>}
                            git="" adress="/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="no" linkToGitHub="no"
                            img={ProiectGAP} img1={GAP1} img2={GAP2} img3={GAP3}
                            title={<>Admin Panel - Boilerplate</>}
                            description={<>Having the responsibility of "Team Lead", I organized the team and created a Generic
                            Easy to use Admin Panel, being an open-source project.</>}
                            technology={<>React, TypeScript, JavaScript, HTML, CSS</>}
                            git="" adress="/"
                        />
                    )}
                </Col>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="no"
                            img={ProiectHackIT} img1={HackIT1} img2={HackIT2} img3={HackIT3}
                            title={<>HackITall 1 & 2 - Web App</>}
                            description={<>Am participat ca membru în echipa internă a HackITall 1 și 2 și am ajutat la diferite
                            task-uri pe partea de front-end.</>}
                            technology={<>React, TypeScript, JavaScript, ChakraUI, HTML, CSS</>}
                            git="" adress="https://hack.lsacbucuresti.ro/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="no"
                            img={ProiectHackIT} img1={HackIT1} img2={HackIT2} img3={HackIT3}
                            title={<>HackITall 1 & 2 - Web App</>}
                            description={<>I participated as a member of the internal team of HackITall 1 and 2 and had different
                            tasks on the front-end side.</>}
                            technology={<>React, TypeScript, JavaScript, ChakraUI, HTML, CSS</>}
                            git="" adress="https://hack.lsacbucuresti.ro/"
                        />
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    {language === "RO" && (
                        <PortofoliuCard
                            language="RO" linkToProject="yes" linkToGitHub="no"
                            img={ProiectCSA} img1={CSA1} img2={CSA2} img3={CSA3}
                            title={<>CSA - Web App</>}
                            description={<>Am participat ca membru în echipa internă a CSA și am ajutat la diferite task-uri pe
                            partea de front-end.</>}
                            technology={<>React, JavaScript, HTML, CSS</>}
                            git="" adress="https://csa.lsacbucuresti.ro/"
                        />
                    )}
                    {language === "UK" && (
                        <PortofoliuCard
                            language="UK" linkToProject="yes" linkToGitHub="no"
                            img={ProiectCSA} img1={CSA1} img2={CSA2} img3={CSA3}
                            title={<>CSA - Web App</>}
                            description={<>I participated as a member of the internal team of CSA and had different tasks on the
                            front-end side.</>}
                            technology={<>React, JavaScript, HTML, CSS</>}
                            git="" adress="https://csa.lsacbucuresti.ro/"
                        />
                    )}
                </Col>
            </Row>
        </Container>
    );
}