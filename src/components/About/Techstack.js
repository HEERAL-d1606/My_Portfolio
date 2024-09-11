import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiPostgresql,
} from "react-icons/di";
import {
  SiTypescript,
  SiRedux,
  SiBootstrap,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiStorybook,
  SiJirasoftware,
} from "react-icons/si";
import { FaGit, FaDocker, FaReact } from "react-icons/fa"; // Use FaReact as placeholder for MUI
import { GiCheckMark } from "react-icons/gi"; // For SDLC
import { MdOutlineApi } from "react-icons/md"; // For API Integration

function Techstack() {
  const textStyle = {
    fontSize: '14px',
    textAlign: 'center', // Optional: center-align text under icons
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p style={textStyle}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={textStyle}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p style={textStyle}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={textStyle}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={textStyle}>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={textStyle}>React JS</p>
      </Col>     
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p style={textStyle}>Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p style={textStyle}>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact /> {/* Using FaReact as a placeholder for MUI */}
        <p style={textStyle}>MUI</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiStorybook />
        <p style={textStyle}>Storybook</p>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <GiCheckMark />
        <p style={textStyle}>SDLC</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineApi />
        <p style={textStyle}>API Integration</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={textStyle}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={textStyle}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <p style={textStyle}>PostgreSQL</p>
      </Col>
      
      {/* Commented out: Tools
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <p style={textStyle}>AWS</p>
      </Col>
      */}
     
      {/* <Col xs={4} md={2} className="tech-icons">
        <FaGit />
        <p style={textStyle}>Git/GitHub</p>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
        <p style={textStyle}>Docker</p>
      </Col> */}
    </Row>
  );
}

export default Techstack;
