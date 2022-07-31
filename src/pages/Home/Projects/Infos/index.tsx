import { Container, Content } from "./style";
import ContainerImage from "../ContainerImage";

import { AiOutlineClose } from "react-icons/ai";
import { TiArrowForward } from "react-icons/ti";
import { BsGithub } from "react-icons/bs";

interface ProjectImages {
  desktop: string[];
  mobile: string[];
}

interface CardProps {
  id: number;
  name: string;
  description: string;
  image: ProjectImages;
  technologies: string[];
  githubCode: string;
  application: string;
  active: boolean;
}

interface ProjectDataProps {
  projectData: CardProps;
  setMoreInfos: any;
}

const Infos = ({ projectData, setMoreInfos }: ProjectDataProps) => {
  const { name, description, application, githubCode, technologies, image } =
    projectData;

  return (
    <Container>
      <Content>
        <AiOutlineClose onClick={() => setMoreInfos(false)} />

        <ContainerImage images={image} />

        <div className="infos--container">
          <h2>{name}</h2>
          <p>{description}</p>
          <div className="tech">
            Linguagens:
            {technologies.map((tech) => (
              <span key={tech + name}>{tech}</span>
            ))}
          </div>
          <div className="buttons">
            <a href={githubCode} rel="noreferrer" target="_blank">
              <BsGithub /> Código do GitHub
            </a>
            <a href={application} rel="noreferrer" target="_blank">
              <TiArrowForward /> Aplicação
            </a>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Infos;
