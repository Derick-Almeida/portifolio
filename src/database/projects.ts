import { doitImageDesktop } from "../assets/projects/doit";
import {
  nukenzieImageDesktop,
  nukenzieImageMobile,
} from "../assets/projects/nukenzie";
import {
  protifolioImageDesktop,
  protifolioImageMobile,
} from "../assets/projects/portifolio";

const projects = [
  {
    id: 0,
    name: "Nukenzie",
    description:
      "Nu Kenzie é uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas.",
    image: {
      desktop: [...nukenzieImageDesktop],
      mobile: [...nukenzieImageMobile],
    },
    technologies: ["HTML", "JavaScript"],
    githubCode: "https://github.com/Derick-Almeida/nukenzie",
    application: "https://nukenzie-mu.vercel.app/",
    active: true,
  },
  {
    id: 1,
    name: "Do.it",
    description:
      "Do.it é uma aplicação que auxilia os usuários no dia a dia, através do gerenciamento de Tasks.",
    image: { desktop: [...doitImageDesktop], mobile: [] },
    technologies: ["HTML", "JavaScript"],
    githubCode: "https://github.com/Derick-Almeida/do.it/tree/main",
    application: "https://do-it-sooty.vercel.app",
    active: true,
  },
  {
    id: 2,
    name: "Portifolio",
    description: "Meu portfólio pessoal, o site que você está agora",
    image: {
      desktop: [...protifolioImageDesktop],
      mobile: [...protifolioImageMobile],
    },
    technologies: ["HTML", "TypeScript"],
    githubCode: "https://github.com/Derick-Almeida/portifolio",
    application: "https://portifolio-kappa-one.vercel.app/",
    active: true,
  },
  {
    id: 3,
    name: "",
    description: "",
    image: { desktop: [], mobile: [] },
    technologies: [],
    githubCode: "",
    application: "",
    active: false,
  },
  {
    id: 4,
    name: "",
    description: "",
    image: { desktop: [], mobile: [] },
    technologies: [],
    githubCode: "",
    application: "",
    active: false,
  },
  {
    id: 5,
    name: "",
    description: "",
    image: { desktop: [], mobile: [] },
    technologies: [],
    githubCode: "",
    application: "",
    active: false,
  },
];

export default projects;
