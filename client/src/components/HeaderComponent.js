import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
library.add(fab);

const HeaderComponent = () => {
    return (
        <div id='HeaderComponent'>
            <Navbar className="navbar-dark">
                <Navbar.Brand href="#home"><img src={require("../img/orgboom-logo.png")} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="https://facebook.com/orgboom"><FontAwesomeIcon icon={["fab", "facebook-f"]} id='icon'/></Nav.Link>
                        <Nav.Link href="https://twitter.com/orgboom_tech"><FontAwesomeIcon icon={["fab", "twitter"]} id='icon'/></Nav.Link>
                        <Nav.Link href="#home" className="disabled"><FontAwesomeIcon icon={["fab", "instagram"]} id='icon' /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="text-center">  
                <h1 style={{
                    fontWeight: "",
                    color: "#1ABC9C",
                    marginTop: "10px"
                }}>Why Should You Partner With Us ?</h1>
                <h4>We are only looking out for your best interest</h4>
            </div>
            
        </div>
    )
}

export default HeaderComponent;