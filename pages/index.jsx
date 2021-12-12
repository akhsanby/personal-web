// components
import Layout from "../src/components/Layout";
import { Button } from "react-bootstrap";

// custom style
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className="bg-dark vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className={styles.title}>
          <span>Hello, I'am</span>
          <span>Akhsan Bayu</span>
          <span>i'm Frontend Developer</span>
          <span>
            I'm tech enthusiasm who like coding mostly in FrontEnd Development,
            I like learn about tech, programming and something new!
          </span>
        </h1>
        <div className={styles.btn}>
          <Button variant="info">Contact Me</Button>
          <Button variant="info">My Resume</Button>
        </div>
      </div>
    </Layout>
  );
}
