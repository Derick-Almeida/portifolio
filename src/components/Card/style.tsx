import styled from "styled-components";

export const Contaier = styled.li`
  width: 30%;
  height: 25vh;

  background: var(--grey-1);
  border-radius: 20px;

  position: relative;
  overflow: hidden;

  border: 5px solid transparent;
  filter: drop-shadow(4px 4px 0px black);
  box-shadow: 2px 2px 15px var(--black) inset, 2px 2px 50px var(--black) inset;

  &:hover {
    box-shadow: 2px 2px 10px var(--purple-2);
    cursor: pointer;

    border: 5px var(--purple-3);
    border-style: double;

    > img {
      transform: scale(1.4);
    }

    > span {
      transform: translateY(0%);

      &::before {
        content: "";
        background: var(--grey-3);
        filter: opacity(0.6);
        transition: 0.4s;

        position: absolute;
        z-index: -1;

        width: 100%;
        height: 100%;
      }
    }

    > p {
      letter-spacing: 8px;
      box-shadow: 0 2px 4px var(--black);
      text-shadow: -2px 2px 1px var(--purple-3);
    }
  }

  > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    transition: 0.4s;
  }

  > span {
    position: absolute;
    z-index: 9;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2rem;
    font-weight: 700;
    color: var(--white);
    text-shadow: 2px 2px 2px var(--black);

    transform: translateY(-100%);
    transition: 0.4s;
    user-select: none;
  }

  > p {
    text-transform: uppercase;
    position: absolute;
    top: 40%;
    left: -25%;

    font-family: var(--font-IBM);
    font-weight: 700;
    font-size: 2rem;
    text-align: center;

    color: var(--white);
    background: var(--purple-0);
    width: 150%;

    transform: rotate(-33deg);
    transition: 0.4s;
    user-select: none;
  }
`;
