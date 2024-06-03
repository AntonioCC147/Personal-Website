import React from "react";

import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { SocialIcon } from "react-social-icons";

import Arrow from '../../assets/icons/Arrow.png';

import './footer.css';

export default function Footer({language}) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#212529"
                    fillOpacity="1"
                    d="M0,64L21.8,101.3C43.6,139,87,213,131,213.3C174.5,213,218,139,262,106.7C305.5,75,349,85,393,80C436.4,75,480,53,524,64C567.3,75,611,117,655,138.7C698.2,160,742,160,785,149.3C829.1,139,873,117,916,112C960,107,1004,117,1047,128C1090.9,139,1135,149,1178,165.3C1221.8,181,1265,203,1309,202.7C1352.7,203,1396,181,1418,170.7L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
                />
            </svg>
            <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted anta">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom footerUp" style={{alignItems: "center", verticalAlign: "center"}}>
                    {language === "RO" && (
                        <div className="textUp" style={{color: "gray"}}> Conectează-mă prin rețelele de socializare disponibile:</div>
                    )}
                    {language === "UK" && (
                        <div className="textUp" style={{color: "gray"}}> Connect me through the available social networks:</div>
                    )}
                    <div className="textUp">
                        <SocialIcon url="https://www.linkedin.com/in/antonio-crantea/" target="_blank" network="linkedin" className="footerIcons"/>
                        <SocialIcon url="https://github.com/AntonioCC147" target="_blank" network="github" bgColor="#ffffff" className="footerIcons"/>
                        <SocialIcon url="https://discord.com/users/265854349362724864" target="_blank" network="discord" className="footerIcons"/>
                        <SocialIcon url="https://www.instagram.com/antoniocc147" target="_blank" network="instagram" className="footerIcons"/>
                    </div>
                </section>
                <section>
                    <MDBContainer className="text-center text-md-start mt-5" style={{color: "gray"}}>
                        <MDBRow className="mt-3">
                            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                                {language === "RO" && ( <h6 className="text-uppercase fw-bold mb-4">&lt; Despre site /&gt;</h6> )}
                                {language === "UK" && ( <h6 className="text-uppercase fw-bold mb-4">&lt; About site /&gt;</h6> )}
                                {language === "RO" && ( <p>Site-ul își propune prezentarea muncii mele din domeniul IT. Aplicația este creată de la zero.</p> )}
                                {language === "UK" && ( <p>The site aims to present my work in the IT field & area. The app is built from scratch.</p> )}
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                                {language === "RO" && ( <h6 className="text-uppercase fw-bold mb-4">&lt; Colaborări /&gt;</h6> )}
                                {language === "UK" && ( <h6 className="text-uppercase fw-bold mb-4">&lt; Collaboration /&gt;</h6> )}
                                <p>
                                    <a href="https://edeea.ro/produs/agenda-bacalaureat-informatica-matematica-informatica/" target="blank" className="text-reset">
                                        {language === "RO" && ( <>Agendă Informatică</> )}
                                        {language === "UK" && ( <>Informatics Agenda</> )}
                                    </a>
                                </p>
                                <p>
                                    <a href="https://edeea.ro/produs/pachet-agenda-informatica-set-memoratoare-caiet-informatica/" target="blank" className="text-reset">
                                        {language === "RO" && ( <>Set Agendă Informatică</> )}
                                        {language === "UK" && ( <>Informatics Agenda Set</> )}
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">&lt; Contact /&gt;</h6>
                                <p><span className="fw-bold">Gmail:</span> antoniocrantea@gmail.com</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                
                <div className="text-center p-4 fw-bold" style={{ backgroundColor: "#0000000d", color: "gray", position: "relative" }}>
                    © {new Date().getFullYear()} 
                        {language === "RO" && (<> Copyright | Crantea Antonio-Cristian, student la Facultatea de "Automatică și Calculatoare" </> )}
                        {language === "UK" && (<> Copyright | Crantea Antonio-Cristian, student at Faculty of "Automatic Control and Computer Science" </> )}
                    <button style={{ background: "transparent", border: "none", position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)" }}>
                        <img src={Arrow} onClick={scrollToTop} className="footerArrow" alt="Arrow" />
                    </button>
                </div>   
            </MDBFooter>
        </div>
    );
}