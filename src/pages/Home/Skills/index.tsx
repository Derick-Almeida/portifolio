import { useState } from "react";

import technologies from "../../../assets/tech";

import { Container } from "./style";

const Skills = () => {
  const [techs] = useState(technologies);
  return (
    <Container id="skills">
      <h2>Habilidades</h2>

      <div className="content">
        {techs.map((tech) => (
          <div key={tech.name}>
            <img src={tech.img} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
