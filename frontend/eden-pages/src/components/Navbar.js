import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
function Navibar() {
  return (
    <div className={`navigation`}>
      <header>
        <>
          {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) =>
            expand === "lg" ? (
              <Navbar
                key={expand}
                expand={expand}
                className="bg-body-tertiary mb-3"
              >
                <Container fluid>
                  <Link to="/" className="logo">
                    <span>S</span>MARTEL
                  </Link>
                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                      >
                        Sidebar Menu
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav
                        className="justify-content-end flex-grow-1 pe-3"
                        id="menu"
                      >
                      <Link to="/" className="nav-link">
                          Home
                        </Link>
              
                      <Link to="/AboutPage" className="nav-link">
                          About
                        </Link>

                        <NavDropdown
                          title="Marketplace"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                          className="dropmenu"
                        >
                          <NavDropdown.Item
                            as={Link}
                            to="/MarketPage"
                            className="menuitem"
                          >
                            Marketplace
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item
                            as={Link}
                            to="/ProductFormPage"
                            className="menuitem"
                          >
                            Add Product
                          </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                          title="Ressources"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                          className="dropmenu"
                        >
                          <NavDropdown.Item to="/" className="menuitem">
                            Blog
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item
                            href="#action4"
                            className="menuitem"
                          >
                            Forum
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item
                            href="#action5"
                            className="menuitem"
                          >
                            Market Insights
                          </NavDropdown.Item>
                        </NavDropdown>
                        {/* <link to='/ContactPage'>Contact Us</link> */}
                        <Link to="/FaqPage" className="nav-link">
                          FAQ
                        </Link>
                        <Link to="/ContactPage" className="nav-link">
                          Contact Us
                        </Link>
                      </Nav>
                      <Link to="/LoginPage" variant="link" className="login">
                        Login
                      </Link>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ) : null
          )}
        </>
      </header>
    </div>
  );
}

export default Navibar;
