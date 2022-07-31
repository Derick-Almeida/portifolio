import { useState } from "react";
import { CardImage, Container } from "./style";

interface ProjectImages {
  desktop: string[];
  mobile: string[];
}

interface ImageProps {
  images: ProjectImages;
}

const ContainerImage = ({ images }: ImageProps) => {
  const [projectImages] = useState<string[]>([...images.desktop]);

  const [featuredImage, setFeaturedImage] = useState(projectImages[0]);

  return (
    <Container className="image--container">
      <CardImage className="showcase" img={featuredImage} />
      <div className="previews">
        {projectImages.map((image) => (
          <CardImage
            style={{
              border: featuredImage === image ? "5px solid #623CEA" : "none",
            }}
            key={image}
            img={image}
            onClick={() => setFeaturedImage(image)}
          />
        ))}
      </div>
    </Container>
  );
};

export default ContainerImage;
