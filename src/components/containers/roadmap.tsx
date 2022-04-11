import { Component } from 'react';
import { Container, Card, ListGroup, Row } from 'react-bootstrap';

const RoadMapItems= [
    {
        title: "OPERATION 1",
        items: [
            "Date: Late February",
            "Launch of the Snake Secret Service socials ( twitter, discord)",
            "Release 444 snakes on the Solana blockchain.",
            "Launch of the DAO :  Involve the DAO for voting our next collection; Vote for alpha’s hunters; Others Utilities through the DAO will be voted.",
        ]
    }, 
    {
        title: "OPERATION 2 ",
        items: [
            "Launch token : $VIPER",
            "Breeding",
            "Staking",
            "Merchandise",
            "1/1 Auction",
        ]
    },
    {
        title: "OPERATION 3 ",
        items: [
            "Multi Chain operation: ",
            "We are going to expand our brand through other blockchain and be the number 1 alpha hunter on each blockchain (This is a hint for our marketplace.)",
            "Luna-Near-Egld-Solana , this is our target.",
            "Each blockchain collection will have their own games.",
            "Each blockchain will have their own ecosystem."
        ]
    }, 
    {
        title: "OPERATION 4 ",
        items: [
            "Create MultiVerseDAO: ",
            "The DAO will vote for future utilities on each blockchain",
            "Access to the MultiVerseDAO will give you the best Alpha on each blockchain.",
            "Launch $VIPER token on Raydium"
        ]
    },
    {
        title: "OPERATION 5 ",
        items: [
            "Marketplace ",
        ]
    },  


];

 export default class RoadMap extends Component<any>{
        constructor(props:any) {
            super(props)
            this.state = { matches: window.matchMedia("(max-width: 800px)").matches };
        }
        
        componentDidMount() {
            const handler = (e:any) => this.setState({matches: e.matches});
            window.matchMedia("(max-width: 800px)").addEventListener('change', handler);
        }


        render(){
            return(
                <Container id="roadmap" className="roadmap-container">  
                <Row>
                    <h2>Roadmap</h2>  
                 </Row>
                <Container>
                     <Row>
                        {RoadMapItems.map((item, idx) => {
                                 return(
                                    <Card className= 'roadCard col' key={idx}>
                                        <Card.Body >
                                            <Card.Title><h5>{item.title}</h5></Card.Title>
                                            <Card.Text as="div">
                                            <ListGroup>
                                                {item.items.map((string) => {
                                                    return(<ListGroup.Item >{string}</ListGroup.Item>)
                                                })}
                                            </ListGroup>
        
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                     )
                             })}
                    </Row>
                            
                </Container> 
                </Container>

            )
          }
    }