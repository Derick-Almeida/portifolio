import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import { Container } from "./style";

const Home = () => {
  return (
    <>
      <NavBar />
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
          </div>
          <div className="parallax--thumb"></div>
        </section>
        <section id="projects"></section>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
