import Image from "next/image";
import { Container } from "react-bootstrap";

import Layout from "../src/components/Layout";

// custom styles
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <Layout>
      <Container fluid>
        <div className="d-flex vh-100 justify-content-center align-items-center">
          <div className="card bg-dark" style={{ maxWidth: "40rem" }}>
            <div className="row g-0">
              <div className="col-md-4 m-auto text-center">
                <Image
                  src="/images/pp.png"
                  alt="pic"
                  width={200}
                  height={200}
                  className={styles.img}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text text-white fw-bold fs-5">
                    Hello, my name is Akhsan Bayu Riantama, my surname is
                    Akhsan.
                  </p>
                  <p className="card-text text-white">
                    I'm tech enthusiasm who like coding mostly in FrontEnd
                    Development, I like learn about tech, programming and
                    something new!.
                  </p>
                  <p className="card-text text-white">
                    I have skill for backend and of course frontend development,
                    i always make my code is{" "}
                    <span className="text-info">clean and easy to read</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
