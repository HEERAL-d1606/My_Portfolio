import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
// import maddieLogo from "../../Assets/Experiences/madiee_logo.png";
// import pwLogo from "../../Assets/Experiences/pw_logo.png";
// import buzzleLogo from "../../Assets/Experiences/buzzleLogo.png";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Experiences gained in Incedo as Frontend Developer
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
            //   imgPath={pwLogo}
              title="1. RAD"
              // role="Frontend Developer"
              date="Feb 2023 - Sep 2024"
              description={
                <>
                  <ul>
                    <li>
                      Constructed and maintained responsive user interfaces
                      using React JS, CSS, HTML, and JavaScript, enhanching user
                      interaction and satisfaction.
                    </li>
                    <li>
                      Architected a scalable Redux architecture that supported
                      20+ components, enhancing the maintainability of the
                      codebase and allowing for a 50% faster deployment cycle
                      for new features and updates.
                    </li>
                    <li>
                      Integrated RESTful APIs with the frontend using Axios,
                      improving data communication and reducing load times by
                      20%.
                    </li>
                    <li>
                      Engaged with 12 team members from design, development, and
                      QA to implement 4 innovative features on schedule; project
                      completion led to a 15% increase in user engagement and
                      retention.
                    </li>
                    <li>
                      Designed reusable UI components, accelerating development
                      cycles by 30% and promoting code reusability across
                      multiple projects.
                    </li>
                    <li>
                      Applied agile methodologies, contributing to over 30 daily
                      stand-ups, 10+ sprint planning sessions, and 5
                      retrospectives, which led to a 20% improvement in project
                      workflow efficiency.
                    </li>
                  </ul>
                  <p>
                    Technologies: React JS, Redux, Axios, CSS, HTML, JavaScript,
                    MUi, Bootstrap, Agile Methodologies, JIRA
                  </p>
                </>
              }
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
            //   imgPath={buzzleLogo}
              title="2. TIMESHEET"
              // role=""
              date="Oct 2023 - Jan 2024"
              description={
                <>
                  <ul>
                    <li>
                      Developed a grid table using MUI for employees to log
                      their weekly working hours, enhancing data accuracy by
                      30%.
                    </li>
                    <li>
                      Styled the main page to improve user experience, leading
                      to a 20% increase in employee satisfaction.
                    </li>
                    <li>
                      Created a Save button that stored data and sent an
                      automated email to employees, confirming entries and
                      reducing errors by 25%.
                    </li>
                    <li>
                      Implemented a confirmation pop-up upon submission to
                      ensure 100% data validation before finalizing timesheets.
                    </li>
                  </ul>

                  <p>
                    Technologies:React JS, Redux, Axios, CSS, HTML, JavaScript,
                    MUi, Bootstrap, Agile Methodologies, JIRA
                  </p>
                </>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
            //   imgPath={maddieLogo}
              title="3. HACKATHON"
              // role="Web Developer Intern"
              date="Aug 2023 - Oct 2023"
              description={
                <>
                  <ul>
                    <li>
                      Engineered a role management system with 3 distinct user
                      roles (participant, panelist, judge), enhancing access
                      control and streamlining workflow efficiency by 20%.
                    </li>
                    <li>
                      Conducted in-depth research and designed 10 wireframes,
                      converting user requirements into intuitive and
                      user-friendly interfaces.
                    </li>
                    <li>
                      Redesigned the user interface using HTML, CSS, JavaScript,
                      ReactJS, and Bootstrap, leading to a 25% increase in user
                      engagement.
                    </li>
                    <li>
                      Evaluated and documented the manual process, gathering
                      requirements from 5 key stakeholders to ensure the
                      application met 100% of functional needs.
                    </li>
                    <li>
                      Deployed the web application on a cloud platform,
                      utilizing modern web technologies to boost performance and
                      scalability by 30%.
                    </li>
                  </ul>

                  <p>
                    Technologies: React JS, Redux, Axios, CSS, HTML, JavaScript,
                    MUi, Bootstrap, Agile Methodologies, JIRA
                  </p>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Experience;
