/* eslint-disable jsx-a11y/anchor-is-valid */
import { Header } from "./style";

interface NavBarProps {
  active: string;
  setActive: (e: string) => void;
}

const NavBar = ({ active, setActive }: NavBarProps) => {
  return (
    <Header>
      <h1>Dérick Almeida</h1>

      <nav>
        <ul>
          <li>
            <a
              href="#"
              className={active === "#" ? "active" : ""}
              onClick={() => setActive("#")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={active === "#projects" ? "active" : ""}
              onClick={() => setActive("#projects")}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={active === "#skills" ? "active" : ""}
              onClick={() => setActive("#skills")}
            >
              Habilidades
            </a>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default NavBar;
