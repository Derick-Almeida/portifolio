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
    display: flex;
    gap: 8px;

    padding: 3% 0;
    background: var(--black);
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 15px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--purple-2);
      border-radius: 50px;
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
