import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CodeWorkspace from '../../components/codeStuff/codeWorkspace';

export default function Pseudocod({language}) {
    const cod1 =
`întreg nr, cif
citește nr, cif
┌dacă nr % cif = 0 atunci
│  scrie "Numărul este divizibil cu cifra citită"
│ altfel
│  scrie "Numărul nu este divizibil cu cifra citită"
└■`;

    const cod2 = 
`întreg nr, cif, maxim; maxim ← 1
citește nr
┌cât timp nr > 0 execută
│    cif ← nr % 10
│   ┌daca cif > maxim atunci
│   │  maxim ← cif
│   └■
│    nr ← nr / 10
└■  
scrie maxim`;

    const cod3 =
`întreg nr, cif, minim; minim ← 9
citește nr
┌cât timp nr > 0 execută
│    cif ← nr % 10
│   ┌daca cif < minim atunci
│   │  minim ← cif
│   └■
│    nr ← nr / 10
└■  
scrie minim`;

    const cod4 = 
`întreg nr, inv
citește nr
inv ← 0
┌cât timp nr ≠ 0 execută
│  inv ← inv * 10 + nr % 10
│  nr ← nr / 10
└■
scrie inv`;

    const cod5 = 
`întreg nr, aux, inv
citește nr
inv ← 0
aux ← nr
┌cât timp nr ≠ 0 execută
│  inv ← inv * 10 + nr % 10
│  nr ← nr / 10
└■
┌dacă aux = inv atunci
│  scrie "Numărul este palindrom"
│ altfel
│  scrie "Numărul nu este palindrom"
└■`;

    const cod6 = 
`// Divizorii unui numar - [2, nr / 2] sau [2, √nr]
întreg nr, i
citește nr 
┌pentru i ← 2, nr / 2 execută
│  ┌dacă nr % i = 0 atunci
│  │  scrie i, " "
│  └■
└■`;

    const cod7 = 
`întreg nr, div, OK
citește nr
OK ← 0
┌pentru div ← 2, nr/2 execută
│  ┌dacă nr % div = 0 atunci
│  │  OK ← 1;
│  └■
└■
┌dacă OK = 0 atunci
│  scrie "Numărul este prim"
│ altfel
│  scrie "Numărul nu este prim"
└■`;

    const cod8 =
`întreg nr, d, p
citește nr
d ← 2 // primul divizor posibil
┌cât timp nr > 1 execută
│    p ← 0 // puterea mereu trebuie să înceapă de la 0, pentru fiecare ”d”
│   ┌cât timp nr % d = 0 execută
│   │  p ← p + 1 // puterea crește cât timp numărul se împarte exact la ”d”
│   │  nr ← nr / d // numărul se împarte, iar programul se întoarce la while
│   └■
│   ┌dacă p > 0 atunci
│   │  scrie d, "^",  p, " " // afișăm descompunerea
│   └■
│    d ← d + 1 // ”d” crește, apoi verificăm programul până când nr devine 1
└■`;

    const cod9 = 
`întreg nr
citește nr
┌dacă (întreg) √nr = √nr atunci
│  scrie "Numărul este Pătrat Perfect"
│ altfel
│  scrie "Numărul nu este Pătrat Perfect"
└■`;

    const cod10 = 
`// Un număr este perfect când este egal cu suma divizorilor săi
întreg nr, i, S
citește nr
S ← 0
┌pentru i ← 1, nr/2 execută
│  ┌dacă nr % i = 0 atunci
│  │  S ← S + i
│  └■
└■
┌dacă nr = S atunci
│  scrie "Numărul este Perfect"
│ altfel
│  scrie "Numărul nu este Perfect"
└■`;

    const cod11 = 
`întreg a, b, CMMDC
citește a, b
┌cât timp a ≠ b execută
│   ┌daca a > b atunci
│   │  a ← a - b
│   │ altfel
│   │  b ← b - a
│   └■
└■
CMMDC ← a
scrie CMMDC`;

    const cod12 = 
`// CMMMC - (a * b)/CMMDC
întreg a, b, x, y, CMMDC, CMMMC
citește a, b
x ← a; y ← b
┌cât timp a ≠ b execută
│   ┌dacă a > b atunci
│   │  a ← a - b
│   │ altfel
│   │  b ← b - a
│   └■
└■
CMMDC ← a
scrie CMMDC
CMMMC ← (x * y) / CMMDC
scrie CMMMC`;

    const cod13 = 
`/* Cifra de control se află calculând suma cifrelor numărului până se ajunge la o cifră exactă. Pentru a fi mai ușor să aflăm această cifră, folosim criteriul de divizibilitate cu 9 ce spune că un număr se divide cu 9 dacă suma cifrelor sale este multiplu de. Putem afla cifra de control calculând restul împărțirii numărului la 9. Dacă restul este 0 atunci cifra de control este 9, altfel este acel rest. */
întreg nr, S; S ← 0
citește nr
┌cât timp nr > 0 execută
│  S ← S + nr % 10
│  nr ← nr / 10
└■
┌dacă S % 9 = 0 atunci
│  scrie "Cifra de control este 9"
│ altfel
│  scrie "Cifra de control este ", S % 9
└■`;

    const cod14 = 
`/*
Exemplu (n = 450): Transformare din baza 10 ([0, 9]) în baza 2 ([0, 1]):
450 / 2 = 225 rest 0
225 / 2 = 112 rest 1
112 / 2 = 56 rest 0
56 / 2 = 28 rest 0
28 / 2 = 14 rest 0
14 / 2 = 7 rest 0
7 / 2 = 3 rest 1
3 / 2 = 1 rest 1
1 / 2 = 0 rest 1
-> 111000010
*/
întreg n, rest, rezultat, p
citește n
rezultat ← 0
p ← 1
┌cât timp n ≠ 0 execută
│  rest ← n % 2
│  rezultat ← rezultat + rest * p
│  p ← p * 10
│  n ← n / 2
└■
scrie rezultat`;

    const cod15 = 
`/*
Exemplu (n = 111000010): Transformare din baza 2 ([0, 1]) în baza 10 ([0, 9]):
0 * 2 + 1 = 1
1 * 2 + 1 = 3
3 * 2 + 1 = 7
7 * 2 + 0 = 14
14 * 2 + 0 = 28
28 * 2 + 0 = 56
56 * 2 + 0 = 112
112 * 2 + 1 = 225
225 * 2 + 0 = 450
-> 450
*/
întreg n, cifra, rezultat, p
citește n
rezultat ← 0
p ← 1
┌cât timp n ≠ 0 execută
│  cifra ← n % 10
│  rezultat = rezultat + cifra * p
│  p ← p * 2
│  n ← n / 10
└■
scrie rezultat`

    return (
        <Container>
            <div className="title">&lt; Pseudocod /&gt;</div>
            {language === "RO" && (
                <div className="subTitle">Algoritmi Elementari care se predau în clasele IX-X, în mare parte la specializarea Științele-Naturii</div>
            )}
            {language === "UK" && (
                <div className="subTitle">Elementary Algorithms that are taught in grades IX-X, mostly in the Natural Sciences specialization</div>
            )}
            <Row>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Divizibilitatea unui număr cu o cifră</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod1} language="cpp" />
                    </div>
                </Col>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Determinarea cifrei maxime</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod2} language="cpp" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Determinarea cifrei minime</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod3} language="cpp" />
                    </div>
                </Col>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Determinarea inversului unui număr</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod4} language="cpp" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Verificarea unui număr dacă este palindrom</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod5} language="cpp" />
                    </div>
                </Col>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Afișarea divizorilor unui număr</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod6} language="cpp" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Verificarea unui număr dacă este prim</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod7} language="cpp" />
                    </div>
                </Col>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Descompunerea în factori primi al unui număr</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod8} language="cpp" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Verificarea unui număr dacă este pătrat perfect</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod9} language="cpp" />
                    </div>
                </Col>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Verificarea unui număr dacă este perfect</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod10} language="cpp" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Aflarea celui mai mare divizor comun (CMMDC) prin scăderi repetate</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod11} language="cpp" />
                    </div>
                </Col>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Aflarea celui mai mic multiplu comun (CMMMC)</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod12} language="cpp" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Aflarea cifrei de control al unui număr</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod13} language="cpp" />
                    </div>
                </Col>
                <Col sm={6}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Transformarea unui număr din baza 10 în baza 2</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod14} language="cpp" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <p className="text-center" style={{fontFamily: "Consolas"}}>Transformarea unui număr din baza 2 în baza 10</p>
                    <div className="codeArea">
                        <CodeWorkspace code={cod15} language="cpp" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}