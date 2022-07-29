import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --white: #FFFFFF;
        --hotPink: #FF0062;
    }
    body {
        background: #222;
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
