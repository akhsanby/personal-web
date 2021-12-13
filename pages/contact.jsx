import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../src/components/Layout";

// custom styles
import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <Layout>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Container>
          <Row className="justify-content-sm-center">
            <Col lg={4} md={5} sm={6}>
              <p className="text-white fs-1 fw-bold">Get in touch</p>
              <p className="text-white m-0">
                Fill in the form to start a conversation with me
              </p>
              <ul className={styles.ul}>
                <li className="d-flex align-items-center gap-2">
                  <i className="fas fa-map-marker-alt"></i>
                  <span className="text-white">
                    Banyuurip, Tegalrejo, Magelang, Central Java, Indonesia
                  </span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="fas fa-phone-alt"></i>
                  <span className="text-white">+62 895 4012 24170</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="far fa-envelope"></i>
                  <span className="text-white">akhsanby@gmail.com</span>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={5} sm={6}>
              <Form>
                <Row>
                  <Col lg={12} md={12} sm={12} xs={6}>
                    <Form.Group
                      className="mb-3 text-white"
                      controlId="full-name"
                    >
                      <Form.Label>Your Full Name</Form.Label>
                      <Form.Control type="text" placeholder="your full name" />
                    </Form.Group>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={6}>
                    <Form.Group className="mb-3 text-white" controlId="email">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3 text-white" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="type message here"
                  />
                </Form.Group>
                <Button className={styles.btn} variant="info">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
