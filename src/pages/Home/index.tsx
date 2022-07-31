import { useState } from "react";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import { BsGithub } from "react-icons/bs";

import Projects from "./Projects";
import Skills from "./Skills";

import { Container } from "./style";

const Home = () => {
  const [active, setActive] = useState("#");

  return (
    <>
      <NavBar active={active} setActive={setActive} />
      <Container>
        <section id="home" className="home">
          <div className="content">
            <span>Olá, meu nome é Dérick</span>
            <h2>
              Eu <span>amo</span> criar e <span>desenvolver</span> projetos
            </h2>
            <p>
              Descubra aqui neste ambiente, criado especialmente para você,
              todos os meus projetos e tecnologias
            </p>
            <div className="buttons">
              <a href="#projects" onClick={() => setActive("#projects")}>
                Ver projetos
              </a>
              <a
                href="https://github.com/Derick-Almeida"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub /> GitHub
              </a>
            </div>
          </div>
          <div className="parallax--thumb"></div>
        </section>

        <Projects />
        <Skills />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
