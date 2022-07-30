import { Header } from "./style";

const NavBar = () => {
  return (
    <Header>
      <h1>Dérick Almeida</h1>

      <nav>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#contacts">Contatos</a>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default NavBar;
