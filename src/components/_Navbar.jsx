import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Container, Nav } from "react-bootstrap";

// custom style
import styles from "../../styles/Navbar.module.scss";

export default function _Navbar() {
  const { pathname } = useRouter();

  const navbarLink = [
    { name: "Home", url: "/" },
    { name: "About Me", url: "/about" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={styles.navbar}
    >
      <Container>
        <Link href="/">
          <a className="fw-bold navbar-brand">99On</a>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={styles.nav}>
            {navbarLink.map((item, i) => (
              <Link href={item.url} key={i}>
                <a
                  className={
                    pathname == item.url ? "nav-link active-link" : "nav-link"
                  }
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
