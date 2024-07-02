import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={10}>
            <h2 className={styles.heading}>A Few Words About Me</h2>
            <h1 className={styles.title}>
              I'm Lucas Silvestre, a Project Manager T.I and FullStack
              Developer. 
               I am extremely curious and fascinated by learning new
              things. My communication skills, problem-solving abilities, and
              relentless quest for knowledge make me a unique professional.
            </h1>
            <p className={styles.description}>
              Over the last 3 years I have been training in the areas of project
              management and full stack development...In my free time I like
              photography and playing different sports.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <Carousel fade id="carouselExampleFade" className={styles.carousel}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?auto=yes&bg=777&fg=555&text=Primeiro+Slide"
                  alt="Primeiro Slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?auto=yes&bg=666&fg=444&text=Segundo+Slide"
                  alt="Segundo Slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?auto=yes&bg=555&fg=333&text=Terceiro+Slide"
                  alt="Terceiro Slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className={styles.services}>
          <Col md={6}>
            <h5> Services</h5>
            <p>
              Product Menager / Full-Stack Developer / System Analyst 
            </p>
          </Col>
          <Col md={6}>
            <h5>Tools I Use</h5>
            <p>
              JavaScript / Pyhton / ReactJS / NodeJS / Bootstrap  / NextJS / UX-design / SCRUM / Databases 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
