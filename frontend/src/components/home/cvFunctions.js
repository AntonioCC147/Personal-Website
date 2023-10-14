import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './cv.css';

const SkillsCourses = ({language}) => {
    return (
        <div>
            {language === "RO" && (
                <Row>
                    <p className="titleCV">Cursuri Relevante</p>
                    <span className="simpleTextCV">Programarea Calculatoarelor</span>
                    <span className="simpleTextCV">Structuri de Date și Algoritmi</span>
                    <span className="simpleTextCV">Sisteme de Operare</span>
                    <span className="simpleTextCV">Procesarea Informației</span>
                    <span className="simpleTextCV">Managementul Documentelor</span>
                </Row>
            )}
            {language === "UK" && (
                <Row>
                    <p className="titleCV">Relevant Courses</p>
                    <span className="simpleTextCV">Computer Programming</span>
                    <span className="simpleTextCV">Data Structures and Algorithms</span>
                    <span className="simpleTextCV">Operating Systems</span>
                    <span className="simpleTextCV">Information Processing</span>
                    <span className="simpleTextCV">Document Management</span>
                </Row>
            )}

            {language === "RO" && (
                <Row>
                    <p className="titleCV">Skill-uri Tehnice</p>
                    <span className="simpleTextCV">React</span>
                    <span className="simpleTextCV">JavaScript</span>
                    <span className="simpleTextCV">HTML</span>
                    <span className="simpleTextCV">Bootstrap</span>
                    <span className="simpleTextCV">CSS</span>
                    <span className="simpleTextCV">C / C++</span>
                    <span className="simpleTextCV">Matlab</span>
                </Row>
            )}
            {language === "UK" && (
                <Row>
                    <p className="titleCV">Technical Skills</p>
                    <span className="simpleTextCV">React</span>
                    <span className="simpleTextCV">JavaScript</span>
                    <span className="simpleTextCV">HTML</span>
                    <span className="simpleTextCV">Bootstrap</span>
                    <span className="simpleTextCV">CSS</span>
                    <span className="simpleTextCV">C / C++</span>
                    <span className="simpleTextCV">Matlab</span>
                </Row>
            )}

            <Row>
                <p className="titleCV">Dev Tools</p>
                <span className="simpleTextCV">Visual Studio Code</span>
                <span className="simpleTextCV">GitHub / GitHub Desktop</span>
                <span className="simpleTextCV">CodeBlocks</span>
            </Row>
        </div>
    )
}

const Education = ({language}) => {
    return (
        <div>
            {language === "RO" && (
                <div>
                    <Row>
                        <p className="titleCV">Educație</p><hr/>
                        <Col sm={9}>
                            <li className="listCV">Universitatea Politehnică din București</li>
                            <span className="descriptionListCV">Facultatea de "Automatică și Calculatoare",
                            domeniul "Ingineria Sistemelor"</span>
                        </Col>
                        <Col sm={3} style={{textAlign: "right"}}>
                            Octombrie 2022 - Prezent
                        </Col>
                    </Row>
                </div>
            )}
            {language === "UK" && (
                <div>
                    <Row>
                        <p className="titleCV">Education</p><hr/>
                        <Col sm={10}>
                            <li className="listCV">Politehnica University of Bucharest</li>
                            <span className="descriptionListCV">Faculty of "Automation and Computers",
                            field of study: "Systems Engineering"</span>
                        </Col>
                        <Col sm={2} style={{textAlign: "right"}}>
                            2022 - Present
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    )
}

const Certifications = ({language}) => {
    return (
        <div>
            {language === "RO" && (
                <div>
                    <Row>
                        <p className="titleCV">Certificate</p><hr/>
                        <Col sm={8}>
                            <li className="listCV">Embedded Programming for Beginners</li>
                            <span className="descriptionListCV">Digital Programming Workshop, Google</span>
                        </Col>
                        <Col sm={4} style={{textAlign: "right"}}>
                            Aprilie 2023 - Mai 2023
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <li className="listCV">Diplomă de Bacalaureat</li>
                            <span className="descriptionListCV">Informatică - 10, Matematică - 9.90, Media Finală - 9.70</span>
                        </Col>
                        <Col sm={2} style={{textAlign: "right"}}>
                            Iulie 2022
                        </Col>
                    </Row>
                </div>
            )}
            {language === "UK" && (
                <div>
                    <Row>
                        <p className="titleCV">Certificates</p><hr/>
                        <Col sm={8}>
                            <li className="listCV">Embedded Programming for Beginners</li>
                            <span className="descriptionListCV">Digital Programming Workshop, Google</span>
                        </Col>
                        <Col sm={4} style={{textAlign: "right"}}>
                            April 2023 - May 2023
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <li className="listCV">High School Diploma</li>
                            <span className="descriptionListCV">Computer Science - 10, Mathematics - 9.90, Overall Average - 9.70</span>
                        </Col>
                        <Col sm={2} style={{textAlign: "right"}}>
                            July 2022
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    )
}

const Projects = ({language}) => {
    return (
        <div>
            {language === "RO" && (
                <div>
                    <Row>
                        <p className="titleCV">Proiecte Interne</p><hr/>
                        <Col sm={10}>
                            <li className="listCV">Ce spun Automatiștii?</li>
                            <span className="descriptionListCV">React, MongoDB, Git</span>
                            
                        </Col>
                        <Col sm={2} style={{textAlign: "right"}}>
                            Aprilie 2023
                        </Col>
                    </Row>
                    <Row style={{marginRight: "60px"}}>
                        <p className="descriptionList2CV">
                            Am lucrat cu o echipă de 5 persoane pentru a crea o aplicație care se dorește a fi un Website folosit
                            ca interfață pentru echipele participante la eveniment pentru a avea cea mai plăcută experiență posibilă.
                            M-am ocupat de partea de Frontend, lucrând la secțiuni precum <i>"Despre noi"</i>, <i>"FAQ"</i> sau chiar
                            <i>"Footer"</i>. 
                        </p>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <li className="listCV">Generic Admin Panel</li>
                            <span className="descriptionListCV">React, TypeScript, Git</span>
                        </Col>
                        <Col sm={3} style={{textAlign: "right"}}>
                            Martie 2023 - Prezent
                        </Col>
                    </Row>
                    <Row style={{marginRight: "60px"}}>
                        <p className="descriptionList2CV" >
                            Având responsabilitatea de <i>"Team Lead"</i> în cadrul acestui proiect, a trebuit să creem un Admin Panel
                            cât mai general pentru o introducere mai rapidă a informațiilor, echipelor, chestionarelor sau a altor
                            lucruri specifice pe celelalte platforme pe care le deține liga.
                        </p>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <li className="listCV">Agendă Educațională de Bacalaureat la Informatică</li>
                        </Col>
                        <Col sm={4} style={{textAlign: "right"}}>
                            Decembrie 2021 - Prezent
                        </Col>
                    </Row>
                    <Row style={{marginRight: "60px"}}>
                        <p className="descriptionList2CV" >
                            Agenda reprezintă un produs educațional care are drept public țintă elevii claselor a XII-a care urmează să
                            susțină Examenul de Bacalaureat la Informatică. Aceasta este structurată pe capitole și conține atât materia
                            necesară examenului, dar și teste de antrenament special concepute după modelele oficiale.
                        </p>
                    </Row>
                </div>
            )}
            {language === "UK" && (
                <div>
                    <Row>
                        <p className="titleCV">Internal Projects</p><hr/>
                        <Col sm={10}>
                            <li className="listCV">What Do Automation Engineers Say?</li>
                            <span className="descriptionListCV">React, MongoDB, Git</span>
                        </Col>
                        <Col sm={2} style={{textAlign: "right"}}>
                            April 2023
                        </Col>
                    </Row>
                    <Row style={{marginRight: "60px"}}>
                        <p className="descriptionList2CV">
                            I worked with a team of 5 people to create an application intended to be a website used as an interface
                            for teams participating in an event to have the best possible experience. I was responsible for the Frontend,
                            working on sections such as <i>"About Us"</i>, <i>"FAQ",</i> or even the <i>"Footer."</i>
                        </p>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <li className="listCV">Generic Admin Panel</li>
                            <span className="descriptionListCV">React, TypeScript, Git</span>
                        </Col>
                        <Col sm={3} style={{textAlign: "right"}}>
                            March 2023 - Present
                        </Col>
                    </Row>
                    <Row style={{marginRight: "60px"}}>
                        <p className="descriptionList2CV" >
                            Having the responsibility of <i>"Team Lead"</i> within this project, we had to create an Admin Panel as general
                            as possible for a faster introduction of information, teams, quizzes or other specific things on the other platforms
                            that the league has.
                        </p>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <li className="listCV">Educational Agenda for the Computer Science Baccalaureate</li>
                        </Col>
                        <Col sm={3} style={{textAlign: "right"}}>
                            December 2021 - Present
                        </Col>
                    </Row>
                    <Row style={{marginRight: "60px"}}>
                        <p className="descriptionList2CV" >
                            The agenda is an educational product targeting twelfth-grade students preparing to take the Computer Science
                            Baccalaureate Exam. It is structured by chapters and contains both the required exam material and practice tests
                            designed according to official models.
                        </p>
                    </Row>
                </div>
            )}
        </div>
    )
}

const Volunteering = ({language}) => {
    return (
        <div>
            {language === "RO" && (
                <div>
                    <Row>
                        <p className="titleCV">Experiențe de Voluntariat</p><hr/>
                        <Col sm={9}>
                            <li className="listCV">Departamentul de IT</li>
                            <span className="descriptionListCV">Membru în "Liga Studenților din Facultatea de Automatică și Calculatoare"</span>
                        </Col>
                        <Col sm={3} style={{textAlign: "right"}}>
                            Decembrie 2022 - Prezent
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <li className="listCV">Meditator</li>
                            <span className="descriptionListCV">Suport educațional la materiile Informatică, Tehnologii Web și Matematică</span>
                        </Col>
                        <Col sm={3} style={{textAlign: "right"}}>
                            August 2021 - Prezent
                        </Col>
                    </Row>
                </div>
            )}
            {language === "UK" && (
                <div>
                    <Row>
                        <p className="titleCV">Volunteer Experiences</p><hr/>
                        <Col sm={9}>
                            <li className="listCV">IT Department</li>
                            <span className="descriptionListCV">Member of "League of Students from Faculty of Automation and Computers"</span>
                        </Col>
                        <Col sm={3} style={{textAlign: "right"}}>
                            December 2022 - Present
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <li className="listCV">Tutor</li>
                            <span className="descriptionListCV">Educational support in Informatics, Web Technologies, and Mathematics</span>
                        </Col>
                        <Col sm={3} style={{textAlign: "right"}}>
                            August 2021 - Present
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    )
}

const ProgressBar = () => {
    return (
        <div>
            <p className="titleCV">Language Bar</p>
            <div className="color-bar-JavaScript"><span className="yellow"></span></div>
            <div className="color-bar-HTML"><span className="orange1"></span></div>
            <div className="color-bar-CSS"><span className="purple"></span></div>
            <div className="color-bar-CPP"><span className="pink"></span></div>
            <div className="color-bar-C"><span className="gray"></span></div>
            <div className="color-bar-Matlab"><span className="orange2"></span></div>
            <div className="color-bar-Others"><span className="green"></span></div>
            <div className="text-center">
            <ul className="wrap">
                
                <span className="yellow-li">JavaScript</span>
                <span className="orange1-li">HTML</span>
                <span className="purple-li">CSS</span>
                <span className="pink-li">C++</span>
                <span className="gray-li">C</span>
                <span className="orange2-li">Matlab</span>
                <span className="green-li">Others</span>
            </ul></div>
        </div>
    )
}

export { SkillsCourses, Education, Certifications, Projects, Volunteering, ProgressBar };