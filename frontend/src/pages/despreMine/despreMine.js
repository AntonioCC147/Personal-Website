import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MePhoto2 from '../../assets/photos/MePhoto2.jpg';
import FAQ from '../../components/faq/faq';

import './despreMine.css';
import '../../components/containers/text.css';
import '../../components/containers/principalContainer.css';

export default function DespreMine({language}) {
    return (
        <div>
            <Container className="bg-dark principalContainer text-center anta">
                {language === "RO" && ( <div className="principalTitle anta">&lt; Despre mine /&gt;</div> )}
                {language === "UK" && ( <div className="principalTitle anta">&lt; About me /&gt;</div> )}
                <hr className="hr"/>
                <Row>
                    <Col sm="4">
                        <img src={MePhoto2} className="img-setUp" alt="MePhoto"/>
                    </Col>
                    {language === "RO" && (
                        <Col sm="8" className="simpleText">
                            <div>
                                <span className="tab"/>
                                    Numele meu este Toni, am 20 de ani, sunt student la <b><i>"Facultatea de Automatică și
                                    Calculatoare"</i></b> din București și membru în <b><i>"Liga Studenților"</i></b>.
                            </div>
                            <div>
                                <span className="tab"/>
                                    Pasiunea mea principală din clasa a XI-a a reprezentat-o Informatica și absolut tot ce
                                    ține de domeniul IT. Încă de atunci m-am hotărât că doresc să urmez acest domeniu și
                                    că vreau să intru la o facultate de domeniu, așa cum am și făcut.
                            </div>
                            <div>
                                <span className="tab"/>
                                    În timpul liber mă ocup cu oferirea de meditații / pregătiri suplimentare atât la
                                    Informatică, cât și la Matematică elevilor ce solicită ajutorul. Până în momentul de
                                    față am avut <i>"pe mână"</i> nici mai mult și nici mai puțin de 10 elevi pe care i-am ajutat
                                    să obțină rezultatele dorite pe toate planurile pe care și le-au propus.
                            </div>
                            <div>
                                <span className="tab"/>
                                    Pe lângă aceste aspecte, sunt membru în cadrul <b><i>"Departamentului de IT"</i></b> din cadrul ligii.
                                    Avem o comunitate extrem de unită și facem absolut totul din pasiune. Învățăm unii de la alții,
                                    iar eu mă opot mândri cu faptul că fac parte din această comunitate.
                            </div>
                            <div>
                                <span className="tab"/>
                                    De asemenea, până în momentul de față reușesc cât de cât să stăpânesc tehnologii precum React,
                                    HTML, Bootstrap, CSS, dar chiar și JavaScript. Acestea reprezintă câteva dintre lucrurile cu
                                    care am lucrat pe parcursul primului an de facultate, în special toate în cadrul departamentului.
                            </div>
                            <div>
                                <span classNane="tab"/>
                                    Pe final, doresc să precizez că sunt o persoană foarte deschisă noilor oportunități, căruia îi
                                    plac provocările și aventurile, dar și o persoană calculată și cu capul pe umeri.
                            </div>
                        </Col>
                    )}
                    {language === "UK" && (
                        <Col sm="8" className="simpleText">
                            <div>
                                <span className="tab"/>
                                My name is Toni, I am 20 years old, and I am a student at the <b><i>"Faculty of Automation and Computers"</i></b> in Bucharest. I am also a member of the <b><i>"Student League"</i></b>.
                            </div>
                            <div>
                                <span className="tab"/>
                                My main passion since the 11th grade has been Computer Science and everything related to the IT field. Since then, I decided that I wanted to pursue this field and enter a relevant college, which I have done.
                            </div>
                            <div>
                                <span className="tab"/>
                                In my free time, I provide additional tutoring in both Computer Science and Mathematics to students who seek help. To date, I have helped no less than 10 students achieve their desired results in all the areas they set out to conquer.
                            </div>
                            <div>
                                <span className="tab"/>
                                In addition to these activities, I am a member of the <b><i>"IT Department"</i></b> within the league. We have a very close-knit community, and we do everything out of passion. We learn from each other, and I am proud to be a part of this community.
                            </div>
                            <div>
                                <span className="tab"/>
                                Furthermore, I have managed to gain some proficiency in technologies like React, HTML, Bootstrap, CSS, and even JavaScript. These are some of the things I have worked on during my first year of college, especially within the department.
                            </div>
                            <div>
                                <span className="tab"/>
                                Finally, I would like to mention that I am a person who is very open to new opportunities, enjoys challenges and adventures, but is also calculated and level-headed.
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
            <FAQ language={language}/>
        </div>
    )
}