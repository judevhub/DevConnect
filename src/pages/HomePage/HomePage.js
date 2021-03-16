import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { WelcomeCard } from '../../components';
import { WelcomeSection } from './styles';


class HomePage extends React.Component {



    render() {

        return (
            <div>
                <WelcomeSection>
                    <div className="maincard">
                        <Row className="justify-content-md-center">
                            <Col>
                                <WelcomeCard />
                            </Col>
                        </Row>
                    </div>
                </WelcomeSection>
            </div>
        );
    }
}


export default HomePage;
