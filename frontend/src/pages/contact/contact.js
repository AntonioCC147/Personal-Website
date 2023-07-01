import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/esm/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactImg from '../../assets/icons/Contact.png';

import '../../components/containers/text.css';
import './contact.css';

const validationSchema = Yup.object().shape({
    user_name: Yup.string().required('Numele este obligatoriu'),
    user_email: Yup.string().email('Adresa de email este invalidă').required('Adresa de email este obligatorie'),
    message: Yup.string().required('Mesajul este obligatoriu'),
});
  
export default function Contact() {
    const sendEmail = (values) => {
        emailjs.send('service_8ikvw41', 'template_2o06wrp', values, 'wgJFpA_4E1G_XA6V-')
        .then((result) => {
            console.log(result.text);
        })
        .catch((error) => {
            console.log(error.text);
        });
    };
  
    return (
        <Container className="text-center">
            <p className="title">Contactează-mă</p>
            <Formik
                initialValues={{
                    user_name: '',
                    user_email: '',
                    message: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    sendEmail(values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="contactContainer">
                        <img src={ContactImg} style={{width: "300px"}} alt="Contact"/>
                        <Row>
                            <Col sm={6}>
                                <label htmlFor="user_name">Nume:</label>
                                <Field type="text" name="user_name" className="form-control" />
                                <ErrorMessage name="user_name" component="div" className="error-message" />
                                <label htmlFor="user_email">Email:</label>
                                <Field type="email" name="user_email" className="form-control" />
                                <ErrorMessage name="user_email" component="div" className="error-message" />
                            </Col>
                            <Col sm={6}>
                                <label htmlFor="message">Mesaj:</label>
                                <Field
                                    as="textarea"
                                    name="message"
                                    className="form-control"
                                    rows="5"
                                    cols="50"
                                />
                                <ErrorMessage name="message" component="div" className="error-message" />
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <div className="buttonContainer">
                                <Button variant="dark" type="submit" className="d-flex align-items-center justify-content-center contactButton" disabled={isSubmitting}>
                                    Send
                                </Button>
                            </div>
                        </Row>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}