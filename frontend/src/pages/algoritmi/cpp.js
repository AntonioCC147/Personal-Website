import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CodeWorkspace from '../../components/codeStuff/codeWorkspace';

export default function CPP({language}) {
    const cod1 =
`#include <iostream>
using namespace std;
int main()
{
    int nr, cif;
    cout << "Citeste numarul: "; cin >> nr;
    cout << "Citeste cifra: "; cin >> cif;
    if(nr % cif == 0)
        cout << "Numarul este divizibil cu cifra";
      else
        cout << "Numarul nu este divizibil cu cifra";
    return 0;
}`;

    const cod2 = 
`#include <iostream>
using namespace std;
int main()
{
    int nr, cif, maxim = 1;
    cout << "Citeste numarul: "; cin >> nr;
    while(nr > 0){
        cif = nr % 10;
        if(cif > maxim)
            maxim = cif;
        nr = nr / 10;
    }
    cout << maxim;
    return 0;
}`;

    const cod3 =
`#include <iostream>
using namespace std;
int main()
{
    int nr, cif, minim = 9;
    cout << "Citeste numarul: "; cin >> nr;
    while(nr > 0){
        cif = nr % 10;
        if(cif < minim)
            minim = cif;
        nr = nr / 10;
    }
    cout << minim;
    return 0;
}`;

    const cod4 = 
`#include <iostream>
using namespace std;
int main()
{
    int nr, inv = 0;
    cout << "Citeste numarul: "; cin >> nr;
    while(nr != 0){
        inv = inv * 10 + nr % 10;
        nr = nr / 10;
    }
    cout << inv;
    return 0;
}`;

    const cod5 = 
`#include <iostream>
using namespace std;
int main()
{
    int nr, aux, inv = 0;
    cout << "Citeste numarul: "; cin >> nr;
    aux = nr;
    while(nr != 0){
        inv = inv * 10 + nr % 10;
        nr = nr / 10;
    }
    if(aux == inv)
        cout << "Numarul este palindrom";
      else
        cout << "Numarul NU este palindrom";
    return 0;
}`;

    const cod6 = 
`// Divizorii unui numar - [2, nr / 2] sau [2, √nr]
#include <iostream>
using namespace std;
int main()
{
    int nr, i;
    cin >> nr;
    for(i = 2; i <= nr / 2; i++)
        if(nr % i == 0)
            cout << i << " ";
    return 0;
}`;

    const cod7 = 
`#include <iostream>
using namespace std;
int main()
{
    int nr, div, OK = 0;
    cin >> nr;
    for(div = 2; div <= nr/2; div++)
        if(nr % div == 0)
            OK = 1;
    if(OK == 0)
        cout << "Numarul este prim";
      else
        cout << "Numarul nu este prim";
    return 0;
}`;

    const cod8 =
`#include <iostream>
using namespace std;
int main()
{
    int nr, d, p;
    cin >> nr;
    d = 2;
    while(nr > 1){
        p = 0;
        while(nr % d == 0){
            p++;
            nr = nr / d;
        }
        if(p > 0)
            cout << d << "^" << p << " "; 
        d++;
    }
    return 0;
}`;

    const cod9 = 
`#include <iostream>
#include <math.h>
using namespace std;
int main()
{
    int nr;
    cin >> nr;
    if((int)sqrt(nr) == sqrt(nr))
        cout << "Patrat Perfect";
      else
        cout << "Nu este Patrat Perfect";
    return 0;
}`;

    const cod10 = 
`// Un număr este perfect când este egal cu suma divizorilor săi
#include <iostream>
#include <math.h>
using namespace std;
int main()
{
    int nr, i, S = 0;
    cin >> nr;
    for(i = 1; i <= nr / 2; i++)
        if(nr % i == 0)
            S = S + i;
    if(nr == S)
        cout << "Numar Perfect";
      else
        cout << "Nu este numar Perfect";
    return 0;
}`;

    const cod11 = 
`#include <iostream>
using namespace std;
int main()
{
    int a, b, CMMDC;
    cin >> a >> b;
    while(a != b){
        if(a > b)
            a = a - b;
          else
            b = b - a;
    }
    CMMDC = a;
    cout << CMMDC;
    return 0;
}`;

    const cod12 = 
`// CMMMC - (a * b) / CMMDC
#include <iostream>
using namespace std;
int main()
{
    int a, b, x, y, CMMDC, CMMMC;
    cin >> a >> b;
    x = a; y = b;
    while(a != b){
        if(a > b)
            a = a - b;
          else
            b = b - a;
    }
    CMMDC = a; CMMMC = (x * y) / CMMDC;
    cout << CMMMC;
    return 0;
}`;

    const cod13 = 
`/* Cifra de control se află calculând suma cifrelor numărului până se ajunge la o cifră exactă. Pentru a fi mai ușor să aflăm această cifră, folosim criteriul de divizibilitate cu 9 ce spune că un număr se divide cu 9 dacă suma cifrelor sale este multiplu de. Putem afla cifra de control calculând restul împărțirii numărului la 9. Dacă restul este 0 atunci cifra de control este 9, altfel este acel rest. */
#include <iostream>
using namespace std;
int main()
{
    int nr, S = 0;
    cin >> nr;
    while(nr > 0){
        S = S + nr % 10;
        nr = nr / 10;
    }
    if(S % 9 == 0)
        cout << "Cifra de control este 9";
      else
        cout << "Cifra de control este " << S % 9;
    return 0;
}`;

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
#include <iostream>
using namespace std;
int main()
{
    int n, rest, rezultat = 0, p = 1;
    cin >> n;
    while(n){
        rest = n % 2;
        rezultat = rezultat + rest * p;
        p = p * 10;
        n = n / 2;
    }
    cout << rezultat;
    return 0;
}`;

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
#include <iostream>
using namespace std;
int main()
{
    int n, cifra, rezultat = 0, p = 1;
    cin >> n;
    while(n){
        cifra = n % 10;
        rezultat = rezultat + cifra * p;
        p = p * 2;
        n = n / 10;
    }
    cout << rezultat;
    return 0;
}`

    return (
        <Container>
            <div className="title">&lt; C++ /&gt;</div>
            {language === "RO" && (
                <div className="subTitle">Algoritimi Elementari care se predau în clasele IX-X, în mare parte la specializarea Matematică-Informatică</div>
            )}
            {language === "UK" && (
                <div className="subTitle">Elementary Algorithms that are taught in grades IX-X, mostly in the Mathematics-Informatics specialization</div>
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