import React from "react";

import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { SocialIcon } from "react-social-icons";

import Arrow from '../../assets/icons/Arrow.png';

export default function Footer({language}) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted anta" style={{marginTop: "20px"}}>
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{alignItems: "center", verticalAlign: "center"}}>
                {language === "RO" && (
                    <div style={{color: "gray"}}> Conectează-mă prin rețelele de socializare disponibile:</div>
                )}
                {language === "UK" && (
                    <div style={{color: "gray"}}> Connect me through the available social networks:</div>
                )}
                <div>
                    <SocialIcon url="https://github.com/AntonioCC147" target="_blank" network="github" bgColor="#ffffff" style={{margin: "2px", width: "40px", height: "40px"}}/>
                    <SocialIcon url="https://discord.com/users/265854349362724864" target="_blank" network="discord" style={{margin: "2px", width: "40px", height: "40px"}}/>
                    <SocialIcon url="https://www.linkedin.com/in/antonio-crantea/" target="_blank" network="linkedin" style={{margin: "2px", width: "40px", height: "40px"}}/>
                    <SocialIcon url="https://www.instagram.com/antoniocc147" target="_blank" network="instagram" style={{margin: "2px", width: "40px", height: "40px"}}/>
                    <SocialIcon url="https://www.facebook.com/antoniocc147" target="_blank" network="facebook" style={{margin: "2px", width: "40px", height: "40px"}}/>
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
                            {language === "RO" && ( <h6 className="text-uppercase fw-bold mb-4">&lt; Produse /&gt;</h6> )}
                            {language === "UK" && ( <h6 className="text-uppercase fw-bold mb-4">&lt; Products /&gt;</h6> )}
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
                            <p><span className="fw-bold">Yahoo:</span> thet0mmy@yhaoo.com</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            
            <div className="text-center p-4 fw-bold" style={{ backgroundColor: "#0000000d", color: "gray", position: "relative" }}>
                © {new Date().getFullYear()} 
                    {language === "RO" && (<> Copyright | Crantea Antonio-Cristian, student la Facultatea de "Automatică și Calculatoare" </> )}
                    {language === "UK" && (<> Copyright | Crantea Antonio-Cristian, student at Faculty of "Automatic Control and Computer Science" </> )}
                <button style={{ background: "transparent", border: "none", position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)" }}>
                    <img src={Arrow} onClick={scrollToTop} style={{ width: "50px" }} alt="Arrow" />
                </button>
            </div>   
        </MDBFooter>
    );
}