import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from 'react-bootstrap/Button';

import Icon from '../../assets/Icon.png';
import uk from '../../assets/icons/uk.png';
import ro from '../../assets/icons/ro.png';

import './navbar.css';

export default function NavbarHeader({language, setLanguage}) {
    const currentPath = window.location.pathname;

    const isCurrentPage = (path) => {
        return currentPath === path ? "bold-text" : "nav-text";
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="xl" variant="dark" fixed="top" style={{background: "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)", marginBottom: '50px', minHeight: "75px"}}>
                <Container>
                    <Navbar.Brand><a href="/"><img src={Icon} alt="Icon" style={{width: "35px"}}/></a></Navbar.Brand>
                    <Navbar.Brand style={{fontWeight: "bold"}} href="/">
                        <span style={{fontSize: "25px"}}>&lt; A</span>ntonio <span style={{fontSize: "25px"}}>C</span>rantea<span style={{fontSize: "25px"}}> /&gt;</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbarCenter">
                            {language ==="RO" && ( <Nav.Link href="/" className={isCurrentPage('/')}>Acasă</Nav.Link> )}
                            {language ==="UK" && ( <Nav.Link href="/" className={isCurrentPage('/')}>Home</Nav.Link> )}
                            {language ==="RO" && ( <Nav.Link href="/despremine" className={isCurrentPage('/despremine')}>Despre mine</Nav.Link> )}
                            {language ==="UK" && ( <Nav.Link href="/despremine" className={isCurrentPage('/despremine')}>About me</Nav.Link> )}
                            {language ==="RO" && ( <Nav.Link href="/portofoliu" className={isCurrentPage('/portofoliu')}>Portofoliu</Nav.Link> )}
                            {language ==="UK" && ( <Nav.Link href="/portofoliu" className={isCurrentPage('/portofoliu')}>Portofolio</Nav.Link> )}
                            {language ==="RO" && ( <Nav.Link href="/meditatii" className={isCurrentPage('/meditatii')}>Meditații</Nav.Link> )}
                            {language ==="UK" && ( <Nav.Link href="/meditatii" className={isCurrentPage('/meditatii')}>Mentoring</Nav.Link> )}
                            {language ==="RO" && (
                                <NavDropdown title="Algoritmi" id="basic-nav-dropdown" className="nav-dropdown-text">
                                    <NavDropdown.Item href="/pseudocod" className={`${isCurrentPage('/pseudocod')} navbarDropdopownText`}>Pseudocod</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                    <NavDropdown.Item href="/cpp" className={`${isCurrentPage('/cpp')} navbarDropdopownText`}>C++</NavDropdown.Item>
                                </NavDropdown>
                            )}
                            {language ==="UK" && (
                                <NavDropdown title="Algorithms" id="basic-nav-dropdown" className="nav-dropdown-text">
                                    <NavDropdown.Item href="/pseudocod" className={`${isCurrentPage('/pseudocod')} navbarDropdopownText`}>Pseudocod</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                    <NavDropdown.Item href="/cpp" className={`${isCurrentPage('/cpp')} navbarDropdopownText`}>C++</NavDropdown.Item>
                                </NavDropdown>
                            )}
                            <Nav.Link href="/contact" className={isCurrentPage('/atestate')}>Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            {language === "RO" && (
                                <Button variant="outline-light" onClick={() => setLanguage("UK")}>
                                    <img src={uk} style={{width: "20px"}} alt="UK"/>{' '}UK
                                </Button>
                            )}
                            {language ==="UK" && (
                                <Button variant="outline-light" onClick={() => setLanguage("RO")}>
                                    <img src={ro} style={{width: "20px"}} alt="RO"/>{' '}RO
                                </Button>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ paddingTop: "50px" }}/>
      </div>
    )
}