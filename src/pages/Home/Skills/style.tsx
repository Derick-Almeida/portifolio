import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  padding: 15vh 10%;

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
`;
