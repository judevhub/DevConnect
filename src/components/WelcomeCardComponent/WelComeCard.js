import React from 'react';
import { Card, Button ,Row,Col} from 'react-bootstrap';
import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy';



function WelcomeCard() {
    return (
        <Card>
            <Card.Header>See our Events</Card.Header>
            <Row>
                <Col xs='12' md='6'>
                    <Card.Body>
                        <Card.Title>All our Events at a same place</Card.Title>
                        <Card.Text>
                            Change is the major constant. With transience, the traditional approach is set to reform. 
                            We aim to weave a sprawling community to discover and reimagine technology for a better world.
                        </Card.Text>
                        <Button variant="primary">Join our Community</Button>
                    </Card.Body>
                </Col>
                <Col xs='12' md='6'>
                    <br/>
                        <VideoContainer>
                            <div className='player-wrapper'>
                                <ReactPlayer 
                                    url='https://youtu.be/cRxbgFaAHf8'
                                    controls='true'
                                    width="100%"
                                    height="100%"
                                    className='react-player'
                                />
                            </div>
                        </VideoContainer>
                    <br/>
                </Col>
            </Row> 
            
            
        </Card>

    );
}

export default WelcomeCard;

const VideoContainer = styled.div`
.player-wrapper {
    position: relative;
    padding-top: 56.25%;
    margin-right:10px;
    margin-left:10px;
}
.react-player {
    position: absolute;
    top: 0;
    left: 0;
}

`;