import { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import  pp  from './static/media/team/pp1.gif';
import  pp1  from './static/media/team/pp2.png';
import  pp2  from './static/media/team/pp3.png';
import  pp3  from './static/media/team/pp4.png';
import  pp4  from './static/media/team/pp5.png';


const TeamMembers= [
    {
        name: "Lord Snake#4716",
        role: "Team",
        pp: pp
    }, 
    {
        name: " RayK1ng#1248",
        role: "Team",
        pp: pp1
    }, 
    {
        name: "cryptonoodles#4687",
        role: "Dev",
        pp: pp2
    },
    {
        name: "AlexScotch#0472",
        role: "Dev",
        pp: pp3
    },
    {
        name: "Sergan.SOL#9391",
        role: "Dev",
        pp: pp4
    }
];


  export default  class Team extends Component{
        render(){
            return(
                <div className='introContainer'>
                <Container id="team">   
                    <h2>Team</h2>         
                    <Container >
                        <Container>
                            <Row>
                                    {TeamMembers.map((item, idx) => {
                                        return( 
                                            <Col style={{ width: '18rem', margin: 'auto'}}>
                                                <Card className='teamCard'  key={idx}>
                                                    <Card.Img variant="top" src={item.pp}  width={288} height={288}/>
                                                    <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{item.role}</Card.Subtitle>
                                                </Card.Body>
                                                </Card>
                                            </Col>
                                            )
                                    })}    
                            </Row>
                        </Container>
                       
                    </Container> 
                </Container>
                </div>

            )
          }
    }


