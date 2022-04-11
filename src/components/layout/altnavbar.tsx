import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as Redirect } from "react-router-dom";

import logo from './coin-snake.png';

const MenuItems= [
    {
        title: "Homepage",
        cName: "nav-item",
        url:"/",
        id: "welcome"
    }
];



export default class MyNavbar extends Component {
    render(){
        return(
            
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                {MenuItems.map((item, idx) => {
                        return( 
                            <Nav.Link className={item.cName} key={idx} >
                                <Redirect to={item.url}>{item.title}</Redirect>
                            </Nav.Link >
                              )
                    })}
                <Nav>
                    <Nav.Link className='nav-item nav-icon' href='https://twitter.com/SSnakeSnft'>
                        <a className="logo-item fab fa-twitter fa-2x" ></a>
                    </Nav.Link>
                    <Nav.Link className='nav-item nav-icon' href='https://discord.gg/aj75zs8AsG'>
                        <a className=" logo-item fab fa-discord fa-2x" ></a>
                    </Nav.Link>
                </Nav>


                </Nav>
                </Navbar.Collapse>
                <div className='nav-logo'><a href='/' >
                    <img
                    src={logo}
                    height={200}
                    width={200}
                    className="d-inline-block align-center"
                    alt="React Bootstrap logo"
                /></a>
                </div>
                
                
                
                </Container>
            </Navbar>



        )
    }
}