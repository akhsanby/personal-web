import { Navbar, Container, Nav } from "react-bootstrap";

// custom styles
import styles from "../../styles/Footer.module.scss";

export default function _Footer() {
  const navLink = [
    {
      name: "Github",
      url: "https://github.com/akhsanby",
      iconClass: "fab fa-github",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/akhsanby",
      iconClass: "fab fa-linkedin",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/akhsanby",
      iconClass: "fab fa-instagram",
    },
    {
      name: "Email",
      url: "mailto:akhsanby@gmail.com",
      iconClass: "far fa-envelope",
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" className={styles.navbar}>
      <Container>
        <Nav className="vw-100 d-flex justify-content-around align-items-center">
          {navLink.map((item, i) => (
            <Nav.Link href={item.url} target="_blank" key={i}>
              <i className={item.iconClass}></i>
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}
