import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import headImage from "../res_images/whyUs2.jpeg";
import Fade from "react-bootstrap/Fade";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RobustImage from "../res_images/Robust-Extracurricular.jpg";
import InnovativeImage from "../res_images/Innovative-Teaching.jpg";
import RichHeritage from "../res_images/Rich-Heritage-Tradition.jpg";
import StrongValues from "../res_images/Strong-Values-Ethics.jpg";
import "../css/whyUs.css";

export default function WhyUs() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      title: "Robust Extracurricular Programs",
      id: "collapse-text-third",
      text: "Robust Extracurricular Programs: Education at Indian Public School is not limited to the classroom. We offer a wide range of extracurricular activities, including sports, music, drama, and community service, to help students discover and develop their talents and passions outside of academics.",
      image: RobustImage,
    },
    {
      title: "Innovative Teaching Methods",
      id: "collapse-text-second",
      text: "Innovative Teaching Methods: We recognize that the world is evolving rapidly, and education must keep pace. Our curriculum is designed to be dynamic, integrating the latest educational technologies and teaching methodologies. We encourage critical thinking, problem-solving, and creativity, preparing students to thrive in a rapidly changing world.",
      image: InnovativeImage,
    },
    {
      title: "Rich Heritage and Tradition",
      id: "collapse-text-first",
      text: "Rich Heritage and Tradition: Indian Public School has a legacy of educational excellence that spans decades. Our institution has stood the test of time, consistently producing graduates who excel in various fields, whether it's academics, sports, or the arts. We take pride in our traditions, blending them seamlessly with modern pedagogical methods to provide a holistic learning experience.",
      image: RichHeritage,
    },

    {
      title: "Strong Values and Ethics",
      id: "collapse-text-fourth",
      text: "Strong Values and Ethics: Character education is a cornerstone of our philosophy. We instill values such as integrity, responsibility, and ethical behavior in our students. Our aim is to produce not just successful individuals but responsible citizens who contribute positively to society.",
      image: StrongValues,
    },
  ];

  const handleButtonClick = (sectionId) => {
    setOpenSection(sectionId === openSection ? null : sectionId);
  };

  return (
    <div>
      <Container className="mt-5">
        <div>
          <Image
            src={headImage}
            alt="Indian Public School"
            className=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="text-center mt-5 mb-5 ">
          <span
            className="shadow p-3 mb-5 bg-body rounded"
            style={{
              fontFamily: "satisfies",
              fontWeight: "bold",
              fontSize: "20px",
              color: "#12499c",
            }}>
            Why Indian Public School?
          </span>
        </div>
        <div>
          <Row xs={1} md={4}>
            {sections.map((section) => (
              <Col key={section.title}>
                <div
                  style={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    fontSize: "17px",
                  }}>
                  {" "}
                  {section.title}:{" "}
                  <button
                    className="btn btn-info btn-rounded"
                    onClick={() => handleButtonClick(section.id)}
                    aria-controls={section.id}
                    aria-expanded={section.id === openSection}>
                    <div style={{ fontWeight: "bolder" }}>
                      {" "}
                      {section.id === openSection ? "-" : "+"}
                    </div>
                  </button>
                </div>
              </Col>
            ))}
          </Row>

          <div style={{ minHeight: "100px" }}>
            {sections.map((section) => (
              <div
                key={section.id}
                className={section.id === openSection ? "open" : "closed"}>
                {section.id === openSection && (
                  <Fade in={true} dimension="width">
                    <div id={section.id}>
                      <Row>
                        <Col sm={5} className="ImageWhyUs">
                          {" "}
                          <img
                            src={section.image}
                            alt={section.title}
                            style={{ width: "100%" }}
                          />
                        </Col>

                        <Col sm={7}>
                          <Card body>
                            <p>{section.text}</p>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Fade>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
