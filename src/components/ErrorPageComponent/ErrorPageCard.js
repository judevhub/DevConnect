import React from 'react';
import { Card, Button } from 'react-bootstrap';
import error404 from '../../assets/svg/error404.svg';



function ErrorPageCard() {
    return (
        <Card className="text-center">
            <Card.Header>Error 404</Card.Header>
            <Card.Text>{'       '}</Card.Text>
            <Card.Text>{'       '}</Card.Text>
            <Card.Img variant="top" src={error404} height="300"/>
            <Card.Body>
                <Card.Title>The Content you are looking for is missing</Card.Title>
                <Card.Text>
                    It maybe a mistake of mine, if you feel that it is a mistake please raise your concern via email
                </Card.Text>
                <Button variant="primary" href="/">Back to Home</Button>
            </Card.Body>

        </Card>

    );
}

export default ErrorPageCard;