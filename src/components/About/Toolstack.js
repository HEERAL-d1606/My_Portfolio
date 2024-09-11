import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJirasoftware,
  SiWebpack,
  SiBabel,
  SiStorybook,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa"; // Used as a placeholder for Adobe XD

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: '14px', textAlign: 'center' }}>VSCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
        <p style={{ fontSize: '14px', textAlign: 'center' }}>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileAlt /> {/* Placeholder for Adobe XD */}
        <p style={{ fontSize: '14px', textAlign: 'center' }}>Adobe XD</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
        <p style={{ fontSize: '14px', textAlign: 'center' }}>JIRA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack />
        <p style={{ fontSize: '14px', textAlign: 'center' }}>Webpack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBabel />
        <p style={{ fontSize: '14px', textAlign: 'center' }}>Babel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStorybook />
        <p style={{ fontSize: '14px', textAlign: 'center' }}>Storybook</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <p style={{ fontSize: '14px', textAlign: 'center' }}>GitHub</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: '14px', textAlign: 'center' }}>Postman</p>
      </Col> */}
    </Row>
  );
}

export default Toolstack;
