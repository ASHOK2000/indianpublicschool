import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "./AdmissionHomePara";
import "../../css/about.css";
import INTEGRATED_CURRICULUM from "../../res_images/integrated_C.png";
import AGE_APPROPRIATE_EDUCATIONAL from "../../res_images/age_Appriciate.png";
import Well_planned from "../../res_images/micro.png";
import PIONEERING_R from "../../res_images/PIONEERING_R.png";
import ADOPTION_CALLING from "../../res_images/adoption calling.png";
import TECH_ENABLED_FRAMEWORK from "../../res_images/techenabled.png";
import { Link } from "react-router-dom";
import PrePrimary from "../../res_images/Pre-primary.png";
import primary from "../../res_images/primary-school.jpg";
import secondary from "../../res_images/secondary-school.jpg";
import { Container } from "react-bootstrap";

function HomeContent() {
  let user;
  const storedData = localStorage.getItem("userData");
  let Role;
  if (storedData) {
    user = JSON.parse(storedData);
    Role = user.payload.role;
  }
  return (
    <Container>
      <div>
        {/* row after carausal  */}
        <Row>{user && <h1>Welcome {Role}</h1>}</Row>

        {/* <Container> */}
        <Row className="mt-4 h-100">
          <Col sm={6}>
            <div className="DiscoverHome">
              <h4 className="headingDisc">Discover IPS, Discover Excellence</h4>
              <ul className="DiscoverIPS">
                <li>
                  <p>
                    Welcome to <strong>Indian Public School</strong>, where
                    educational excellence meets a rich legacy of 10 years in
                    nurturing young minds. As a part of the NCERT pattern, we
                    take pride in our commitment to academic brilliance and
                    holistic development.
                  </p>
                </li>
                <li>
                  <p>
                    Our journey began in 2012 with a modest start, driven by a
                    vision to provide quality education. Since then,{" "}
                    <strong>Indian Public School</strong> has flourished into a
                    reputable institution known for its commitment to
                    educational excellence.
                  </p>
                </li>
                <li>
                  <p>
                    We cater to students from primary to secondary levels,
                    focusing on a well-rounded education that integrates
                    academic and co-curricular activities seamlessly. Our
                    programs are designed to equip students with the skills and
                    knowledge necessary for their future endeavors.
                  </p>
                </li>
                <li>
                  <p>
                    At <strong>Indian Public School</strong>, the student always
                    remains at the center of our approach. We prioritize their
                    growth, ensuring a supportive environment that encourages
                    their ambitions and aspirations. Moreover, we highly value
                    the partnership between the school and parents,
                    understanding that their involvement is crucial in a child's
                    educational journey.
                  </p>
                </li>
                <li>
                  <p>
                    Join us at <strong>Indian Public School</strong> as we
                    continue to uphold our commitment to nurturing bright minds
                    and shaping the leaders of tomorrow within the framework of
                    the NCERT pattern.
                  </p>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={6}>
            <div className=" mb-4 hoverz">
              <div className="row mb-3">
                <div className="row">
                  <div className="col-12 text-center">
                    <div
                      className="sub-heading color1 wow fadeInDown delay-01"
                      style={{ visibility: "visible" }}></div>
                    <div
                      className="heading1 color1 wow fadeInUp delay-01"
                      style={{ visibility: "visible" }}>
                      <h4>
                        THE <strong>Indian Public School</strong> EDGE
                      </h4>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 px-2 mob-margin">
                  <div
                    className="hover-box box-color3 h-100 wow zoomIn"
                    style={{ visibility: "visible" }}>
                    <img
                      src={INTEGRATED_CURRICULUM}
                      alt="age appriciation "
                      className="future-icon"
                    />
                    <p>Integrated Curriculum</p>
                  </div>
                </div>

                <div className="col-lg-7 px-2 mob-margin1">
                  <div
                    className="hover-box box-color5 h-100 wow zoomIn"
                    style={{ visibility: "visible" }}>
                    <img
                      src={TECH_ENABLED_FRAMEWORK}
                      alt=""
                      className="future-icon"
                    />
                    <p>Tech-enabled framework</p>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-4 px-2 mob-margin">
                  <div
                    className="hover-box box-color3 h-100 wow zoomIn"
                    style={{
                      visibility: "visible",
                      animationName: "zoomIn",
                    }}>
                    <img src={Well_planned} alt="" className="future-icon" />
                    <p>
                      Well-planned <br />
                      microschedules
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 px-2 mob-margin">
                  <div
                    className="hover-box box-color5 h-100 wow zoomIn"
                    style={{
                      visibility: "visible",
                      animationName: "zoomIn",
                    }}>
                    <img src={PIONEERING_R} alt="" className="future-icon" />
                    <p>
                      Pioneering
                      <br /> R&amp;D team
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 px-2 mob-margin1">
                  <div
                    className="hover-box box-color3 h-100 wow zoomIn"
                    style={{
                      visibility: "visible",
                      animationName: "zoomIn",
                    }}>
                    <img
                      src={ADOPTION_CALLING}
                      alt=""
                      className="future-icon"
                    />
                    <p>Adoption Calling</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mob-margin1">
                  <div
                    className="hover-box box-color5 h-100 wow zoomIn"
                    style={{
                      visibility: "visible",
                      animationName: "zoomIn",
                    }}>
                    <img
                      src={AGE_APPROPRIATE_EDUCATIONAL}
                      alt=""
                      className="future-icon"
                    />
                    <p>Age appropriate Educational Programmes</p>
                  </div>
                </div>
              </div>
            </div>
            {/* </Container> */}
          </Col>
        </Row>
        {/* </Container> */}
      </div>

      {/* school details section */}

      <div className="AcademicCard">
        <div className="Academic  ">
          <p>ACADEMICS</p>
        </div>
        <div className="scene container">
          <Row>
            <Col sm={4}>
              <div>
                <div className="card">
                  <div className="card__face card__face--front">
                    <img alt="ips classes" src={PrePrimary} />
                  </div>
                  <div className="card__face card__face--back">
                    {/* <img
                      alt="ips classes"
                      src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg"
                    /> */}
                    <p>
                      For pre-primary learners, our e-Kidz programme provides a
                      joyful start to their educational journey.
                    </p>
                  </div>
                </div>
                <div className="cardTitle     mb-4 px-5 d-grid align-items-center">
                  <p>Pre Primary</p>
                  <Link to="/" className="knowMore">
                    Know More
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="card">
                <div className="card__face card__face--front">
                  <img alt="ips classes" src={primary} />
                </div>
                <div className="card__face card__face--back">
                  <p>
                    Our e-Champs programme builds a strong foundation for
                    lifelong learning, fostering curiosity and creativity.
                  </p>
                </div>
              </div>
              <div className="cardTitle">
                <p>Primary</p>
                <Link to="/" className="knowMore">
                  Know More
                </Link>
              </div>{" "}
            </Col>
            <Col sm={4}>
              <div className="card">
                <div className="card__face card__face--front">
                  <img alt="ips classes" src={secondary} />
                </div>
                <div className="card__face card__face--back">
                  {/* <img
                      alt="ips classes"
                      src="https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg"
                    /> */}

                  <p>
                    Our e-Techno programme for middle school students is
                    tailored to cultivate confident and responsible individuals,
                    equipping them with the skills needed for higher education.
                  </p>
                </div>
              </div>
              <div className="cardTitle">
                <p>Middle School</p>
                <Link to="/" className="knowMore">
                  Know More
                </Link>
              </div>{" "}
            </Col>
          </Row>
        </div>
      </div>

      <div className="About Us " style={{ minHeight: "30rem" }}>
        <About />
      </div>
    </Container>
  );
}

export default HomeContent;
