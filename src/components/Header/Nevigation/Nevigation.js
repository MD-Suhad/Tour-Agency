import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../utilities/context/useAuth";
import "./Navigation.css";
import { HashLink } from "react-router-hash-link";
import { SiYourtraveldottv } from 'react-icons/si';


/* you might khow the component, yes this is navigation bar to navigate all  */
const Nevigation = () => {
  const { user, logOut } = useAuth();
  const handelLogOut = () => {
    logOut();
  };
  return (
    <>
      <Navbar style={{backgroundColor: 'steelblue'}}  expand="lg" sticky="top">
        <Container>
          <Navbar.Brand style={{fontWeight:'600',color:'white'}}>
           <span style={{color:'wheat',fontWeight:'700'}}>Tourist</span> <span>Spot BD</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-primary align-items-md-center">
              <Nav.Link as={HashLink} className="navlink" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} className="navlink" to="/home#packages">
                Packages
              </Nav.Link>
              {user?.email ? (
                <>
                  <Nav.Link as={HashLink} className="navlink" to="/management">
                    Manage Orders
                  </Nav.Link>
                  <Nav.Link as={HashLink} className="navlink" to="/myOrders">
                    My Orders
                  </Nav.Link>
                  <Nav.Link as={HashLink} className="navlink" to="/addPackage">
                    Add Packages
                  </Nav.Link>
                  <button
                    type="button"
                    onClick={handelLogOut}
                    className="btn btn-success me-3"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Nav.Link as={HashLink} className="navlink" to="/Login">
                  Login
                </Nav.Link>
              )}
              {user.email && (
                <Navbar.Text>
                  <span className="ms-2 text-white fw-bold">
                    {user?.displayName}
                  </span>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nevigation;
