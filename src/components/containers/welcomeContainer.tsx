import { Container, Row, Col } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import React,{ Component } from 'react';
import { Link } from "react-router-dom";

class WelcomeContainer extends Component{



    render(){
        return(
                <Container id="welcome">
                    <Row>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Welcome to SsS NFT!</h2>
                        </Col>
                    </Row>
                    <Row>
                    <MDBBtn rounded color='dark'>
                        <Link className='mintLink' to="/mint" >Mint coming soon !</Link>
                    </MDBBtn>
                    </Row>
                </Container>
        )
    }
}

export default (WelcomeContainer);