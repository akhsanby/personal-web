import { Row, Col, Container, Card } from "react-bootstrap";
import Layout from "../src/components/Layout";

// custom styles
import styles from "../styles/Project.module.scss";

export default function Project() {
  const myProjectImage = [
    {
      title: "Quiz App",
      url: "/images/image15.png",
      repo: "https://github.com/akhsanby/quiz-app",
      description: "The challenge learning project from the website https://www.frontendmentor.io to create Quiz Programming App. The tech stack used is VueJS and Tailwind CSS.",
    },
    {
      title: "Dashboard Responsive",
      url: "/images/image14.png",
      repo: "https://github.com/akhsanby/assigment-sp-digital",
      description: "The challenge learning project is to slicing & design a responsive dashboard. The tech stack used is VueJS and Tailwind CSS.",
    },
    {
      title: "Grocery Online Responsive Template",
      url: "/images/image13.png",
      repo: "https://github.com/akhsanby/grocery-online-new",
      description: "The challenge learning project is to design a responsive E-commerce platform. The tech stack used is NextJS and Tailwind CSS.",
    },
    {
      title: "Advance Memory Game",
      url: "/images/image12.png",
      repo: "https://github.com/akhsanby/memory-game",
      description: "The challenge learning project is a Memory Game, using VueJS and Tailwind CSS as the tech stack.",
    },
    {
      title: "Fullstack Todo List",
      url: "/images/image11.png",
      repo: "https://github.com/akhsanby/full-stack-todolist",
      description: "The challenge learning project is to create a Todo List website connected to a MySQL database. The tech stack used is NextJS, Tailwind CSS, ExpressJS, and MySQL.",
    },
    {
      title: "Personal Web",
      url: "/images/image1.png",
      repo: "https://github.com/akhsanby/personal-web",
      description: "The challenge learning project is to create a personal design and website to showcase a learning portfolio. The tech stack used is NextJS, Bootstrap, and SASS.",
    },
    {
      title: "News App",
      url: "/images/image4.png",
      repo: "https://github.com/akhsanby/koran-online",
      description: "The challenge learning project is to slice a News website by fetching data from a public API. The tech stack used is NextJS and Tailwind CSS.",
    },
    {
      title: "Movie List App",
      url: "/images/image8.png",
      repo: "https://github.com/akhsanby/movie-list",
      description: "The challenge learning project is to slice a Movie List website by fetching data from a public API. The tech stack used is NextJS, SASS, and jQuery.",
    },
    {
      title: "Rock Paper Scissor AI",
      url: "/images/image2.png",
      repo: "https://github.com/akhsanby/rps-v3",
      description: "The Final Project for my college assignment was a challenge given by my professor to create a game using Neural Network Algorithms. The tech stack used is VueJS and CSS.",
    },
    {
      title: "Calculator App",
      url: "/images/image7.png",
      repo: "https://github.com/akhsanby/calculator-app",
      description: "The challenge project from the website https://www.frontendmentor.io to create a calculator without using any frameworks and only using HTML, CSS, and JavaScript.",
    },
    {
      title: "Static Time Tracking App",
      url: "/images/image3.png",
      repo: "https://github.com/akhsanby/tracking-app",
      description: "The challenge project from the website https://www.frontendmentor.io to slice a web layout using React and Windi CSS.",
    },
    {
      title: "Calculator Tip",
      url: "/images/image5.png",
      repo: "https://github.com/akhsanby/calculator-tip",
      description: "The challenge project from the website https://www.frontendmentor.io to create a tip calculator using the tech stack React and Tailwind CSS.",
    },
    {
      title: "Simple E-Commerce",
      url: "/images/image6.png",
      repo: "https://github.com/akhsanby/toko-online",
      description: "The first project I worked on during college with friends was similar to an e-commerce platform, aimed at understanding the concepts of slicing and backend integration. The user interface wasn't very polished because at that time, we were still learning.",
    },
    // {
    //   title: "Simple Apotek Web with Laravel",
    //   url: "/images/image9.png",
    //   repo: "https://github.com/akhsanby/apotek-laravel8",
    // },
    // {
    //   title: "Simple Apotek Web with CodeIgniter",
    //   url: "/images/image10.png",
    //   repo: "https://github.com/akhsanby/apotek",
    // },
  ];

  return (
    <Layout title="Project">
      <Container fluid className={styles.container}>
        <Row className={styles.row_1}>
          <Col md={12}>
            <h1 className="text-light text-start active-link">Projects</h1>
            <p className="text-light">Below is all my learning projects, working project is not included, I'm always trying to improve myself by learning everyday. Some of them are just for fun, feel free to check them out.</p>
          </Col>
        </Row>
        <Row className={styles.row_2}>
          {myProjectImage.map((item, i) => (
            <Col lg={4} md={6} xs={12} key={i} className="d-flex justify-content-center">
              <a href={item.repo} target="_blank" className="text-decoration-none text-dark" rel="noreferrer">
                <Card className={styles.card}>
                  <Card.Img variant="top" src={item.url} />
                  <Card.Body className={styles.card_body}>
                    <Card.Text>{item.title}</Card.Text>
                    <Card.Text className={styles.card_body_description}>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
