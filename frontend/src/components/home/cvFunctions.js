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
                    <span className="simpleTextCV">Programare Orientată pe Obiect</span>
                    <span className="simpleTextCV">Sisteme de Operare</span>
                    <span className="simpleTextCV">Metode Numerice</span>
                </Row>
            )}
            {language === "UK" && (
                <Row>
                    <p className="titleCV">Relevant Courses</p>
                    <span className="simpleTextCV">Computer Programming</span>
                    <span className="simpleTextCV">Data Structures and Algorithms</span>
                    <span className="simpleTextCV">Object Oriented Programming</span>
                    <span className="simpleTextCV">Operating Systems</span>
                    <span className="simpleTextCV">Numerical Methods</span>
                </Row>
            )}

            {language === "RO" && (
                <Row>
                    <p className="titleCV">Skill-uri Tehnice</p>
                    <span className="simpleTextCV">React, JavaScript</span>
                    <span className="simpleTextCV">HTML, CSS, Bootstrap</span>
                    <span className="simpleTextCV">C, C++</span>
                    <span className="simpleTextCV">MATLAB</span>
                </Row>
            )}
            {language === "UK" && (
                <Row>
                    <p className="titleCV">Technical Skills</p>
                    <span className="simpleTextCV">React, JavaScript</span>
                    <span className="simpleTextCV">HTML, CSS, Bootstrap</span>
                    <span className="simpleTextCV">C, C++</span>
                    <span className="simpleTextCV">MATLAB</span>
                </Row>
            )}

            <Row>
                <p className="titleCV">Dev Tools</p>
                <span className="simpleTextCV">Visual Studio Code</span>
                <span className="simpleTextCV">GitHub / GitHub Desktop</span>
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
                        <Col sm={8}>
                            <li className="listCV">Universitatea Politehnica din București</li>
                            <span className="descriptionListCV">Facultatea de "Automatică și Calculatoare",
                            "Ingineria Sistemelor"</span>
                        </Col>
                        <Col sm={4} style={{textAlign: "right"}}>
                            Octombrie 2022 - Prezent
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <li className="listCV">Liceul Teoretic George Călinescu</li>
                            <span className="descriptionListCV">Șef de Promoție - Specializarea "Matematică-Informatică"</span>
                        </Col>
                        <Col sm={4} style={{textAlign: "right"}}>
                            Septembrie 2018 - Iunie 2022
                        </Col>
                    </Row>
                </div>
            )}
            {language === "UK" && (
                <div>
                    <Row>
                        <p className="titleCV">Education</p><hr/>
                        <Col sm={8}>
                            <li className="listCV">Politehnica University of Bucharest</li>
                            <span className="descriptionListCV">Faculty of "Automation and Computers",
                            "Systems Engineering"</span>
                        </Col>
                        <Col sm={4} style={{textAlign: "right"}}>
                            October 2022 - Present
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <li className="listCV">George Călinescu Theoretical High School</li>
                            <span className="descriptionListCV">Head of Promotion - "Mathematics and Informatics" Specialization</span>
                        </Col>
                        <Col sm={4} style={{textAlign: "right"}}>
                            September 2018 - June 2022
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

const Experience = ({language}) => {
    return (
        <div>
            {language === "RO" && (
                <div>
                    <Row>
                        <p className="titleCV">Experiență</p><hr/>
                        <Col sm={8}>
                            <li className="listCV">Asistent de Laborator</li>
                        </Col>
                        <Col sm={4} style={{textAlign: "right"}}>
                            Octombrie 2023 - Prezent
                        </Col>
                    </Row>
                    <Row style={{marginRight: "60px"}}>
                        <p className="descriptionList2CV" >
                            Am ajutat peste 100 de studenții la laboratoare să înțeleagă conceptele de bază și avansate ale
                            disciplinelor Programare Calculatoarelor și Structuri de Date și Algoritmi.
                        </p>
                    </Row>
                </div>
            )}
            {language === "UK" && (
                <div>
                    <Row>
                        <p className="titleCV">Experience</p><hr/>
                        <Col sm={8}>
                            <li className="listCV">Undergraduate Teaching Assistant</li>
                        </Col>
                        <Col sm={4} style={{textAlign: "right"}}>
                            October 2023 - Present
                        </Col>
                    </Row>
                    <Row style={{marginRight: "60px"}}>
                        <p className="descriptionList2CV" >
                            Helped more than 100 students at laboratories to understand the basic and advanced concepts of
                            Computer Programming and Data Structures and Algorithms subjects.
                        </p>
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
                            <li className="listCV">Mentor Educațional</li>
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
                            <li className="listCV">Educational Mentor</li>
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

export { SkillsCourses, Education, Certifications, Experience, Projects, Volunteering, ProgressBar };