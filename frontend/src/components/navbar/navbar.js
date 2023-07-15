import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Icon from '../../assets/Icon.png';

import './navbar.css';

export default function NavbarHeader() {
    const currentPath = window.location.pathname;

    const isCurrentPage = (path) => {
        return currentPath === path ? 'bold-text' : 'nav-text';
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={{marginBottom: '50px'}}>
                <Container>
                    <Navbar.Brand><a href="/"><img src={Icon} alt="Icon" style={{width: "35px"}}/></a></Navbar.Brand>
                    <Navbar.Brand style={{fontWeight: "bold"}} href="/">Antonio Crantea</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className={isCurrentPage('/')}>Acasă</Nav.Link>
                        <Nav.Link href="/despremine" className={isCurrentPage('/despremine')}>Despre mine</Nav.Link>
                        <Nav.Link href="/portofoliu" className={isCurrentPage('/portofoliu')}>Portofoliu</Nav.Link>
                        <Nav.Link href="/meditatii" className={isCurrentPage('/meditatii')}>Meditații</Nav.Link>
                        <Nav.Link href="/atestate" className={isCurrentPage('/atestate')}>Atestate</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/contact" className={isCurrentPage('/contact')}>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ paddingTop: "50px" }}/>
      </div>
    )
}

//<Nav.Link href="/algoritmi" className={isCurrentPage('/algoritmi')}>Algoritmi</Nav.Link>