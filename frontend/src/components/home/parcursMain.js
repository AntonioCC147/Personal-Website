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
        <Container fluid className="bg-dark" style={{ paddingLeft: "30px", paddingRight: "30px", paddingBottom: "25px", color: "white"}}>
            {language ==="RO" && ( <p className="title">Parcursul meu</p> )}
            {language ==="UK" && ( <p className="title">My Course</p> )}
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
    )
}