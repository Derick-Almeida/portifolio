import styled from "styled-components";

export const Header = styled.header`
  background: linear-gradient(45deg, var(--black), var(--purple-2));
  box-shadow: 0 0 15px var(--purple-3);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10%;
  height: 8vh;

  position: sticky;
  top: 0;
  z-index: 999;

  h1 {
    color: var(--white);
    font-family: var(--font-IBM);
    font-weight: 700;
    font-style: italic;
    font-size: 2rem;

    text-shadow: 1.5px 1.5px 1px var(--purple-1);
    -webkit-box-reflect: below -13px linear-gradient(transparent, transparent, #00000033);
  }

  nav {
    > ul {
      display: flex;
      gap: 15px;
      > li a {
        color: var(--grey-2);
        font-family: var(--font-IBM);
        font-weight: 400;
        font-size: 1rem;

        &:hover {
          color: var(--white);
          border-bottom: 2px solid var(--white);
        }
      }
    }
  }

  .active {
    font-weight: 700;
    color: var(--white);
    border-bottom: 2px solid var(--white);
  }

  @media (max-width: 425px) {
    padding: 0 5%;
    justify-content: center;

    h1 {
      white-space: nowrap;
    }

    nav {
      display: none;
    }
  }
`;
