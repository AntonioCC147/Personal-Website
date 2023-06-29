import { Accordion, Card, AccordionContext } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useContext } from 'react';

import FAQS from './faqData.json';

import plus from '../../assets/faq/Plus.png';
import minus from '../../assets/faq/Minus.png';

import '../../components/containers/text.css';
import './faq.css';

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
        <button
            type="button"
            className="my-accordion-button d-flex w-100"
            onClick={decoratedOnClick}
        >
            <img src={ isCurrentEventKey ? minus : plus } className="accordion-icon m-auto" alt="#"/>
            <div className='flex-grow-1 d-flex flex-row ps-3 text-start'>
                {children}
            </div>
        </button>
    );
  }

export default function FAQ() {
    return (
        <div className='m-auto faq-container'>
            <p className="faq-title">FAQ</p>
            <Accordion flush>
                {FAQS.map((faq, index) => {
                    return (
                        <Card key={index}
                            className={"p-0 m-3 border-white " + (index === 0 ? "border-top-0" : "")}>
                            <Card.Header>
                                <div className='d-flex flex-row p-1 pb-2'>
                                    <ContextAwareToggle eventKey={index + 1}>{faq.question}</ContextAwareToggle>
                                </div>                                
                            </Card.Header>
                            <Accordion.Collapse eventKey={index + 1}>
                                <Card.Body className="card-answer">{faq.response}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })}
            </Accordion>
        </div>
    );
}