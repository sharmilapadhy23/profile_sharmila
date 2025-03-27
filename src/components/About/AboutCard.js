import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sharmila Padhy</span>
            from <span className="purple">  Odisha, India.</span>
            <br />
            I am a Computer Engineering student passionate about building efficient and innovative software solutions.
            <br />
            I have experience in <span className="purple">full-stack development</span>, cloud technologies, and building scalable web applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Discovering New Cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create impactful solutions through technology!"{" "}
          </p>
          <footer className="blockquote-footer">Sharmila Padhy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
