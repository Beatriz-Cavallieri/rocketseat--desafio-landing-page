import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    :root {
        --cor-fundo: #c6cbb0;
        --cor-texto-primaria: #3d4631;
        --tamanho-fonte-regular: 20px;
        --amarelo: #bb8103;
        --raio-borda: 8px;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    body {
        font-family: 'Roboto', sans-serif;
        font-size: var(--tamanho-fonte-regular);
        background-color: var(--cor-fundo);
        color: var(--cor-texto-primaria);
        -webkit-font-smoothing: antialiased !important;
        font-weight: normal;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 500;
    }
    button, a {
        cursor: pointer;
    }
`;
