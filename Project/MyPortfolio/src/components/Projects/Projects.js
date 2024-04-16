import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import chatify from "../../Assets/Projects/chatify.png";
import DaddyJokeChromeExtension from "../../Assets/Projects/DaddyJokeChromeExtension.png"
import Jarvis from "../../Assets/Projects/Jarvis.png"
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
              //imgPath={chatify}
              isBlog={false}
              title="Own SMTP mail server"
              description="This project include scripts for server configuration, handling email sending and receiving, and possibly security measures for authenticating users and encrypting messages."
              ghLink="https://github.com/n15git/smtp-mailserver"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DaddyJokeChromeExtension}
              isBlog={false}
              title="DaddyJokeChromeExtension"
              description="A Chrome extension project using an API could involve creating a browser extension that displays a different dad joke each time a user opens a new tab or clicks a button."
              ghLink="https://github.com/n15git/chromeExtension"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jarvis}
              isBlog={false}
              title="Jarvis"
              description="Jarvis is a desktop assistant project inspired by the virtual assistant technology in the Iron Man movie series. The goal of the project is to create a voice-activated assistant that can perform a variety of tasks such as searching the web, playing music, setting reminders, and more."
              ghLink="https://github.com/n15git/virtual-assistance-jarvis-using-python-"
            />
          </Col>




          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
