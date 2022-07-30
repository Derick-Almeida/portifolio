import { useEffect, useState } from "react";
import Infos from "../../pages/Home/Projects/Infos";
import { Contaier } from "./style";

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
}

const Card = ({ projectData }: ProjectDataProps) => {
  const { name, image, active } = projectData;

  const [moreInfos, setMoreInfos] = useState(false);

  useEffect(() => {
    if (moreInfos) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [moreInfos]);

  return (
    <>
      {active && (
        <Contaier onClick={() => setMoreInfos(true)}>
          <span>{name}</span>
          <img src={image.desktop[0]} alt={name} />
        </Contaier>
      )}
      {!active && (
        <Contaier>
          <p className="coming--soon">Em Breve</p>
        </Contaier>
      )}
      {moreInfos && (
        <Infos projectData={projectData} setMoreInfos={setMoreInfos} />
      )}
    </>
  );
};

export default Card;
