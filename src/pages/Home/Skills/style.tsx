import styled from "styled-components";

export const Container = styled.section`
  height: 84vh;
  padding: 10vh 10%;

  background: var(--black);

  > h2 {
    font-size: 2rem;
    color: var(--white);
    text-decoration: underline;
    text-shadow: -2px 2px 4px var(--black);
    text-align: center;

    margin-bottom: 5vh;
    position: relative;
    user-select: none;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5vh;

    > div {
      background: var(--purple-1);
      border-radius: 20px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;

      width: 30%;
      height: 30vh;

      > img {
        width: 30%;
        object-fit: contain;
      }

      > span {
        color: var(--white);
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 15vh 10%;

    .content {
      gap: 3vh;

      > div {
        width: 30%;
        height: 25vh;

        > span {
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 425px) {
    padding: 10vh 5%;

    .content div {
      width: 46%;
      height: 20vh;

      > span {
        font-size: 1rem;
      }
    }
  }
`;
