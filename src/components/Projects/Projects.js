import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ewallet from "../../Assets/Projects/Ewallet.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ewallet}
              isBlog={false}
              title="E-Wallet"
              description="The E-Wallet Application is a React-based app that allows users to manage their digital wallet. Users can buy movie tickets, groceries, and recharge their wallet with real-time, color-coded alerts for transaction statuses. Built with React and Bootstrap, it offers a responsive and intuitive user experience."
              ghLink="https://github.com/HEERAL-d1606/E-Wallet_Reactapp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather-App"
              description="The Weather App is a React-based web application that provides real-time weather information for cities around the world. Users can search for a city to get the current temperature and weather description. The app features a clean and modern user interface with a background image to enhance the visual experience."
              ghLink="https://github.com/HEERAL-d1606/WeatherAPP_React"
            />
          </Col>
       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
