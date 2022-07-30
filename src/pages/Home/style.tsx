import styled from "styled-components";

import thumb from "../../../src/assets/thumb.svg";
import bgSpace from "../../../src/assets/bg-space.svg";

export const Container = styled.main`
  section {
    min-height: 92vh;
  }

  .home {
    display: flex;

    background: url(${bgSpace}) no-repeat;

    > div {
      width: 50%;
      height: 92vh;
    }

    .content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 35px;

      padding: 0 5% 0 10%;

      > span {
        color: var(--white);
        font-weight: 400;
        font-size: 1rem;
      }

      > h2 {
        color: var(--white);
        font-family: var(--font-IBM);
        font-weight: 700;
        font-size: 2.2rem;

        filter: drop-shadow(2px 4px 5px var(--black));
        text-shadow: 1.5px 1.5px 2px #6b1f43;

        > span {
          color: var(--purple-0);
        }
      }
      > p {
        color: var(--grey-2);
        font-weight: 400;
        font-size: 1rem;
      }
    }

    .parallax--thumb {
      background: url(${thumb}) no-repeat right fixed;
    }
  }
`;
