import Container from 'react-bootstrap/Container';

import ParcursText from './parcursText';

import ACS from '../../assets/parcurs/ACS.jpg';
import LSAC from '../../assets/parcurs/LSAC.jpeg';
import IT from '../../assets/parcurs/IT.jpg';
import Sesiune from '../../assets/parcurs/Sesiune.jpg';
import ComingSoon from '../../assets/parcurs/ComingSoon.jpg';

import '../../components/containers/text.css';
import './parcurs.css';

export default function ParcursMain({language}) {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#212529"
                    fillOpacity="1"
                    d="M0,32L34.3,37.3C68.6,43,137,53,206,85.3C274.3,117,343,171,411,192C480,213,549,203,617,192C685.7,181,754,171,823,186.7C891.4,203,960,245,1029,229.3C1097.1,213,1166,139,1234,122.7C1302.9,107,1371,149,1406,170.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                />
            </svg>
            <Container fluid className="bg-dark anta containerWaveUp" style={{paddingLeft: "30px", paddingRight: "30px", paddingBottom: "25px", color: "white"}}>
                {language ==="RO" && ( <p className="titleParcurs" style={{marginTop: "-50px"}}>&lt; Parcursul meu /&gt;</p> )}
                {language ==="UK" && ( <p className="titleParcurs" style={{marginTop: "-50px"}}>&lt; My Course /&gt;</p> )}
                {language ==="RO" && ( <p className="subTitle">Mapa mea de prezentare de când am pătruns într-o lume cu totul și cu totul magică</p> )}
                {language ==="UK" && ( <p className="subTitle">My showcase map since entering a world that is completely and utterly magical</p> )}
                <div className="text-center">
                    {language === "RO" && (
                        <ParcursText direction="right" img={ACS}
                                    title="Student la Facultatea de Automatică și Calculatoare" period="Iunie 2022 - Prezent"
                                    description={<>După Examenul de Bacalaureat și Admiterea la Universitate, am reușit să intru la
                                        una dintre cele mai prestigioase facultăți din țară. Studiez "Ingineria Sistemelor" și sunt
                                        foarte pasionat de tot ce se întâmplă aici.
                                    </>}
                        />
                    )}
                    {language === "UK" && (
                        <ParcursText direction="right" img={ACS}
                                    title="Student at the Faculty of Automation and Computers" period="June 2022 - Present"
                                    description={<>After the Baccalaureate Exam and University Admission, I managed to enter the
                                        one of the most prestigious faculties in the country. I study "Systems Engineering" and I am
                                        very passionate about everything that happens here.
                                    </>}
                        />
                    )}

                    {language === "RO" && (
                        <ParcursText direction="left" img={LSAC}
                                    title="Membru în Liga Studenților Facultății" period="Octombrie 2022 - Prezent"
                                    description={<>După ce am participat la mai multe ședințe organizate de LSAC, dar și știind câte
                                        ceva despre activitatea lor, am decis că mi-ar plăcea să fac parte din "Liga Studenților". Zis
                                        și făcut. Am aplicat, am susținut toate interviurile și așa am ajuns să fiu acceptat în această
                                        comunitate.
                                    </>}
                        />
                    )}
                    {language === "UK" && (
                        <ParcursText direction="left" img={LSAC}
                                    title="Member of the College Students League" period="October 2022 - Present"
                                    description={<>After attending several meetings organized by LSAC, but also knowing how many
                                        something about their activity, I decided that I would like to be a part of the "Student League". said
                                        and done. I applied, passed all the interviews, and that's how I ended up being accepted into this one
                                        community.
                                    </>}
                        />
                    )}
                    
                    {language === "RO" && (
                        <ParcursText direction="right" img={IT}
                                    title="Membru în Departamentul de IT - LSAC" period="Decembrie 2022 - Prezent"
                                    description={<>După perioada interviurilor cu "Liga Studenților", a urmat o perioadă în care puteam
                                        să ne înscriem la câte departamente doream din cadrul ligii. Am ales să mă înscriu și în
                                        "Departamentul de IT" unde pot spune cu mâna pe inimă că nu regret nicio clipă petrecută aici.
                                    </>}
                        />
                    )}
                    {language === "UK" && (
                        <ParcursText direction="right" img={IT}
                                    title="Member in the IT Department - LSAC" period="December 2022 - Present"
                                    description={<>After the interview period with the "Student League", there followed a period when I could
                                    to enroll in as many departments as we wanted within the league. I chose to enroll in
                                    The "IT department" where I can say with my hand on my heart that I don't regret a single moment spent here.
                                    </>}
                        />
                    )}
                    
                    {language === "RO" && (
                        <ParcursText direction="left" img={Sesiune}
                                    title="Participant la Sesiunea de Comunicări Științifice" period="Mai 2023"
                                    description={<>În semestrul al 2-lea mă pot mândri cu participarea mea la "Sesiunea de Comunicări
                                        Științifice" cu un proiect la Chimie, "Chemistry App" ce a fost conceput pentru a ajuta studenții
                                        de la Laboratoarele de Chimie la lecțiile cu "Pile Electrice".
                                    </>}
                        />
                    )}
                    {language === "UK" && (
                        <ParcursText direction="left" img={Sesiune}
                                    title="Participant in the Scientific Communications Session" period="May 2023"
                                    description={<>In the second semester I can be proud of my participation in the "Communications Session
                                    Scientific" with a project in Chemistry, "Chemistry App" which was designed to help students
                                    from Chemistry Labs to "Electrical Batteries" lessons.
                                    </>}
                        />
                    )}
                    
                    {language === "RO" && (
                        <ParcursText direction="right" img={ComingSoon}
                                    title="Alte proiecte personale" period="Vor urma..."
                                    description={<>Pe viitor îmi doresc să-mi dezvolt mai mult partea tehnică prin diverse proiecte.
                                        Vreau să învăț cât mai multe atât pe Frontend, cât și pe Backend, să îmi dezvolt abilități
                                        practice și, de ce nu, poate să mă angajez în domeniu.
                                    </>}
                        />
                    )}
                    {language === "UK" && (
                        <ParcursText direction="right" img={ComingSoon}
                                    title="Other personal project" period="Coming soon..."
                                    description={<>In the future I want to develop my technical side more through various projects.
                                        I want to learn as much as possible on both Frontend and Backend, to develop my skills
                                        practical and, why not, maybe I can get a job in the field.
                                    </>}
                        />
                    )}
                </div>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="containerWaveDown">
                <path
                    fill="#212529"
                    fillOpacity="1"
                    d="M0,96L24,96C48,96,96,96,144,80C192,64,240,32,288,58.7C336,85,384,171,432,197.3C480,224,528,192,576,181.3C624,171,672,181,720,192C768,203,816,213,864,197.3C912,181,960,139,1008,106.7C1056,75,1104,53,1152,48C1200,43,1248,53,1296,64C1344,75,1392,85,1416,90.7L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                />
            </svg>
        </div>
    )
}