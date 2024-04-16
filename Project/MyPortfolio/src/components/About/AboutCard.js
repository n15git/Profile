import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nikita Sinha </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />
            I am currently employed as an Intern at Nokia.
            <br />
            I have completed my Bachelor's in Computer Science and Engineering from CMR Institute of Technology,Banngalore
            <br />
            <br />
            Apart from coding and problem solving, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nikita</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
