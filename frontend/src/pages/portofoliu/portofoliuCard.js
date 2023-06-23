import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function PortofoliuCard(props) {
    const { img, title, description, git, adress } = props;

    return (
        <div className="d-flex justify-content-around" bgColor="dark">
            <Card style={{ margin: '10px', width: '20rem', height: 'auto', background: '' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div className="d-flex justify-content-between">
                        <Button variant="secondary" href={git} target="_blank">GitHub</Button>
                        <Button variant="danger" href={adress} target="_blank">Link to Project</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
