import { Container, Row } from 'react-bootstrap';
import { Component } from 'react';
import {
    MDBFooter,
    MDBContainer,
  } from 'mdb-react-ui-kit';
  import logo from './layout/coin-snake.png';
  import { Link as Redirect } from "react-router-dom";



class Footer extends Component{

    render(){
        return(
            <Container className='footerContainer'>
                <MDBFooter className='text-center text-white' style={{ backgroundColor: '#353535' }}>
                    <MDBContainer className='pt-4'>
                        <Row>
                        <a href='/'>
                        <img
                            src={logo}       
                            alt="React Bootstrap logo"
                            style={{ margin: 'auto', width:'200px', height:'200px'}}
                        /></a>
                        
                        </Row>
 
                    </MDBContainer>

                    <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                        
                         <a className='text-dark' href='/'>
                          SsS NFT
                        </a>
                    </div>
                </MDBFooter>
            </Container>
        )
    }
}




export default (Footer);