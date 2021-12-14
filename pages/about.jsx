import Image from "next/image";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import Layout from "../src/components/Layout";

// icons
import {
  SiSass,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiCodeigniter,
  SiLaravel,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

// custom styles
import styles from "../styles/About.module.scss";

export default function About() {
  const skillIcons = [
    { name: "SASS", icon: <SiSass /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Javascript", icon: <SiJavascript /> },
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "Vue", icon: <SiVuedotjs /> },
  ];

  const familiarIcons = [
    { name: "PHP", icon: <SiPhp /> },
    { name: "NodeJS", icon: <SiNodedotjs /> },
    { name: "ExpressJS", icon: <SiExpress /> },
    { name: "Codeigniter", icon: <SiCodeigniter /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  return (
    <Layout>
      <Container fluid>
        <div className={styles.subcontainer}>
          <div className="card bg-dark" style={{ maxWidth: "40rem" }}>
            <div className="row g-0">
              <div className="col-md-4 m-auto text-center">
                <Image
                  src="/images/pp.png"
                  alt="pic"
                  width={200}
                  height={200}
                  className={styles.img}
                  priority
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
              <div className="col-md-12">
                <p className="text-white fs-5 fw-bold m-0">My Skills</p>
                <div className="d-flex justify-content-around">
                  {skillIcons.map((item, i) => (
                    <OverlayTrigger
                      key={i}
                      placement="bottom"
                      overlay={
                        <Tooltip id="tooltip-bottom">{item.name}</Tooltip>
                      }
                    >
                      <i className="text-white fs-3">{item.icon}</i>
                    </OverlayTrigger>
                  ))}
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <p className="text-white fs-5 fw-bold m-0">Im familiar with</p>
                <div className="d-flex justify-content-around">
                  {familiarIcons.map((item, i) => (
                    <OverlayTrigger
                      key={i}
                      placement="bottom"
                      overlay={
                        <Tooltip id="tooltip-bottom">{item.name}</Tooltip>
                      }
                    >
                      <i className="text-white fs-3">{item.icon}</i>
                    </OverlayTrigger>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
