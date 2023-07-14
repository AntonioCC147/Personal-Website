import Container from 'react-bootstrap/Container';

import ParcursText from './parcursText';

import ACS from '../../assets/parcurs/ACS.jpg';
import LSAC from '../../assets/parcurs/LSAC.jpeg';
import IT from '../../assets/parcurs/IT.jpg';
import Sesiune from '../../assets/parcurs/Sesiune.jpg';
import ComingSoon from '../../assets/parcurs/ComingSoon.jpg';

import '../../components/containers/text.css';
import './parcurs.css';

export default function ParcursMain() {
    return (
        <Container fluid className="bg-dark" style={{ paddingBottom: "25px", color: "white"}}>
            <p className="title">Parcursul meu</p>
            <p className="subTitle">Mapa mea de prezentare de când am pătruns într-o lume cu totul și cu totul magică</p>
            <div className="text-center">
                <ParcursText direction="right" img={ACS}
                            title="Student la Facultatea de Automatică și Calculatoare" period="Iunie 2022 - Prezent"
                            description={<>După Examenul de Bacalaureat și Admiterea la Universitate, am reușit să intru la
                                una dintre cele mai prestigioase facultăți din țară. Studiez "Ingineria Sistemelor" și sunt
                                foarte pasionat de tot ce se întâmplă aici.
                            </>}
                />

                <ParcursText direction="left" img={LSAC}
                            title="Membru în Liga Studenților din facultate" period="Octombrie 2022 - Prezent"
                            description={<>După ce am participat la mai multe ședințe organizate de LSAC, dar și știind câte
                                ceva despre activitatea lor, am decis că mi-ar plăcea să fac parte din "Liga Studenților". Zis
                                și făcut. Am aplicat, am susținut toate interviurile și așa am ajuns să fiu acceptat în această
                                comunitate.
                            </>}
                />
                
                <ParcursText direction="right" img={IT}
                            title="Membru în Departamentul de IT - LSAC" period="Decembrie 2022 - Prezent"
                            description={<>După perioada interviurilor cu "Liga Studenților", a urmat o perioadă în care puteam
                                să ne înscriem la câte departamente doream din cadrul ligii. Am ales să mă înscriu și în
                                "Departamentul de IT" unde pot spune cu mâna pe inimă că nu regret nicio clipă petrecută aici.
                            </>}
                />
                
                <ParcursText direction="left" img={Sesiune}
                            title="Participant la Sesiunea de Comunicări Științifice" period="Mai 2023"
                            description={<>În semestrul al 2-lea mă pot mândri cu participarea mea la "Sesiunea de Comunicări
                                Științifice" cu un proiect la Chimie, "Chemistry App" ce a fost conceput pentru a ajuta studenții
                                de la Laboratoarele de Chimie la lecțiile cu "Pile Electrice".
                            </>}
                />
                
                <ParcursText direction="right" img={ComingSoon}
                            title="Alte proiecte personale" period="Vor urma..."
                            description={<>Pe viitor îmi doresc să-mi dezvolt mai mult partea tehnică prin diverse proiecte.
                                Vreau să învăț cât mai multe atât pe Frontend, cât și pe Backend, să îmi dezvolt abilități
                                practice și, de ce nu, poate să mă angajez în domeniu.
                            </>}
                />
            </div>
        </Container>
    )
}