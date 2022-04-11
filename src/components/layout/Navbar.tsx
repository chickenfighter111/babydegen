import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as Redirect } from "react-router-dom";

import logo from './coin-snake.png';

const MenuItems= [
    {
        title: "Introduction",
        cName: "nav-item",
        id: "introduction"
    },
    {
        title: "Roadmap",
        cName: "nav-item",
        id: "roadmap"
    },
    {
        title: "Tokenomics",
        cName: "nav-item",
        id: "tokenomics"
    },
    {
        title: "Team",
        cName: "nav-item",
        id: "team"
    },
    {
        title: "FAQ",
        cName: "nav-item",
        id: "faq"
    }

];



export default class MyNavbar extends Component {
    constructor(props:any) {
        super(props);
        this.state = {width: props.width};
      }
    
      componentWillMount(){
        this.setState({width: window.innerWidth + 'px'});
      }

    render(){
        return(
            <Navbar bg="dark" expand="lg">
            <Container>
             
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Brand href='/'>
                    <img
                    src={logo}
                    height={100}
                    width={100}
                    className="d-inline-block align-center"
                    alt="React Bootstrap logo"
                /></Navbar.Brand>
                <Nav className="me-auto">
                
                {MenuItems.map((item, idx) => {
                        return( 
                            <Nav.Link className={item.cName} key={idx} >
                                <Link
                                activeClass='active'
                                to={item.id}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                >
                                    {item.title}
                                </Link>
                            </Nav.Link >
                              )
                    })}
                </Nav>
                
              </Navbar.Collapse>
            </Container>
          </Navbar>



        )
    }
}