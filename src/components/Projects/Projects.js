import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import pyt from "../../Assets/Projects/pyt.png";
import port from "../../Assets/Projects/port.png";
import zib from "../../Assets/Projects/zib.png";
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
          
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="College site and PHP Portal"
              description="School site built entirely on PHP, HTML and CSS with student portal."
              link="https://github.com/joshex150/school"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zib}
              isBlog={false}
              title="E-Commerce Platform"
              description="Shopping site built entirely on React.js and CSS3."
              link="https://zibara.company.site/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio website"
              description="Portfolio website built with html, css, and js code."
              link="https://github.com/joshex150/Portfolio"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pyt}
              isBlog={false}
              title="Python"
              description="Python Projects Repo, feel free to clone and use however you see fit."
              link="https://github.com/joshex150/Python"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
