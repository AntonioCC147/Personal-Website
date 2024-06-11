import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PortofoliuCard from './portofoliuCard';

import ProiectChimie from '../../assets/projects/ProiectChimie.jpg';
    import Chimie1 from '../../assets/projects/Chimie1.jpg';
    import Chimie2 from '../../assets/projects/Chimie2.jpg';
    import Chimie3 from '../../assets/projects/Chimie3.jpg';
import ProiectACS from '../../assets/projects/ProiectACS.jpg';
    import ACS1 from '../../assets/projects/ACS1.jpg';
    import ACS2 from '../../assets/projects/ACS2.jpg';
    import ACS3 from '../../assets/projects/ACS3.jpg';
import ProiectTW from '../../assets/projects/ProiectTW.jpg';
    import TW1 from '../../assets/projects/TW1.jpg';
    import TW2 from '../../assets/projects/TW2.jpg';
    import TW3 from '../../assets/projects/TW3.jpg';
import ProiectSpace from '../../assets/projects/ProiectSpace.jpg';
    import Space1 from '../../assets/projects/Space1.jpg';
    import Space2 from '../../assets/projects/Space2.jpg';
    import Space3 from '../../assets/projects/Space3.jpg';
import ProiectFreelancer from '../../assets/projects/ProiectFreelancer.jpg';
    import Freelancer1 from '../../assets/projects/Freelancer1.jpg';
    import Freelancer2 from '../../assets/projects/Freelancer2.jpg';
    import Freelancer3 from '../../assets/projects/Freelancer3.jpg';
import ProiectFreelancer2 from '../../assets/projects/ProiectFreelancer2.jpg';
    import Freelancer21 from '../../assets/projects/Freelancer21.jpg';
    import Freelancer22 from '../../assets/projects/Freelancer22.jpg';
    import Freelancer23 from '../../assets/projects/Freelancer23.jpg';
import ProiectMentoring from '../../assets/projects/ProiectMentoring.jpg';
    import Mentoring1 from '../../assets/projects/Mentoring1.jpg';
    import Mentoring2 from '../../assets/projects/Mentoring2.jpg';
    import Mentoring3 from '../../assets/projects/Mentoring3.jpg';
import ProiectProba from '../../assets/projects/ProiectProba.jpg';
    import Proba1 from '../../assets/projects/Proba1.jpg';
    import Proba2 from '../../assets/projects/Proba2.jpg';
    import Proba3 from '../../assets/projects/Proba3.jpg';
import ProiectConfiguration from '../../assets/projects/ProiectConfiguration.jpg';
    import Config1 from '../../assets/projects/Config1.jpg';
    import Config2 from '../../assets/projects/Config2.jpg';
    import Config3 from '../../assets/projects/Config3.jpg';
import ProiectGCCC from '../../assets/projects/GCCC.jpg';
    import CCC1 from '../../assets/projects/CCC1.jpg';
    import CCC2 from '../../assets/projects/CCC2.jpg';
    import CCC3 from '../../assets/projects/CCC3.jpg';
import ProiectSign from '../../assets/projects/ProiectSign.jpg';
    import Sign1 from '../../assets/projects/Sign1.jpg';
    import Sign2 from '../../assets/projects/Sign2.jpg';
    import Sign3 from '../../assets/projects/Sign3.jpg';
import ProiectMental from '../../assets/projects/ProiectMental.jpg';
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
import ProiectHackIT from '../../assets/projects/ProiectHackIT.jpg';
    import HackIT1 from '../../assets/projects/HackIT1.jpg';
    import HackIT2 from '../../assets/projects/HackIT2.jpg';
    import HackIT3 from '../../assets/projects/HackIT3.jpg';
import ProiectCSA from '../../assets/projects/ProiectCSA.jpg';
    import CSA1 from '../../assets/projects/CSA1.jpg';
    import CSA2 from '../../assets/projects/CSA2.jpg';
    import CSA3 from '../../assets/projects/CSA3.jpg';
import ProiectGAP from '../../assets/projects/ProiectGAP.jpg';
    import GAP1 from '../../assets/projects/GAP1.jpg';
    import GAP2 from '../../assets/projects/GAP2.jpg';
    import GAP3 from '../../assets/projects/GAP3.jpg';

import '../../components/containers/text.css';
import './portofoliu.css';

export default function Portofoliu({language}) {
    const [view, setView] = useState("All");

    return (
        <Container className="anta">
            {language === "RO" && ( <p className="title">&lt; Portofoliu /&gt;</p> )}
            {language === "UK" && ( <p className="title">&lt; Portfolio /&gt;</p> )}
            {language === "RO" && ( <p className="subTitle" style={{ marginBottom: "40px" }}>Mai jos prezint câteva creații personale</p> )}
            {language === "UK" && ( <p className="subTitle" style={{ marginBottom: "40px" }}>Below I present some personal creations</p> )}
            {language === "RO" &&
                <div className="selectProject">
                    <Button variant="outline-dark" className={view === "All" ? "selectButton" : "noSelectButton"} onClick={() => setView("All")}>Toate</Button>
                    <Button variant="outline-dark" className={view === "Website-uri" ? "selectButton" : "noSelectButton"} onClick={() => setView("Website-uri")}>Website-uri</Button>
                    <Button variant="outline-dark" className={view === "Hackathon" ? "selectButton" : "noSelectButton"} onClick={() => setView("Hackathon")}>Hackathon</Button>
                    <Button variant="outline-dark" className={view === "Jocuri" ? "selectButton" : "noSelectButton"} onClick={() => setView("Jocuri")}>Jocuri</Button>
                    <Button variant="outline-dark" className={view === "Proiecte" ? "selectButton" : "noSelectButton"} onClick={() => setView("Proiecte")}>Proiecte / Teme</Button>
                    <Button variant="outline-dark" className={view === "Departament" ? "selectButton" : "noSelectButton"} onClick={() => setView("Departament")}>Proiecte Departamentul IT</Button>
                </div>
            }
            {language === "UK" &&
                <div className="selectProject">
                    <Button variant="outline-dark" className={view === "All" ? "selectButton" : "noSelectButton"} onClick={() => setView("All")}>All</Button>
                    <Button variant="outline-dark" className={view === "Website-uri" ? "selectButton" : "noSelectButton"} onClick={() => setView("Website-uri")}>Websites</Button>
                    <Button variant="outline-dark" className={view === "Hackathon" ? "selectButton" : "noSelectButton"} onClick={() => setView("Hackathon")}>Hackathon</Button>
                    <Button variant="outline-dark" className={view === "Jocuri" ? "selectButton" : "noSelectButton"} onClick={() => setView("Jocuri")}>Games</Button>
                    <Button variant="outline-dark" className={view === "Proiecte" ? "selectButton" : "noSelectButton"} onClick={() => setView("Proiecte")}>Projects / Homeworks</Button>
                    <Button variant="outline-dark" className={view === "Departament" ? "selectButton" : "noSelectButton"} onClick={() => setView("Departament")}>IT Department Projects</Button>
                </div>
            }
            {(view === "All" || view === "Website-uri") && 
                <>
                    <Row>
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
                                    description={<>Proiectul a fost realizat pentru a oferi un ajutor bobocilor. Conține diverse
                                    informații esențiale, inclusiv feedback la materii.</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/ACS-IS-AA-Website" adress="https://acs-is-aa.software/"
                                />
                            )}
                            {language === "UK" && (
                                <PortofoliuCard
                                    language="UK" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectACS} img1={ACS1} img2={ACS2} img3={ACS3}
                                    title={<>ACS IS AA - Web App</>}
                                    description={<>The project was created to help freshmen. It contains various essential information,
                                    including subject feedback.</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/ACS-IS-AA-Website" adress="https://acs-is-aa.software/"
                                />
                            )}
                        </Col>
                        <Col>
                            {language === "RO" && (
                                <PortofoliuCard
                                    language="RO" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectTW} img1={TW1} img2={TW2} img3={TW3}
                                    title={<>Wiki - TW - Web App</>}
                                    description={<>Această platformă a fost creată drept site de prezentare pentru materia Tehnologii Web,
                                    materie din cadrul facultății.</>}
                                    technology={<>Docusaurus, React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Wiki-Tehnologii-Web" adress="https://wiki-tw.netlify.app/"
                                />
                            )}
                            {language === "UK" && (
                                <PortofoliuCard
                                    language="UK" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectTW} img1={TW1} img2={TW2} img3={TW3}
                                    title={<>Wiki - TW - Web App</>}
                                    description={<>This platform was created as a presentation site for the subject Web Technologies,
                                    subject within the faculty.</>}
                                    technology={<>Docusaurus, React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Wiki-Tehnologii-Web" adress="https://wiki-tw.netlify.app/"
                                />
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {language === "RO" && (
                                <PortofoliuCard
                                    language="RO" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectSpace} img1={Space1} img2={Space2} img3={Space3}
                                    title={<>Space Explorer - Web App</>}
                                    description={<>Proiectul reprezintă un Landing Page cu tematica spațiului ce conține informații
                                    despre planete, specialiști, dar și tehnologii.</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Space-Exploring-Website" adress="https://space-exploring.netlify.app/"
                                />
                            )}
                            {language === "UK" && (
                                <PortofoliuCard
                                    language="UK" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectSpace} img1={Space1} img2={Space2} img3={Space3}
                                    title={<>Technical Test IT - Web App</>}
                                    description={<>The project represents a Landing Page with the theme of the space that contains
                                    information about planets, specialists, and technologies.</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Space-Exploring-Website" adress="https://space-exploring.netlify.app/"
                                />
                            )}
                        </Col>
                        <Col>
                            {language === "RO" && (
                                <PortofoliuCard
                                    language="RO" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectFreelancer} img1={Freelancer1} img2={Freelancer2} img3={Freelancer3}
                                    title={<>Designer1 - Web App</>}
                                    description={<>Website-ul este destinat portofoliului unui designer care dorești să-și promoveze
                                    serviciile prin intermediul unei platform online.</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Designer-Website" adress="https://designer1-app.netlify.app/"
                                />
                            )}
                            {language === "UK" && (
                                <PortofoliuCard
                                    language="UK" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectFreelancer} img1={Freelancer1} img2={Freelancer2} img3={Freelancer3}
                                    title={<>Designer1 - Web App</>}
                                    description={<>The website is intended for the portfolio of a designer you want to promote services
                                    through an online platform.</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Designer-Website" adress="https://designer1-app.netlify.app/"
                                />
                            )}
                        </Col>
                        <Col>
                            {language === "RO" && (
                                <PortofoliuCard
                                    language="RO" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectFreelancer2} img1={Freelancer21} img2={Freelancer22} img3={Freelancer23}
                                    title={<>Designer2 - Web App</>}
                                    description={<>Acest proiect reprezintă un Landing Page creat în scop educativ, în cadrul cursului
                                    de Tehnologii Web unde predau React.</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Designer-Website-2" adress="https://designer2-app.netlify.app/"
                                />
                            )}
                            {language === "UK" && (
                                <PortofoliuCard
                                    language="UK" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectFreelancer2} img1={Freelancer21} img2={Freelancer22} img3={Freelancer23}
                                    title={<>Designer2 - Web App</>}
                                    description={<>This project represents a Landing Page created for educational purposes, within the
                                    course of Web Technologies where I teach React.</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Designer-Website-2" adress="https://designer2-app.netlify.app/"
                                />
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {language === "RO" && (
                                <PortofoliuCard
                                    language="RO" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectMentoring} img1={Mentoring1} img2={Mentoring2} img3={Mentoring3}
                                    title={<>Meditator - Web App</>}
                                    description={<>O aplicație web pentru un client care și-a dorit un website pentru a-și promova
                                    meditațiile prin intermediul online.</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Mentoring-Website" adress="https://apostol-robert.netlify.app/"
                                />
                            )}
                            {language === "UK" && (
                                <PortofoliuCard
                                    language="UK" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectMentoring} img1={Mentoring1} img2={Mentoring2} img3={Mentoring3}
                                    title={<>Mentoring - Web App</>}
                                    description={<>A web application for a client who wanted a website to promote meditations via
                                    online.</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Mentoring-Website" adress="https://apostol-robert.netlify.app/"
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
                                    git="https://github.com/AntonioCC147/Proba-Tehnica-IT" adress="https://proba-meme-it.netlify.app/"
                                />
                            )}
                        </Col>
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
                                    git="https://github.com/AntonioCC147/Website-Setup-Configuration" adress="https://website-setup-configuration.netlify.app/"
                                />
                            )}
                        </Col>
                    </Row>
                </>
            }
            {(view === "All" || view === "Hackathon") && 
                <>
                    {language === "RO" && ( <p className="subSubTitle">&lt; Hackathon /&gt;</p> )}
                    {language === "UK" && ( <p className="subSubTitle">&lt; Hackathon /&gt;</p> )}
                    <Row>
                        <Col>
                            {language === "RO" && (
                                <PortofoliuCard
                                    language="RO" linkToProject="no" linkToGitHub="yes"
                                    img={ProiectSign} img1={Sign1} img2={Sign2} img3={Sign3}
                                    title={<>Sign Language - Web App</>}
                                    description={<>Proiect realizat în cadrul celei de-a doua ediții a Hackathon-ului organizat de către
                                    "Departamentul de IT - LSAC".</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Mental-Health-HackIT" adress="/"
                                />
                            )}
                            {language === "UK" && (
                                <PortofoliuCard
                                    language="UK" linkToProject="no" linkToGitHub="yes"
                                    img={ProiectSign} img1={Sign1} img2={Sign2} img3={Sign3}
                                    title={<>Sign Language - Web App</>}
                                    description={<>A project created during the second edition of the Hackathon organized by the "IT
                                    Department - LSAC".</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Mental-Health-HackIT" adress="/"
                                />
                            )}
                        </Col>
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
                                    img={ProiectMental} img1={Mental1} img2={Mental2} img3={Mental3}
                                    title={<>Mental Health - Web App</>}
                                    description={<>Proiect realizat în cadrul primei ediții a Hackathon-ului organizat de către
                                    "Departamentul de IT - LSAC".</>}
                                    technology={<>React, Next.js, TypeScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Mental-Health-HackIT" adress="/"
                                />
                            )}
                            {language === "UK" && (
                                <PortofoliuCard
                                    language="UK" linkToProject="no" linkToGitHub="yes"
                                    img={ProiectMental} img1={Mental1} img2={Mental2} img3={Mental3}
                                    title={<>Mental Health - Web App</>}
                                    description={<>A project created during the first edition of the Hackathon organized by the "IT
                                    Department - LSAC".</>}
                                    technology={<>React, Next.js, TypeScript, HTML, Bootstrap, CSS</>}
                                    git="https://github.com/AntonioCC147/Mental-Health-HackIT" adress="/"
                                />
                            )}
                        </Col>
                    </Row>
                </>
            }
            {(view === "All" || view === "Jocuri") && 
                <>
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
                                    git="https://github.com/AntonioCC147/Word-Scramble-Game" adress="https://game-word-scramble.netlify.app/"
                                />
                            )}
                        </Col>
                        <Col>
                            {language === "RO" && (
                                <PortofoliuCard
                                    language="RO" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectHangMan} img1={HM1} img2={HM2} img3={HM3}
                                    title={<>HangMan - Joc</>}
                                    description={<>Jocul este clasicul Spânzurătoarea pe care îl cunoaștem cu toții. Ai de ales litere
                                    din alfabet până nimerești cuvântul ori pierzi.</>}
                                    technology={<>React, JavaScript, BootStrap</>}
                                    git="https://github.com/AntonioCC147/HangMan-Game" adress="https://game-hangman-acc.netlify.app/"
                                />
                            )}
                            {language === "UK" && (
                                <PortofoliuCard
                                    language="UK" linkToProject="yes" linkToGitHub="yes"
                                    img={ProiectHangMan} img1={HM1} img2={HM2} img3={HM3}
                                    title={<>Hangman - Game</>}
                                    description={<>The game is the classic Hangman we all know. You have a choice of letters from the
                                    alphabet until you guess the word or lose.</>}
                                    technology={<>React, JavaScript, Bootstrap</>}
                                    git="https://github.com/AntonioCC147/HangMan-Game" adress="https://game-hangman-acc.netlify.app/"
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
                                    git="https://github.com/AntonioCC147/DinLitereInCifre" adress="/"
                                />
                            )}
                        </Col>
                    </Row>
                </>
            }
            {(view === "All" || view === "Proiecte") && 
                <>
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
                                    git="https://github.com/AntonioCC147/PA-Project-LanParty" adress="/"
                                />
                            )}
                        </Col>
                    </Row>
                </>
            }
            {(view === "All" || view === "Departament") && 
                <>
                    <Row>
                        {language === "RO" && ( <p className="subSubTitle">&lt; Proiecte Departamentul de IT /&gt;</p> )}
                        {language === "UK" && ( <p className="subSubTitle">&lt; IT Department Projects /&gt;</p> )}
                        <Col>
                            {language === "RO" && (
                                <PortofoliuCard
                                    language="RO" linkToProject="no" linkToGitHub="no"
                                    img={ProiectCT} img1={CT1} img2={CT2} img3={CT3}
                                    title={<>Career Talks - Web App</>}
                                    description={<>Am fost "Manager de Departament - IT" în cadrul evenimentului, unde am organizat
                                    echipa de IT și am ajuns la rezultatul care se poate vedea.</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, SCSS, CSS</>}
                                    git="/" adress="/"
                                />
                            )}
                            {language === "UK" && (
                                <PortofoliuCard
                                    language="UK" linkToProject="no" linkToGitHub="no"
                                    img={ProiectCT} img1={CT1} img2={CT2} img3={CT3}
                                    title={<>Career Talks - Web App</>}
                                    description={<>I was "Department Manager - IT" in the event, where I organized the IT team and we
                                    reached the result that can be seen from the front.</>}
                                    technology={<>React, JavaScript, HTML, Bootstrap, SCCS, CSS</>}
                                    git="/" adress="/"
                                />
                            )}
                        </Col>
                        <Col>
                            {language === "RO" && (
                                <PortofoliuCard
                                    language="RO" linkToProject="no" linkToGitHub="no"
                                    img={ProiectHackIT} img1={HackIT1} img2={HackIT2} img3={HackIT3}
                                    title={<>HackITall 1 & 2 - Web App</>}
                                    description={<>Am participat ca membru în echipa internă a HackITall 1 și 2 și am ajutat la diferite
                                    task-uri pe partea de front-end.</>}
                                    technology={<>React, TypeScript, JavaScript, ChakraUI, HTML, CSS</>}
                                    git="/" adress="/"
                                />
                            )}
                            {language === "UK" && (
                                <PortofoliuCard
                                    language="UK" linkToProject="no" linkToGitHub="no"
                                    img={ProiectHackIT} img1={HackIT1} img2={HackIT2} img3={HackIT3}
                                    title={<>HackITall 1 & 2 - Web App</>}
                                    description={<>I participated as a member of the internal team of HackITall 1 and 2 and had different
                                    tasks on the front-end side.</>}
                                    technology={<>React, TypeScript, JavaScript, ChakraUI, HTML, CSS</>}
                                    git="/" adress="/"
                                />
                            )}
                        </Col>
                        <Col>
                            {language === "RO" && (
                                <PortofoliuCard
                                    language="RO" linkToProject="no" linkToGitHub="no"
                                    img={ProiectCSA} img1={CSA1} img2={CSA2} img3={CSA3}
                                    title={<>CSA - Web App</>}
                                    description={<>Am participat ca membru în echipa internă a CSA și am ajutat la diferite task-uri pe
                                    partea de front-end.</>}
                                    technology={<>React, JavaScript, HTML, CSS</>}
                                    git="/" adress="/"
                                />
                            )}
                            {language === "UK" && (
                                <PortofoliuCard
                                    language="UK" linkToProject="no" linkToGitHub="no"
                                    img={ProiectCSA} img1={CSA1} img2={CSA2} img3={CSA3}
                                    title={<>CSA - Web App</>}
                                    description={<>I participated as a member of the internal team of CSA and had different tasks on the
                                    front-end side.</>}
                                    technology={<>React, JavaScript, HTML, CSS</>}
                                    git="/" adress="/"
                                />
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {language === "RO" && (
                                <PortofoliuCard
                                    language="RO" linkToProject="no" linkToGitHub="no"
                                    img={ProiectGAP} img1={GAP1} img2={GAP2} img3={GAP3}
                                    title={<>Admin Panel - Boilerplate</>}
                                    description={<>Având responsabilitatea de "Team Lead", am organizat echipa și am creat un Generic
                                    Admin Panel ușor de folosit, fiind un proiect open-source.</>}
                                    technology={<>React, TypeScript, JavaScript, HTML, CSS</>}
                                    git="/" adress="/"
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
                                    git="/" adress="/"
                                />
                            )}
                        </Col>
                    </Row>
                </>
            }
        </Container>
    );
}