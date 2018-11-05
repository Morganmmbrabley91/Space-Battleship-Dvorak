import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import GameMenu from './GameMenu.jsx';
import GameScore from './GameScore.jsx';
import GameLives from './GameLives.jsx';
import DvorakKeyboard from './DvorakKeyboard.jsx';
import Spaceship from './spaceship'
import './App.css';

class App extends Component {

    render() {
        return (
            <Container>
                <Row className='h100'>
                    <Col className='leftSide h100' style={{paddingTop: '16px', marginRight:'40px',}}>
                        <Spaceship />
                    </Col>
                    <Col className='rightSide'>
                        <Row>
                            <Col><GameMenu/></Col>
                        </Row>
                        <Row>
                            <Col><GameScore/></Col>
                            <Col><GameLives/></Col>
                        </Row>
                        <Row className=''>
                            <Col><hr/></Col>
                        </Row>
                        <Row className=''>
                            <Col><DvorakKeyboard/></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default App;
