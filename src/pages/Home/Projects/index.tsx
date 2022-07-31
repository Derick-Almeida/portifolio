import { Container } from "./style";
import database from "../../../database/projects";
import { useState } from "react";
import Card from "../../../components/Card";

const Projects = () => {
  const [data] = useState(database);

  return (
    <Container id="projects">
      <h2>Projetos</h2>
      <ul>
        {data.map((project) => (
          <Card key={project.id} projectData={project} />
        ))}
      </ul>
    </Container>
  );
};

export default Projects;
