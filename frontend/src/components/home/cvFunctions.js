import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './cv.css';

const SkillsCourses = () => {
    return (
        <>
            <Row>
                <p className="titleCV">Cursuri Relevante</p>
                <span className="simpleTextCV">Programarea Calculatoarelor</span>
                <span className="simpleTextCV">Structuri de Date și Algoritmi</span>
                <span className="simpleTextCV">Sisteme de Operare</span>
                <span className="simpleTextCV">Procesarea Informației</span>
                <span className="simpleTextCV">Managementul Documentelor</span>
            </Row>
            <Row>
                <p className="titleCV">Skill-uri Tehnice</p>
                <span className="simpleTextCV">React</span>
                <span className="simpleTextCV">JavaScript</span>
                <span className="simpleTextCV">HTML</span>
                <span className="simpleTextCV">BootStrap</span>
                <span className="simpleTextCV">CSS</span>
                <span className="simpleTextCV">C/C++</span>
            </Row>
            <Row>
                <p className="titleCV">Dev Tools</p>
                <span className="simpleTextCV">Visual Studio Code</span>
                <span className="simpleTextCV">Git</span>
                <span className="simpleTextCV">CodeBlocks</span>
            </Row>
        </>
    )
}

const Education = () => {
    return (
        <Row>
            <p className="titleCV">Educație</p><hr/>
            <Col sm={10} >
                <li className="listCV">Universitatea Politehnică din București</li>
                <span className="descriptionListCV">Facultatea de "Automatică și Calculatoare",
                domeniul "Ingineria Sistemelor"</span>
            </Col>
            <Col sm={2} style={{textAlign: "right"}}>
                2022 - Prezent
            </Col>
        </Row>
    )
}

const Certifications = () => {
    return (
        <>
            <Row>
                <p className="titleCV">Certificate</p><hr/>
                <Col sm={8} >
                    <li className="listCV">Școala de Vară 3DPUB</li>
                    <span className="descriptionListCV">Școală de vară organziată de UPB în parteneriat cu Gameloft</span>
                </Col>
                <Col sm={4} style={{textAlign: "right"}}>
                    Iunie 2023 - Prezent
                </Col>
            </Row>
            <Row>
                <Col sm={8} >
                    <li className="listCV">Embedded Programming for Beginners</li>
                    <span className="descriptionListCV">Digital Programming Workshop, Google</span>
                </Col>
                <Col sm={4} style={{textAlign: "right"}}>
                    Aprilie și Mai 2023
                </Col>
            </Row>
            <Row>
                <Col sm={10} >
                    <li className="listCV">Diplomă de Bacalaureat</li>
                    <span className="descriptionListCV">Informatică - 10, Matematică - 9.90, Media finală - 9.70</span>
                </Col>
                <Col sm={2} style={{textAlign: "right"}}>
                    Iulie 2022
                </Col>
            </Row>
        </>
    )
}

const Projects = () => {
    return (
        <>
            <Row>
                <p className="titleCV">Alte Proiecte</p><hr/>
                <Col sm={10} >
                    <li className="listCV">Ce spun automatiștii?</li>
                    <span className="descriptionListCV">React.js, MongoDB, Git</span>
                    
                </Col>
                <Col sm={2} style={{textAlign: "right"}}>
                    Aprilie 2023
                </Col>
            </Row>
            <Row style={{marginRight: "60px"}}>
                <p className="descriptionList2CV">
                    Am lucrat cu o echipă de 5 persoane pentru a crea o aplicație care se dorește a fi un site web folosit
                    ca interfață pentru echipele participante la eveniment pentru a avea cea mai plăcută experiență posibilă.
                    M-am ocupat de partea de frontend, lucrând la secțiuni precum "Despre noi", "FAQ" sau chiar "Footer". 
                </p>
            </Row>
            <Row>
                <Col sm={9} >
                    <li className="listCV">Generic Admin Panel</li>
                    <span className="descriptionListCV">React.js, TypeScript, Git</span>
                </Col>
                <Col sm={3} style={{textAlign: "right"}}>
                    Martie 2022 - Prezent
                </Col>
            </Row>
            <Row style={{marginRight: "60px"}}>
                <p className="descriptionList2CV" >
                    Având responsabilitatea de "Team Lead" în cadrul acestui proiect, a trebuit să creem un  admin panel
                    cât mai general pentru o introducere mai rapidă a informațiilor, echipelor, chestionarelor sau a altor
                    lucruri specifice pe celelalte platforme pe care le deține liga.
                </p>
            </Row>
        </>
    )
}

const Volunteering = () => {
    return (
        <>
            <Row>
                <p className="titleCV">Experiențe de Voluntariat</p><hr/>
                <Col sm={8} >
                    <li className="listCV">Departamentul de IT</li>
                    <span className="descriptionListCV">Membru în "Liga Studenților din Facultatea de
                    Automatică și Calculatoare"</span>
                </Col>
                <Col sm={4} style={{textAlign: "right"}}>
                    Decembrie 2022 - Prezent
                </Col>
            </Row>
            <Row>
                <Col sm={8} >
                    <li className="listCV">Meditator</li>
                    <span className="descriptionListCV">Suport educațional pentru elevi la materiile Informatică și Matematică</span>
                </Col>
                <Col sm={4} style={{textAlign: "right"}}>
                    Septembrie 2021 - Prezent
                </Col>
            </Row>
        </>
    )
}

export { SkillsCourses, Education, Certifications, Projects, Volunteering };