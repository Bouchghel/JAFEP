import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from "/favicon.ico";
import logo2 from "/favicon2.ico";

const HeaderC = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuToggle(false); // Masquer le menu lorsqu'un lien est cliqué
  };

  const logoStyle = {
    height: '40px', // Ajustez la hauteur selon vos besoins
    width: 'auto'
  };

  const smallTextStyle = {
    fontSize: '12px', // Ajustez la taille selon vos besoins
  };

  const navbarStyle = {
    backgroundColor: 'rgba(211, 211, 211, 0.9)', // Couleur grisée avec transparence
  };

  const navLinkStyle = {
    fontSize:"16px",
    fontWeight: 'bold', // Mettre en gras
    margin: '0 10px', // Espacement entre les liens
  };

  const separatorStyle = {
    margin: '0 10px', // Espacement entre le séparateur et les liens
    color: 'grey', // Couleur du séparateur
    verticalAlign: 'middle', // Aligner verticalement au milieu
  };

  return (
    <>
      <Container fluid>
        <div className="row align-items-center justify-content-between" style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>

          <div className="col-lg-12 d-lg-flex justify-content-end">
            <img src={logo2} alt="Large Logo" style={{ width: 'auto', height: '60px', maxWidth: '600px' }} />
            <i className="icofont-telephone" style={{marginTop:'20px'}}>: 123-456-7890</i>
            <br/>
            <i className='icofont-email' style={{marginTop:'20px', marginLeft: '10px' }}> : exemple@gmail.com</i>
          </div>
        </div>
      </Container>
      {/* NavBar */}
      <Navbar expand="lg" className="bg-body-tertiary" style={navbarStyle}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" style={logoStyle} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" onClick={handleMenuClick} style={navLinkStyle}>ACCUEIL</Nav.Link>
              <span style={separatorStyle}>|</span>
              <Nav.Link href="#inspiration" onClick={handleMenuClick} style={navLinkStyle}>INSPIRATION</Nav.Link>
              <span style={separatorStyle}>|</span>
              <Nav.Link href="#contact" onClick={handleMenuClick} style={navLinkStyle}>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderC;
