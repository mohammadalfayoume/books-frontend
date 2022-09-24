import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link" style={{ color: "blue" }}>
            Home
          </Link>
        </NavItem>
        {isAuthenticated && (
          <NavItem>
            <Link
              to="/about"
              className="nav-link"
              style={{ color: "blue", marginLeft: "15px" }}
            >
              About
            </Link>
          </NavItem>
        )}
        {/* PLACEHOLDER: render a navigation link to the about page */}
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
