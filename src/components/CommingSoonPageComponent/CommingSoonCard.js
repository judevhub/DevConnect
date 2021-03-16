import React from 'react';
import { Card, Button } from 'react-bootstrap';
import comingsoon from '../../assets/svg/comingsoon.svg';



function CommingSoonCard() {
    return (
        <Card className="text-center">
            <Card.Header>Sorry this page is not built yet</Card.Header>
            <Card.Text>{'       '}</Card.Text>
            <Card.Img variant="top" src={comingsoon} height="300"/>
            <Card.Body>
                <Card.Title>I am making this page , please wait sometime</Card.Title>
                <Card.Text>
                If you feel that it is a mistake please raise your concern via email
                </Card.Text>
                <Button variant="primary" href="/">Back to Home</Button>
            </Card.Body>

        </Card>

    );
}

export default CommingSoonCard;