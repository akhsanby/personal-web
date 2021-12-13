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
  ];

  return (
    <Layout>
      <div className={styles.bg}>
        <Container fluid>
          <Row className={styles.row}>
            {myPortfolioImage.map((item, i) => (
              <a
                href={item.repo}
                target="_blank"
                key={i}
                className="text-decoration-none text-dark"
                rel="noreferrer"
              >
                <Col lg={3}>
                  <Card className={styles.card}>
                    <Card.Img variant="top" src={item.url} />
                    <Card.Body className={styles.card_body}>
                      <Card.Text>{item.title}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </a>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
