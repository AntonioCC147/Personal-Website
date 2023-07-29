import React from "react";

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { SocialIcon } from "react-social-icons";

import Arrow from '../../assets/icons/Arrow.png';

export default function App() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted" style={{marginTop: "20px"}}>
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{alignItems: "center", verticalAlign: "center"}}>
                <div style={{color: "gray"}}>
                    Conectează-mă prin rețelele de socializare disponibile:
                </div>
                <div>
                    <SocialIcon url="https://github.com/AntonioCC147" target="_blank" network="github" bgColor="#ffffff" style={{width: "40px", height: "40px"}}/>{" "}
                    <SocialIcon url="https://discord.com/users/265854349362724864" target="_blank" network="discord" style={{width: "40px", height: "40px"}}/>{" "}
                    <SocialIcon url="https://www.linkedin.com/in/antonio-crantea/" target="_blank" network="linkedin" style={{width: "40px", height: "40px"}}/>{" "}
                    <SocialIcon url="https://www.instagram.com/antoniocc147" target="_blank" network="instagram" style={{width: "40px", height: "40px"}}/>{" "}
                    <SocialIcon url="https://www.facebook.com/antoniocc147" target="_blank" network="facebook" style={{width: "40px", height: "40px"}}/>
                </div>
            </section>
            <section>
                <MDBContainer className="text-center text-md-start mt-5" style={{color: "gray"}}>
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <MDBIcon icon="gem"/>
                                Despre site
                            </h6>
                            <p>
                                Site-ul își propune prezentarea a cât mai multor detalii referitoare la munca mea în domeniul IT.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Produse</h6>
                            <p>
                                <a href="https://edeea.ro/produs/agenda-bacalaureat-informatica-matematica-informatica/" target="blank" className="text-reset">
                                    Agendă Informatică
                                </a>
                            </p>
                            <p>
                                <a href="https://edeea.ro/produs/pachet-agenda-informatica-set-memoratoare-caiet-informatica/" target="blank" className="text-reset">
                                    Set Agendă Informatică
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p>
                                <MDBIcon icon="envelope" className="mb-4" />
                                <span className="fw-bold">Gmail:</span> antoniocrantea@gmail.com
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="mb-4" />
                                <span className="fw-bold">Yahoo:</span> thet0mmy@yhaoo.com
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            
            <div className="text-center p-4 fw-bold" style={{ backgroundColor: "#0000000d", color: "gray", position: "relative" }}>
                © {new Date().getFullYear()} Copyright | Crantea Antonio-Cristian, student la Facultatea de "Automatică și Calculatoare"
                <button style={{ background: "transparent", border: "none", position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)" }}>
                    <img src={Arrow} onClick={scrollToTop} style={{ width: "50px" }} alt="Arrow" />
                </button>
            </div>   
        </MDBFooter>
    );
}