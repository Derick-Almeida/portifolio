import styled from "styled-components";

interface ImageProp {
  img: string;
}

export const Container = styled.div`
  width: 50%;
  height: 100%;
  background: var(--black);

  .showcase {
    height: 75%;
    width: 100%;
  }

  .previews {
    height: 24%;
    max-width: 100%;

    display: flex;
    gap: 8px;
    justify-content: space-evenly;

    padding: 3% 0;
    background: var(--black);
    overflow: hidden;
  }

  @media (max-width: 425px) {
    width: 100%;

    .previews {
      gap: 0;

      padding: 1% 0;
    }
  }
`;

export const CardImage = styled.div<ImageProp>`
  background: url(${(props) => props.img}) var(--purple-3) center no-repeat;
  background-size: contain;

  width: 30%;
  height: 100%;

  flex: none;
  cursor: pointer;
`;
