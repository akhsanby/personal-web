import Image from "next/image";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

import Layout from "../src/components/Layout";

// custom styles
import styles from "../styles/Portfolio.module.scss";

export default function Portfolio() {
  return (
    <Layout>
      <div className={styles.bg}>
        <Container fluid>
          <Row className={styles.row}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <Col lg={3} key={i}>
                <Card className={styles.card}>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/500x300?text=Visit+Blogging.com+Now"
                  />
                  <Card.Body className={styles.card_body}>
                    <Card.Text>Card Title</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
