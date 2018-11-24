import React, { Component } from "react";
import Icon from "./helpers/icon";
import Link from "./helpers/link";
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import Data from "./../../data/data";

class Projects extends Component {
  render() {
    let projects = Data.map(project => (
      <Container
        key={project.id}
        className="project-container "
        style={{ backgroundColor: "#fbf6ec" }}
      >
        <Row>
          <Col xs="6">
            <Card>
              <CardImg
                top
                width="100%"
                src={require("./../../static/images/" + project.projectImg)}
                alt="No Image"
              />
              <CardBody>
                <CardTitle>
                  <span>{project.projectTitle}</span>
                </CardTitle>
                <CardText>{project.projectDescription}</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col className="project-technologies" xs="6">
            <Row>
              <p className="border-bottom tech-item-main ">Technologie</p>
            </Row>
            <Row>
              <Icon icon={project.projectTechnologies} />
            </Row>

            <Row>
              <p className="border-bottom tech-item-main">Linki</p>
            </Row>
            <Row className="links-container ">
              <Link link={project.projectLinks} />
            </Row>
          </Col>
        </Row>
      </Container>
    ));

    return <div>{projects}</div>;
  }
}

//const Projects = AnimatedWrapper(Project);
export default Projects;
