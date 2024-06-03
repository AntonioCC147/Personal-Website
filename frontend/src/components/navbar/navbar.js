import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
        <Navbar collapseOnSelect expand="xxl" variant="dark" fixed="top" style={{background: "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)", marginBottom: '50px', minHeight: "75px"}}>
            <Container className="anta">
                <Navbar.Brand><a href="/"><img src={Icon} alt="Icon" style={{width: "35px"}}/></a></Navbar.Brand>
                <Navbar.Brand style={{fontWeight: "bold"}} href="/">
                    <span style={{fontSize: "18px"}}>&lt; A</span>ntonio <span style={{fontSize: "18px"}}>C</span>.<span style={{fontSize: "18px"}}> /&gt;</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navbarCenter">
                        {language === "RO" && ( <Nav.Link href="/" className={isCurrentPage('/')}>Acasă</Nav.Link> )}
                        {language === "UK" && ( <Nav.Link href="/" className={isCurrentPage('/')}>Home</Nav.Link> )}
                        {language === "RO" && ( <Nav.Link href="/despre" className={isCurrentPage('/despre')}>Despre mine & FAQ</Nav.Link> )}
                        {language === "UK" && ( <Nav.Link href="/about" className={isCurrentPage('/about')}>About me & FAQ</Nav.Link> )}
                        {language === "RO" && ( <Nav.Link href="/portofoliu" className={isCurrentPage('/portofoliu')}>Portofoliu</Nav.Link> )}
                        {language === "UK" && ( <Nav.Link href="/portofolio" className={isCurrentPage('/portofolio')}>Portfolio</Nav.Link> )}
                        {language === "RO" && ( <Nav.Link href="/profesor" className={isCurrentPage('/profesor')}>Profesor</Nav.Link> )}
                        {language === "UK" && ( <Nav.Link href="/teacher" className={isCurrentPage('/teacher')}>Teacher</Nav.Link> )}
                        {/*{language ==="RO" && ( <Nav.Link href="/meditatii" className={isCurrentPage('/meditatii')}>Meditații</Nav.Link> )}*/}
                        {/*{{language ==="UK" && ( <Nav.Link href="/meditatii" className={isCurrentPage('/meditatii')}>Mentoring</Nav.Link> )}*/}
                        {(language === "RO" || language === "UK") && ( <Nav.Link href="https://tan-charlotte-39.tiiny.site/" target="_blank" className={isCurrentPage('/cv')}>CV</Nav.Link> )}
                        <Nav.Link href="/contact" className={isCurrentPage('/contact')}>Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        {language === "RO" && (
                            <Button variant="outline-light" onClick={() => setLanguage("UK")}>
                                <img src={uk} style={{width: "20px"}} alt="UK"/>{' '}UK
                            </Button>
                        )}
                        {language === "UK" && (
                            <Button variant="outline-light" onClick={() => setLanguage("RO")}>
                                <img src={ro} style={{width: "20px"}} alt="RO"/>{' '}RO
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}