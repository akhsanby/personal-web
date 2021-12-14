import { Navbar, Container, Nav } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsEnvelope, BsInstagram } from "react-icons/bs";

// custom styles
import styles from "../../styles/Footer.module.scss";

export default function _Footer() {
  const navLink = [
    {
      name: "Github",
      url: "https://github.com/akhsanby",
      icon: <BsGithub />,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/akhsanby",
      icon: <BsLinkedin />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/akhsanby",
      icon: <BsInstagram />,
    },
    {
      name: "Email",
      url: "mailto:akhsanby@gmail.com",
      icon: <BsEnvelope />,
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" className={styles.navbar}>
      <Container>
        <Nav className="vw-100 d-flex justify-content-around align-items-center">
          {navLink.map((item, i) => (
            <Nav.Link href={item.url} target="_blank" key={i}>
              <i>{item.icon}</i>
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}
