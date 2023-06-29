import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './header.css';

export default function NavbarHeader() {
    const currentPath = window.location.pathname;

    const isCurrentPage = (path) => {
        return currentPath === path ? 'bold-text' : 'nav-text';
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header-text">
            <Container fluid>
                <Navbar.Brand style={{fontWeight: "bold"}}>Antonio Crantea</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" className={isCurrentPage('/')}>Acasă</Nav.Link>

                    <Nav.Link href="/despremine" className={isCurrentPage('/despremine')}>Despre mine</Nav.Link>

                    <Nav.Link href="/portofoliu" className={isCurrentPage('/portofoliu')}>Portofoliu</Nav.Link>

                    <Nav.Link href="/meditatii" className={isCurrentPage('/meditatii')}>Meditații</Nav.Link>

                    <Nav.Link href="/atestat" className={isCurrentPage('/atestat')}>Atestate</Nav.Link>

                    <NavDropdown className="colorForDropdown" title="Informatică" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/clasaix" className={isCurrentPage('/clasaix')}><span style={{color: "black"}}>Clasa a IX-a</span></NavDropdown.Item>
                        <NavDropdown.Item href="/clasax" className={isCurrentPage('/clasax')}><span style={{color: "black"}}>Clasa a X-a</span></NavDropdown.Item>
                        <NavDropdown.Item href="/clasaxi" className={isCurrentPage('/clasaxi')}><span style={{color: "black"}}>Clasa a XI-a</span></NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item href="/atestat" className={isCurrentPage('/atestat')}><span style={{color: "black"}}>Atestat</span></NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/compileaza" className={isCurrentPage('/compileaza')}>Compilează</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/contact" className={isCurrentPage('/contact')}>Contact</Nav.Link>
                    <Nav.Link eventKey={2} href="/admin">Admin</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}