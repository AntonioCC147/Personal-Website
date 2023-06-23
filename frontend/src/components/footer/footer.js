import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { SocialIcon } from "react-social-icons";

import './footer.css';

export default function App() {
    return (
        <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted" style={{marginTop: "20px"}}>
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{alignItems: "center", verticalAlign: "center"}}>
                <div>
                    Get connected with us on social networks:
                </div>
                <div>
                    <SocialIcon url="https://github.com/AntonioCC147" target="_blank" network="github" bgColor="#ffffff" style={{width: "40px", height: "40px"}}/>{" "}
                    <SocialIcon url="https://www.instagram.com/antoniocc147" target="_blank" network="instagram" style={{width: "40px", height: "40px"}}/>{" "}
                    <SocialIcon url="https://www.facebook.com/antoniocc147" target="_blank" network="facebook" style={{width: "40px", height: "40px"}}/>
                </div>
            </section>

            <section>
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <MDBIcon icon="gem" className="me-3" />
                                Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                            <p>
                                <a href="#!" className="text-reset">
                                Angular
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                React
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                            <p>
                                <a href="#!" className="text-reset">
                                Pricing
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                Settings
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

            <div className="text-center p-4 fw-bold" style={{ backgroundColor: "#0000000d" }}>
                © {new Date().getFullYear()} Copyright | Crantea Antonio-Cristian, student la "Facultatea de Automatică și Calculatoare"
            </div>
        </MDBFooter>
    );
}