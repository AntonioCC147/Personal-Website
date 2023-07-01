import React from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

    const sendEmail = (values) => {
        emailjs.send('service_8ikvw41', 'template_2o06wrp', values, 'wgJFpA_4E1G_XA6V-')
        .then((result) => {
            console.log(result.text);
        })
        .catch((error) => {
            console.log(error.text);
        });
    };

    function onChange(value) {
        console.log("Captcha value: ", value);
        setIsVerify(true);
    }

  return (
        <Container>
            <p className="title">Contactează-mă</p>
            <Formik
                initialValues={{
                user_name: '',
                user_email: '',
                message: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                if (!isVerify || !values.user_name || !values.user_email || !values.message) {
                    setSubmitting(false);
                    return;
                }

                sendEmail(values);
                setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="contactContainer">
                        <div className="text-center">
                            <img src={ContactImg} style={{ width: "300px" }} alt="Contact" />
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
                                        <ReCAPTCHA
                                            sitekey="6Ld28-cmAAAAAKRfgFLPJxEhXCATclZrFpk1gZKP"
                                            onChange={onChange}
                                        />
                                    </div>
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <label htmlFor="message">Mesaj:</label>
                                <Field
                                    as="textarea"
                                    name="message"
                                    className="form-control"
                                    rows="8"
                                    cols="50"
                                />
                                <ErrorMessage name="message" component="div" className="error-message" />
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <div className="buttonContainer">
                                <Button variant="dark" type="submit" className="d-flex align-items-center justify-content-center contactButton" disabled={isSubmitting}>
                                    Trimite
                                </Button>
                            </div>
                        </Row>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
