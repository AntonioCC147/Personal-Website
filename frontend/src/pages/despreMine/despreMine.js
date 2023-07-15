import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MePhoto from '../../assets/photos/MePhoto.jpg';
import FAQ from '../../components/faq/faq';

import './despreMine.css';
import '../../components/containers/text.css';
import '../../components/containers/principalContainer.css';

export default function DespreMine() {
    return (
        <>
            <Container className="bg-dark principalContainer text-center">
                <div className="principalTitle">Despre mine</div>
                <hr className="hr"/>
                <Row>
                    <Col sm="4">
                        <img src={MePhoto} className="img-setUp" alt="MePhoto"/>
                    </Col>
                    <Col sm="8" className="simpleText">
                        <div>
                            <span class="tab"/>
                                Numele meu este Toni, am 20 de ani, sunt student la <i>"Facultatea de Automatică și
                                Calculatoare"</i> din București și membru în <i>"Liga Studenților"</i>.
                        </div>
                        <div>
                            <span class="tab"/>
                                Pasiunea mea principală din clasa a XI-a a reprezentat-o Informatica și absolut tot ce
                                ține de domeniul IT. Încă de atunci m-am hotărât că doresc să urmez acest domeniu și
                                că vreau să intru la o facultate de domeniu, așa cum am și făcut.
                        </div>
                        <div>
                            <span class="tab"/>
                                În timpul liber mă ocup cu oferirea de meditații / pregătiri suplimentare atât la
                                Informatică, cât și la Matematică elevilor ce solicită ajutorul. Până în momentul de
                                față am avut <i>"pe mână"</i> nici mai mult și nici mai puțin de 10 elevi pe care i-am ajutat
                                să obțină rezultatele dorite pe toate planurile pe care și le-au propus.
                        </div>
                        <div>
                            <span class="tab"/>
                                Pe lângă aceste aspecte, sunt membru în cadrul <i>"Departamentului de IT"</i> din cadrul ligii.
                                Avem o comunitate extrem de unită și facem absolut totul din pasiune. Învățăm unii de la alții,
                                iar eu mă opot mândri cu faptul că fac parte din această comunitate.
                        </div>
                        <div>
                            <span class="tab"/>
                                De asemenea, până în momentul de față reușesc cât de cât să stăpânesc tehnologii precum React,
                                HTML, Bootstrap, CSS, dar chiar și JavaScript. Acestea reprezintă câteva dintre lucrurile cu
                                care am lucrat pe parcursul primului an de facultate, în special toate în cadrul departamentului.
                        </div>
                        <div>
                            <span class="tab"/>
                                Pe final, doresc să precizez că sunt o persoană foarte deschisă noilor oportunități, căruia îi
                                plac provocările și aventurile, dar și o persoană calculată și cu capul pe umeri.
                        </div>
                    </Col>
                </Row>
            </Container>
            <FAQ/>
        </>
    )
}