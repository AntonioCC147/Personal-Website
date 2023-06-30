import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../components/containers/text.css';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8ikvw41', 'template_2o06wrp', form.current, 'wgJFpA_4E1G_XA6V-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <Container className="text-center">
            <p className="title">Contactează-mă</p>
            <form ref={form} onSubmit={sendEmail} className="white-background">
                <Row>
                    <Col sm={6}>
                        <label>Name</label>
                            <input type="text" name="user_name"/><br/>
                        <label>Email</label>
                            <input type="email" name="user_email"/>
                    </Col>
                    <Col sm={6}>
                        <label>Message</label>
                            <textarea name="message"/>
                    </Col>
                </Row>
                <input type="submit" value="Send"/>
            </form>
        </Container>
    )
}