import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simula um carregamento de 2 segundos
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.skeletonContainer}>
          <Skeleton height={50} width={`60%`} />
          <Skeleton height={400} width={`100%`} />
          <Skeleton height={50} width={`80%`} />
          <Skeleton height={200} width={`100%`} />
          <Skeleton height={50} width={`60%`} />
        </div>
      ) : (
        <Container>
          <Row className="my-5">
            <Col className="text-center">
              <h1 className={styles.mainHeading}>I'm Lucas Silvestre</h1>
              <h2 className={styles.subHeading}>Full Stack Developer</h2>
              <p className={styles.paragraph}>
                I am extremely curious and fascinated by learning new things. My
                dive into new knowledge led me to learn programming and every
                day I use the most current market technologies. I have always
                been interested in IT project management, something embraced by
                my first degree in Law. The ability to communicate and solve
                problems, in addition to a relentless quest for knowledge, make
                me a unique professional in the workplace.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          <Row className="my-5">
            <Col>
              <h3 className={styles.servicesHeading}>My Services</h3>
              <ul className={styles.servicesList}>
                <li>Web Development</li>
                <li>Project Management</li>
                <li>UI/UX Design</li>
                <li>Backend Development</li>
              </ul>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default HomePage;
