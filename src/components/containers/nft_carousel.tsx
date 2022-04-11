import { Container, Carousel, Row, Col } from 'react-bootstrap';
import { Component } from 'react';
import c from './static/media/c2.png';
import c2 from './static/media/c3.png';
import c3 from './static/media/c4.png';
import c4 from './static/media/c5.png';
import c5 from './static/media/c6.png';
import c6 from './static/media/c7.png';


const CarouselItems= [
    {
        image: c
    }, 
    {
        image: c2
    }, 
    {
        image: c3
    }, 
    {
        image: c4
    },     {
        image: c5
    },     {
        image: c6
    }, 

];

class NFTCarousel extends Component{

    render(){
        return(
            <Container>
                <Container>
                <Row>
                        <Col className='sneakpeeksCol'>
                        <Container className="mediaContainer NFT_Carousel sneakpeeksCol">
                        <Carousel fade={true} interval={1000} indicators={false}>
                        {CarouselItems.map((item, idx) => {
                                        return( 
                                            <Carousel.Item>
                                                <img
                                                className="d-block w-100"
                                                src={item.image}
                                                alt="First slide"
                                                />
                                            </Carousel.Item>
                                            )
                                    })}
                            
                        </Carousel>
                        </Container>
                        </Col>
                    </Row>
                    
                <Carousel className='carouselContent' fade indicators={false} controls={false} wrap={true} interval={4000}>
                        <Carousel.Item>

                        </Carousel.Item>
                        <Carousel.Item>
                   
                        </Carousel.Item>
                    </Carousel>  
                </Container>
            </Container>
            
        )
    }
}

export default (NFTCarousel);