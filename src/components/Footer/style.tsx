import styled from "styled-components";

export const ThemeFooter = styled.footer`
  height: 8vh;
  padding: 0 10%;
  background: linear-gradient(45deg, var(--black), var(--purple-2));

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > span {
    color: var(--white);
    font-size: 1rem;
    font-weight: 400;
  }

  > div {
    display: flex;
    gap: 15px;
    align-items: baseline;
    > p {
      color: var(--white);
    }

    > a {
      color: var(--white);
      padding: 7px 10px;
      border-radius: 5px;
    }

    > a:nth-child(2) {
      background: #00ff0099;
      &:hover {
        background: #00ff00;
      }
    }

    > a:nth-child(3) {
      background: #0000ff99;
      &:hover {
        background: #0000ff;
      }
    }

    > a:nth-child(4) {
      background: #ff000099;
      &:hover {
        background: #ff0000;
      }
    }
  }

  @media (max-width: 425px) {
    > span {
      display: none;
    }
  }
`;
