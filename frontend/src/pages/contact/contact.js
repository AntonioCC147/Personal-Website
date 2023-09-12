import React, { useState } from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Modal } from 'react-bootstrap';

import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

import ContactImg from '../../assets/icons/Contact.png';

import '../../components/containers/text.css';
import './contact.css';

const styles = {
    error: {
        color: "red",
        fontStyle: "italic",
        fontWeight: "bold",
    },
};
  
const validationSchemaRO = Yup.object().shape({
    user_name: Yup.string().required(<span style={styles.error}>Numele este obligatoriu</span>),
    user_email: Yup.string().email(<span style={styles.error}>Adresa de email este invalidă</span>).required(<span style={styles.error}>Adresa de email este obligatorie</span>),
    message: Yup.string().required(<span style={styles.error}>Mesajul este obligatoriu</span>),
});

const validationSchemaUK = Yup.object().shape({
    user_name: Yup.string().required(<span style={styles.error}>Name is required</span>),
    user_email: Yup.string().email(<span style={styles.error}>Invalid email address</span>).required(<span style={styles.error}>Email address is required</span>),
    message: Yup.string().required(<span style={styles.error}>Message is required</span>),
});

export default function Contact({language}) {
    const [isVerify, setIsVerify] = React.useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const sendEmail = (values) => {
        emailjs.send('service_8ikvw41', 'template_2o06wrp', values, 'wgJFpA_4E1G_XA6V-')
            .then((result) => {
                console.log(result.text);
                setIsFormSubmitted(true);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    function onChange(value) {
        setIsVerify(true);
    }
    const handleModalShow = () => {
        setShowModal(true);
    };
    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <Container>
            {language === "RO" && ( <p className="title">&lt; Contactează-mă /&gt;</p> )}
            {language === "UK" && ( <p className="title">&lt; Contact me /&gt;</p> )}
            {language === "RO" && ( <p className="subTitle">Dacă dorești să mă contactezi într-un mod cât mai ușor și rapid, poți completa formularul de mai jos</p> )}
            {language === "UK" && ( <p className="subTitle">If you want to contact me in the easiest and fastest way possible, you can fill out the form below</p> )}
            <Formik
                initialValues={{
                    user_name: '',
                    user_email: '',
                    user_phone: '',
                    message: '',
                }}
                validationSchema={language === "RO" ? validationSchemaRO : validationSchemaUK}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (!isVerify || !values.user_name || !values.user_email || !values.message) {
                        setSubmitting(false);
                        return;
                    }
                    sendEmail(values);
                    resetForm();
                    handleModalShow();
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="contactContainer">
                        <div className="text-center">
                            <img src={ContactImg} style={{ width: '300px' }} alt="Contact" />
                        </div>
                        <Row>
                            <Col sm={6}>
                                <Row>
                                    {language === "RO" && ( <b><label htmlFor="message">Nume:</label></b> )}
                                    {language === "UK" && ( <b><label htmlFor="message">Name:</label></b> )}
                                    <Field type="text" name="user_name" className="form-control formAppearance field" placeholder="Popescu Ion" />
                                    <ErrorMessage name="user_name" component="div" className="error-message" />
                                    
                                    <b><label htmlFor="message">Email:</label></b>
                                    <Field type="email" name="user_email" className="form-control formAppearance" placeholder="popescu.ion@gmail.com"/>
                                    <ErrorMessage name="user_email" component="div" className="error-message" />

                                    {language === "RO" && ( <b><label htmlFor="message">Telefon (opțional, dar necesar dacă doriți meditații):</label></b> )}
                                    {language === "UK" && ( <b><label htmlFor="message">Phone (optional, but necessary if you want mentoring):</label></b> )}
                                    <Field type="text" name="user_phone" className="form-control formAppearance" placeholder="07 . . ."/>
                                </Row>
                                <Row>
                                    <div className="CAPTCHA">
                                        <ReCAPTCHA sitekey="6Ld28-cmAAAAAKRfgFLPJxEhXCATclZrFpk1gZKP" onChange={onChange} />
                                    </div>
                                </Row>
                            </Col>
                            <Col sm={6}>
                                {language === "RO" && ( <b><label htmlFor="message">Mesaj:</label></b> )}
                                {language === "UK" && ( <b><label htmlFor="message">Message:</label></b> )}
                                {language === "RO" && ( <Field as="textarea" name="message" className="form-control formAppearance" rows="10" cols="50" placeholder="Scrie aici mesajul..."/> )}
                                {language === "UK" && ( <Field as="textarea" name="message" className="form-control formAppearance" rows="10" cols="50" placeholder="Write here the message..."/> )}    
                                <ErrorMessage name="message" component="div" className="error-message" />
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <div className="buttonContainer">
                                <Button
                                    variant="dark"
                                    type="submit"
                                    className="d-flex align-items-center justify-content-center contactButton"
                                    disabled={isSubmitting || isFormSubmitted}
                                >
                                    {language === "RO" && (isFormSubmitted ? 'Dellay' : 'Trimite')}
                                    {language === "UK" && (isFormSubmitted ? 'Dellay' : 'Send')}
                                </Button>
                            </div>
                        </Row>
                        <Modal show={showModal} onHide={handleModalClose}>
                            <Modal.Header closeButton>
                                {language === "RO" && ( <Modal.Title>Email trimis!</Modal.Title> )}
                                {language === "UK" && ( <Modal.Title>Email sent!</Modal.Title> )}
                            </Modal.Header>
                            {language === "RO" && (
                                <Modal.Body>
                                    <p>Email-ul a fost trimis cu succes!</p>
                                    <p>În cel mai scurt timp posibil veți primi un răspuns la mesaj.</p>
                                </Modal.Body>
                            )}
                            {language === "UK" && (
                                <Modal.Body>
                                    <p>The email has been sent successfully!</p>
                                    <p>You will receive a response to your message as soon as possible.</p>
                                </Modal.Body>
                            )}
                            <Modal.Footer>
                                {language === "RO" && (<Button variant="secondary" onClick={handleModalClose}>Închide</Button> )}
                                {language === "UK" && (<Button variant="secondary" onClick={handleModalClose}>Close</Button> )}
                            </Modal.Footer>
                        </Modal>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
