import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiGit,
  SiFigma,
  SiNetlify,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />  {/* Windows */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />  {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />  {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />  {/* Vercel */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />  {/* Netlify */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />  {/* Figma */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />  {/* Git */}
      </Col>
    </Row>
  );
}

export default Toolstack;
