import styled, { keyframes } from "styled-components";

const scale = keyframes`
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  background: #00000099;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: var(--grey-1);
  width: 70%;
  height: 70%;

  border-radius: 20px;
  box-shadow: 2px 2px 5px var(--purple-0);

  display: flex;
  position: relative;
  overflow: hidden;

  animation: ${scale} 0.2s linear;
  transition: 0.4s;

  > svg {
    cursor: pointer;

    color: var(--black);
    font-weight: 700;
    font-size: 2rem;

    position: absolute;
    right: 3%;
    top: 3%;

    &:hover {
      color: var(--grey-3);
    }
  }

  .infos--container {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;

    padding: 8vh 6%;

    > h2 {
      font-size: 2.5rem;
      font-weight: 700;
      font-family: var(--font-IBM);
      color: var(--purple-3);

      text-decoration: underline;
      text-shadow: -2px 2px 2px var(--purple-1);
      -webkit-text-stroke: 0.5px var(--white);

      margin-bottom: 50px;
    }

    > p {
      font-weight: 400;
      font-size: 1rem;
      color: var(--grey-3);

      width: 100%;
    }

    .tech {
      display: flex;
      gap: 10px;
      align-items: baseline;

      font-size: 1.2rem;
      font-weight: 500;
      color: var(--grey-3);

      width: 100%;

      > span {
        background: var(--purple-0);
        border-radius: 10px;

        color: var(--white);
        font-weight: 400;
        font-size: 1rem;

        padding: 5px 10px;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 15px;

      width: 100%;

      > a {
        color: var(--black);
        background: var(--white);

        padding: 5px 10px;
        border-radius: 10px;

        border: 2px solid var(--white);

        font-size: 1rem;
        font-weight: 500;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  @media (min-width: 1600px) {
    > svg {
      font-size: 2rem;
    }

    .infos--container {
      gap: 50px;

      > h2 {
        font-size: 3rem;
      }

      > p {
        font-size: 1.5rem;
      }

      .tech {
        font-size: 1.5rem;

        > span {
          font-size: 1rem;
        }
      }

      .buttons {
        > a {
          font-size: 1.5rem;
          white-space: nowrap;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 70%;

    > svg {
      font-size: 1.8rem;
    }

    .infos--container {
      gap: 30px;
      padding: 8vh 4%;

      > h2 {
        margin-bottom: 35px;
      }

      .tech {
        display: flex;
        flex-wrap: wrap;
      }

      .buttons {
        flex-direction: column;
        margin-top: 20px;

        > a {
          white-space: nowrap;
        }
      }
    }
  }

  @media (max-width: 425px) {
    width: 95%;
    height: 85%;

    margin-top: 40px;
    flex-direction: column-reverse;

    .infos--container {
      width: 100%;
      padding: 2vh 5%;
      gap: 35px;

      > h2 {
        margin-bottom: 5px;
      }

      .buttons {
        flex-direction: row;
        margin-top: 0;
      }
    }
  }

  @media (max-width: 320px) {
    .infos--container {
      gap: 25px;

      .buttons {
        flex-direction: column;
      }
    }
  }
`;
