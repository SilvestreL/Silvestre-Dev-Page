import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/About.module.css";

const About = () => {
  const cards = [
    {
      imgSrc: "/images/futvolei.jpg",
      title: "Futvôlei",
      text: "A competiçao e o resporte sempre estiveram presentes",
    },
    {
      imgSrc: "/images/jiu.jpg",
      title: "Jiu Jitsu",
      text: "Esta arte marcial é onde o corpo cansa e a mente descansa.",
    },
    {
      imgSrc: "/images/cachoeira.jpg",
      title: "Viagens",
      text: "Este é um card mais longo com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior.",
    },
    {
      text: "“If there is a way to do it better, find it.”.",
      footer: "- Thomas Edison",
    },
    {
      imgSrc: "",
      title: "Título do card",
      text: "Este é um card com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.",
      update: "Atualizados 3 minutos atrás",
    },
    {
      imgSrc: "/images/violao.jpg",
      title: "Tocar Violão",
      text: "Nas minhas horas livres, gosto de tocar violão. A música é uma grande paixão minha.",
    },
    {
      text: "Se você quer ser bem sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si.",
      footer: "- Ayrton Senna",
    },
    {
      title: "Título do card",
      text: "Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este card tem o conteúdo ainda maior que o primeiro, para mostrar a altura igual, em ação.",
      update: "Atualizados 3 minutos atrás",
    },
    {
      imgSrc: "/images/jogos.jpg",
      title: "Jogos",
      text: "Gosto de jogar videogames para relaxar e me divertir. É uma ótima forma de socializar com amigos.",
    },
  ];

  return (
    <div className={styles.about}>
      <Container className={styles.container}>
        <Row className="mb-5">
          <Col>
            <h2 className={styles.few}>A Few Words About Me</h2>
            <h1 className={styles.title}>
              Hello, my name is Lucas Silvestre. An extremely curious person and
              fascinated with learning new things. I like to add value to
              people's lives with my technology skills. I believe that this
              tireless search for knowledge makes me a unique professional.
            </h1>
            <p className={styles.description}>
              Over the last 3 years I have been training in the areas of project
              management and full stack development. In my free time I like
              photography and playing different sports. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Delectus voluptates consectetur
            </p>
          </Col>
        </Row>
        <Container className="py-3">
          <h1 className={`text-center mb-12 mt-12 ${styles.few}`}>50 shades of Sil</h1>
          <Row>
            {cards.map((card, index) => (
              <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                <Card>
                  {card.imgSrc && <Card.Img variant="top" src={card.imgSrc} />}
                  <Card.Body>
                    {card.title && <Card.Title>{card.title}</Card.Title>}
                    <Card.Text>{card.text}</Card.Text>
                    {card.update && (
                      <Card.Text>
                        <small className="text-muted">{card.update}</small>
                      </Card.Text>
                    )}
                    {card.footer && (
                      <footer className="blockquote-footer">
                        <small className="text-muted">{card.footer}</small>
                      </footer>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Row className={styles.services}>
          <Col xs={12} md={6}>
            <h5 className={styles.few}>Services</h5>
            <p className={styles.titleTools}>
              <span> Product Manager</span>
              <span> / </span>
              <span> Full-Stack Developer </span>
              <span> / </span>
              <span> System Analyst </span>
            </p>
          </Col>
          <Col xs={12} md={6}>
            <h5 className={styles.few}>Tools I Use</h5>
            <p className={styles.titleTools}>
              <span>JavaScript</span>
              <span>/</span>
              <span>Python</span>
              <span>/</span>
              <span>ReactJS</span>
              <span>/</span>
              <span>NodeJS</span>
              <span>/</span>
              <span>Bootstrap</span>
              <span>/</span>
              <span>NextJS</span>
              <span>/</span>
              <span>Databases</span>
            </p>
          </Col>
        </Row>
        <h3 className={styles.few2}>Usual Questions</h3>
        <Row className="mb-5">
          <Col xs={12} md={6}>
            <details className={styles.details}>
              <summary className={styles.summary}>Academic Background</summary>
              <ul className={styles["styled-list"]}>
                <li>Information Systems (2023 - 2027) - Cesmac/AL</li>
                <li>Law (2011 - 2016) - Unit/AL</li>
                <li>
                  Postgraduate in Administrative and Constitutional Law (2017 -
                  2019)
                </li>
              </ul>
            </details>
          </Col>
          <Col xs={12} md={6}>
            <details className={styles.details}>
              <summary className={styles.summary}>Titles</summary>
              <ul className={styles["styled-list"]}>
                <li>
                  Member of the Innovation and Legal Technology and Data
                  Protection Commission
                </li>
              </ul>
            </details>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <details className={styles.details}>
              <summary className={styles.summary}>Work Experience</summary>
              <ul className={styles["styled-list"]}>
                <li>System Analyst / Project Manager T.I (2023 - 2024)</li>
                <li>Full Stack Developer - Freelancer (2022 - 2024)</li>
                <li>
                  Technical Advisor for Special and Judicial Purchases (2020 -
                  2023)
                </li>
                <li>Lawyer (2016 - 2024)</li>
              </ul>
            </details>
          </Col>
          <Col xs={12} md={6}>
            <details className={styles.details}>
              <summary className={styles.summary}>Certifications</summary>
              <ul className={styles["styled-list"]}>
                <li>Agile Project Management with SCRUM</li>
                <li>ITIL 4 Certification</li>
                <li>HTML and CSS</li>
                <li>Project Planning and Management</li>
                <li>
                  React from Basics to Advanced (with hooks, router, API,
                  Projects)
                </li>
                <li>ITIL 4 / React / Docker / Project Manager</li>
              </ul>
            </details>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
