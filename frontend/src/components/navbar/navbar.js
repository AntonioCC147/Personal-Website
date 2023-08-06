import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Icon from '../../assets/Icon.png';

import './navbar.css';

export default function NavbarHeader() {
    const currentPath = window.location.pathname;

    const isCurrentPage = (path) => {
        return currentPath === path ? "bold-text" : "nav-text";
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="xl" variant="dark" fixed="top" style={{background: "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)", marginBottom: '50px', height: "75px"}}>
                <Container>
                    <Navbar.Brand><a href="/"><img src={Icon} alt="Icon" style={{width: "35px"}}/></a></Navbar.Brand>
                    <Navbar.Brand style={{fontWeight: "bold"}} href="/">
                        <span style={{fontSize: "25px"}}>A</span>ntonio <span style={{fontSize: "25px"}}>C</span>rantea
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbarCenter">
                            <Nav.Link href="/" className={isCurrentPage('/')}>Acasă</Nav.Link>
                            <Nav.Link href="/despremine" className={isCurrentPage('/despremine')}>Despre mine</Nav.Link>
                            <Nav.Link href="/portofoliu" className={isCurrentPage('/portofoliu')}>Portofoliu</Nav.Link>
                            <Nav.Link href="/meditatii" className={isCurrentPage('/meditatii')}>Meditații</Nav.Link>
                            <NavDropdown title="Algoritmi" id="basic-nav-dropdown" className="nav-dropdown-text">
                                <NavDropdown.Item href="/pseudocod" className={`${isCurrentPage('/pseudocod')} navbarDropdopownText`}>Pseudocod</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                <NavDropdown.Item href="/cpp" className={`${isCurrentPage('/cpp')} navbarDropdopownText`}>C++</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact" className={isCurrentPage('/atestate')}>Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login" className={isCurrentPage('/login')} style={{fontSize: "18px"}} disabled>Login</Nav.Link>
                            <Nav.Link href="/register" className={isCurrentPage('/register')} style={{fontSize: "18px"}} disabled>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ paddingTop: "50px" }}/>
      </div>
    )
}