import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";

import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.pushDown = this.pushDown.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.pushDown();
  }

  pushDown() {
    if (!this.state.isOpen) {
      document.querySelector("main").classList.add("push-down");
    } else if (this.state.isOpen) {
      document.querySelector("main").classList.remove("push-down");
    }
  }

  render() {
    return (
      <div>
        <Navbar color="#fffcf5" light expand="sm">
          <div className="logo">
            <Nav className="ml-auto  " navbar>
              <NavItem>
                <Link className="nav-link " to="/">
                  KK
                </Link>
              </NavItem>
            </Nav>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="border-bottom nav-link " to="/projects">
                  Projekty
                </Link>
              </NavItem>
              <NavItem>
                <Link className="border-bottom nav-link " to="/desciption">
                  O Mnie
                </Link>
              </NavItem>
              <NavItem>
                <NavLink
                  className="border-bottom "
                  // eslint-disable-next-line
                  href="javascript: document.body.scrollIntoView(false);"
                >
                  Kontakt
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
