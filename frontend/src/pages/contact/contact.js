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

const validationSchema = Yup.object().shape({
    user_name: Yup.string().required('Numele este obligatoriu'),
    user_email: Yup.string().email('Adresa de email este invalidă').required('Adresa de email este obligatorie'),
    message: Yup.string().required('Mesajul este obligatoriu'),
});

export default function Contact() {
    const [isVerify, setIsVerify] = React.useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const sendEmail = (values) => {
        emailjs.send('service_8ikvw41', 'template_2o06wrp', values, 'wgJFpA_4E1G_XA6V-')
            .then((result) => {
                console.log(result.text);
                // Set form submitted to true after successfully sending the email
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
            <p className="title">Contactează-mă</p>
            <p className="subTitle">Dacă dorești să mă contactezi într-un mod cât mai ușor și rapid, poți completa formularul de mai jos</p>
            <Formik
                initialValues={{
                    user_name: '',
                    user_email: '',
                    message: '',
                }}
                validationSchema={validationSchema}
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
                                    <label htmlFor="user_name">Nume:</label>
                                    <Field type="text" name="user_name" className="form-control" />
                                    <ErrorMessage name="user_name" component="div" className="error-message" />
                                    <label htmlFor="user_email">Email:</label>
                                    <Field type="email" name="user_email" className="form-control" />
                                    <ErrorMessage name="user_email" component="div" className="error-message" />
                                </Row>
                                <Row>
                                    <div className="CAPTCHA">
                                        <ReCAPTCHA sitekey="6Ld28-cmAAAAAKRfgFLPJxEhXCATclZrFpk1gZKP" onChange={onChange} />
                                    </div>
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <label htmlFor="message">Mesaj:</label>
                                <Field as="textarea" name="message" className="form-control" rows="8" cols="50" />
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
                                    {isFormSubmitted ? 'Trimite' : 'Trimite'}
                                </Button>
                            </div>
                        </Row>
                        <Modal show={showModal} onHide={handleModalClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Email trimis!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Email-ul a fost trimis cu succes!</p>
                                <p>În cel mai scurt timp posibil veți primi un răspuns la mesaj.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleModalClose}>Închide</Button>
                            </Modal.Footer>
                        </Modal>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
