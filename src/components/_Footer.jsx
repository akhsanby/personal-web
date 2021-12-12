import { Navbar, Container, Nav } from "react-bootstrap";

// custom styles
import styles from "../../styles/Footer.module.scss";

export default function _Footer() {
  return (
    <Navbar bg="dark" variant="dark" className={styles.navbar}>
      <Container>
        <Nav className="vw-100 d-flex justify-content-around align-items-center">
          <Nav.Link href="https://github.com/akhsanby" target="_blank">
            <i className="bi bi-github"></i>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/akhsanby" target="_blank">
            <i className="bi bi-linkedin"></i>
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/akhsanby" target="_blank">
            <i className="bi bi-instagram"></i>
          </Nav.Link>
          <Nav.Link
            href="mailto:akhsanby@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-envelope"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
