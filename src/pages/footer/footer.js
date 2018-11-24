import React, { Component } from "react";

import { Container, Row, Col, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer  navbar-fixed-bottom">
        <Container>
          <Row className="justify-content-center">
            <Col xs="4">
              <Row className="footer-item-main"> MENU</Row>
              <br />
              <div className="footer-item-secondary">
                <Nav className="ml-auto " navbar>
                  <NavLink
                    className="nav-link "
                    // eslint-disable-next-line
                    href="javascript: document.body.scrollIntoView(true);"
                  >
                    Góra
                  </NavLink>

                  <Link className="nav-link " to="/desciption">
                    O Mnie
                  </Link>
                  <Link className="nav-link " to="/projects">
                    Projekty
                  </Link>
                </Nav>
              </div>
            </Col>
            <Col xs="4" className="border-right border-left">
              <Row className="footer-item-main"> KONTAKT</Row>
              <br />
              <div className="footer-item-secondary">
                <Row>
                  kulikowski. <span />
                  krzysztof84 <span />
                  @gmail.com
                </Row>
              </div>
            </Col>
            <Col xs="4">
              <Row className="footer-item-main"> ZNAJDZIESZ MNIE</Row>
              <br />
              <div className="footer-item-secondary">
                <Nav className="ml-auto " navbar>
                  <Row>
                    <NavLink href="https://github.com/ksyhoo">Git</NavLink>
                  </Row>
                  <Row>
                    <NavLink href="https://linkedin.com/in/krzysztof-kulikowski">Linked In</NavLink>
                  </Row>
                </Nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool
};
