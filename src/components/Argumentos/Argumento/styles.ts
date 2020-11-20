import styled from 'styled-components';
import { min, max } from '../../../styles/styleFunctions';

export const Conteudo = styled.div`
    background-color: var(--cor-fundo);
    padding: 32px;
    border-radius: var(--raio-borda);
    box-shadow: 1px 1px 6px gray;
    opacity: 0.8;

    flex: 1;
    text-align: center;

    h3,
    p {
        margin-top: 0.7em;
    }

    h3 {
        font-size: 26px;
        padding-bottom: 0.5em;
        border-bottom: 2px solid;
    }

    p {
        font-weight: 400;
        text-align: justify;
        line-height: 1.4em;
    }

    ${min('960px')} {
        & + div {
            margin-left: 5%;
        }
    }
    ${max('960px')} {
        & + div {
            margin-top: 5%;
        }
    }
`;
