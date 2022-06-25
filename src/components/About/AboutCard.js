import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Joshua Christian </span>
            from <span className="purple"> Rivers, Nigeria.</span>
            <br />I am a college student pursuing a B.Eng in Computer Engineering at Afe Babalola University, Ado-Ekiti.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Before we could walk we fell sevral times, those who avoid failure also avoid success."{" "}
          </p>
          <footer className="blockquote-footer">Joshua</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;