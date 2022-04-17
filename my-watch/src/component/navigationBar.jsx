import React from "react";
import {
    Navbar,
    Nav,
    Dropdown,
    Button,
    Image
} from 'react-bootstrap'
import { LOGO } from '../asset'
import {Link} from 'react-router-dom'
class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar fixed='top' className="px-5" style={styles.navbar} expand="lg">
                <Navbar.Brand href="#home">
                    <Image src={LOGO} style={styles.image} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={styles.navlink}>Home</Nav.Link>
                        <Nav.Link href="#home" style={styles.navlink}>Product</Nav.Link>
                        <Nav.Link href="#home" style={styles.navlink}>Contact Us</Nav.Link>
                    </Nav>
                    <Button variant="outline-light" ><i class="fas fa-shopping-cart"></i></Button>
                    <Dropdown style={{ marginLeft: '10px' }}>
                        <Dropdown.Toggle style={styles.button} id="dropdown-basic">
                            Username
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/Login" >Login</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/Register" >Register</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const styles = {
    navbar: {
        backgroundColor: '#000000',
    },
    button: {
        backgroundColor: '#e0f2f1',
        border: 'none',
        color: 'black'
    },
    image: {
        height: '70px'
    },
    navlink: {
        color: 'white'
    }
}

export default NavigationBar