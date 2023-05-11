import Link from "next/link";

// components
import Layout from "../src/components/Layout";
import { Button } from "react-bootstrap";

// custom style
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className={styles.title}>
          <span>Hello, I'am</span>
          <span>Akhsan Bayu</span>
          <span>i'm Frontend Developer</span>
          <span>I'm tech enthusiasm who like coding mostly in FrontEnd Development, I have passion for responsive website & mobile-first design</span>
        </h1>
        <div className={styles.btn}>
          <Link href="/contact">
            <Button variant="info">Contact Me</Button>
          </Link>
          <a href="/cv/my_cv.pdf">
            <Button variant="info">My CV</Button>
          </a>
        </div>
      </div>
    </Layout>
  );
}
