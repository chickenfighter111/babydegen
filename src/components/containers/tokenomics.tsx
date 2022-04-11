import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import img from './static/media/toko.png';

export default class Tokenomics extends Component<any>{

    render(){
        return(
            <Container id="tokenomics">  
            <Row>
                <h2>Tokenomics</h2>  
             </Row>
            <Container>
                <img src={img} >
                    </img> 
                
            </Container> 
            </Container>

        )
      }
}