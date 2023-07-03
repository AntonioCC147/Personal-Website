import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { SocialIcon } from "react-social-icons";

export default function App() {
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
                                <a href="https://edeea.ro/" target="blank" className="text-reset">
                                Agendă Informatică
                                </a>
                            </p>
                            <p>
                                <a href="https://edeea.ro/" target="blank" className="text-reset">
                                Set Agendă Informatică
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="mb-4" />
                                <span className="fw-bold">Discord:</span> thetommy
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="mb-4" />
                                <span className="fw-bold">Mail:</span> thet0mmy1407@gmail.com
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className="text-center p-4 fw-bold" style={{ backgroundColor: "#0000000d", color: "gray" }}>
                © {new Date().getFullYear()} Copyright | Crantea Antonio-Cristian, student la "Facultatea de Automatică și Calculatoare"
            </div>
        </MDBFooter>
    );
}