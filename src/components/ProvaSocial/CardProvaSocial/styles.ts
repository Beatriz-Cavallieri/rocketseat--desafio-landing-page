import styled from 'styled-components';
import { min, max } from '../../../styles/styleFunctions';

export const Conteudo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    q {
        font-size: 20px;
        font-weight: 400;
        line-height: 1.4em;
        margin-bottom: 1em;
        margin-top: 1em;
    }

    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    background-color: var(--cor-fundo);
    padding: 44px 32px;
    border-radius: var(--raio-borda);
    box-shadow: 1px 1px 3px gray;
    max-width: 500px;

    text-align: center;

    p {
        font-weight: 500;
        text-align: justify;
    }

    ${min('1100px')} {
        & + div {
            margin-left: 5%;
        }
    }
    ${max('1100px')} {
        & + div {
            margin-top: 5%;
        }
    }
`;

export const Autoria = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
