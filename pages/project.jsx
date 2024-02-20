import { Row, Col, Container, Card } from "react-bootstrap";
import Layout from "../src/components/Layout";

// custom styles
import styles from "../styles/Project.module.scss";

export default function Project() {
  const myProjectImage = [
    {
      title: "Grocery Online Responsive Template",
      url: "/images/image13.png",
      repo: "https://github.com/akhsanby/grocery-online-new",
    },
    {
      title: "Advance Memory Game",
      url: "/images/image12.png",
      repo: "https://github.com/akhsanby/memory-game",
    },
    {
      title: "Fullstack Todo List",
      url: "/images/image11.png",
      repo: "https://github.com/akhsanby/full-stack-todolist",
    },
    {
      title: "Personal Web",
      url: "/images/image1.png",
      repo: "https://github.com/akhsanby/personal-web",
    },
    {
      title: "News App",
      url: "/images/image4.png",
      repo: "https://github.com/akhsanby/koran-online",
    },
    {
      title: "Movie List App",
      url: "/images/image8.png",
      repo: "https://github.com/akhsanby/movie-list",
    },
    {
      title: "Rock Paper Scissor AI",
      url: "/images/image2.png",
      repo: "https://github.com/akhsanby/rps-v3",
    },
    {
      title: "Calculator App",
      url: "/images/image7.png",
      repo: "https://github.com/akhsanby/calculator-app",
    },
    {
      title: "Static Time Tracking App",
      url: "/images/image3.png",
      repo: "https://github.com/akhsanby/tracking-app",
    },
    {
      title: "Calculator Tip",
      url: "/images/image5.png",
      repo: "https://github.com/akhsanby/calculator-tip",
    },
    {
      title: "Simple E-Commerce",
      url: "/images/image6.png",
      repo: "https://github.com/akhsanby/toko-online",
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
