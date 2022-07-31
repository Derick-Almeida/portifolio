import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    :root{
        --white: #FFFFFF;
        --black: #000000;
        --purple-0: #623CEA;
        --purple-1: #46009b;
        --purple-2: #420D76;
        --purple-3: #280054;
        --grey-1: #BDBDBD;
        --grey-2: #8F8F8F;
        --grey-3:#222222;
        --font-IBM: 'IBM Plex Sans', sans-serif;
    }
    html{
        scroll-behavior: smooth;
    }
    html::-webkit-scrollbar{
        display: none;
    }
    body {
        overflow: hidden;
        background: var(--grey-3);

        @media (max-width: 425px) {
            overflow: auto;
        }
    }
    button{
        cursor: pointer;
        outline: none;
    }
    a{
        text-decoration: none;
    }
    ul,ol,li{
        list-style: none;
    }
`;
