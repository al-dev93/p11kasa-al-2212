import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 142.6%;
    };
    li,footer {
        box-sizing: border-box;
        font-weight: 500;
        font-size: 24px;
        line-height: 142.6%;
    };
`;

export default GlobalStyle;
