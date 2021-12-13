import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../src/components/Layout";

// custom styles
import styles from "../styles/Service.module.scss";

export default function Service() {
  return (
    <Layout>
      <Container fluid>
        <Row className="d-flex vh-100 justify-content-center align-items-center">
          <Col lg={2}>
            <Image
              src="https://via.placeholder.com/400x400"
              alt="pic"
              width={200}
              height={200}
              className={styles.img}
            />
          </Col>
          <Col lg={4}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              obcaecati, itaque, in aspernatur tempora vel, voluptatibus
              officiis ipsum molestias ratione distinctio natus inventore
              consequuntur consequatur recusandae doloribus nisi nulla magni!
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
