import { Row, Col, Container, Card } from "react-bootstrap";
import Layout from "../src/components/Layout";

// custom styles
import styles from "../styles/Portfolio.module.scss";

export default function Portfolio() {
  const myPortfolioImage = [
    {
      title: "Portfolio Web",
      url: "/images/image1.png",
      repo: "https://github.com/akhsanby/my-portfolio",
    },
    {
      title: "Rock Paper Scissor AI",
      url: "/images/image2.png",
      repo: "https://github.com/akhsanby/rps-v3",
    },
    {
      title: "Static Time Tracking App",
      url: "/images/image3.png",
      repo: "https://github.com/akhsanby/tracking-app",
    },
  ];

  return (
    <Layout>
      <div className={styles.bg}>
        <Container>
          <Row className={styles.row}>
            {myPortfolioImage.map((item, i) => (
              <Col
                lg={4}
                xs={12}
                key={i}
                className="d-flex justify-content-center"
              >
                <a
                  href={item.repo}
                  target="_blank"
                  className="text-decoration-none text-dark"
                  rel="noreferrer"
                >
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
      </div>
    </Layout>
  );
}
