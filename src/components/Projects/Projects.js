import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import jingm3i from "../../Assets/Projects/jingm3i.jpeg";
import port from "../../Assets/Projects/port.jpeg";
import school from "../../Assets/Projects/school.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="College UI and PHP Portal"
              description="School site built entirely on PHP, HTML and CSS with student portal."
              link="https://github.com/joshex150/school"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio website"
              description="Portfolio website built with html, css, and js code."
              link="https://github.com/joshex150/port"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jingm3i}
              isBlog={false}
              title="Jingm3i"
              description="Shopping site built entirely on PHP, HTML and CSS with admin page and user portal."
              link="https://jingm3i.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
