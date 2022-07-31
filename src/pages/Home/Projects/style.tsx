import styled from "styled-components";

export const Container = styled.section`
  padding: 15vh 15% 30vh 15%;
  height: 100vh;
  max-height: 100vh;

  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    background: linear-gradient(
      var(--purple-0),
      var(--purple-1),
      var(--purple-2),
      var(--purple-3),
      var(--black)
    );
    filter: blur(100px);
  }

  > h2 {
    font-size: 2rem;
    color: var(--white);
    text-decoration: underline;
    text-shadow: -2px 2px 4px var(--black);

    margin-bottom: 5vh;
    position: relative;
    user-select: none;
  }

  > ul {
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5vh;
  }

  @media (max-width: 768px) {
    padding: 20vh 10% 30vh 10%;

    > ul {
      gap: 0;
    }
  }

  @media (max-width: 425px) {
    padding: 12vh 5%;
  }
`;
