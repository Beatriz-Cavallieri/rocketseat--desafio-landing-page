import styled from 'styled-components';
import { min, max } from '../../styles/styleFunctions';

export const Titulo = styled.h1`
    @media (max-width: 900px) {
        --font-size: 9vw;
        --letter-spacing: 1vw;
    }

    @media (min-width: 900px) {
        --font-size: 5vw;
        --letter-spacing: 2vw;
    }

    width: 100%;
    padding-top: 0.3em;
    padding-bottom: 0.8em;
    text-transform: uppercase;
    font-weight: lighter;
    text-align: center;
    color: #333;
    opacity: 0.3;
    font-size: 8vw;
    letter-spacing: 2vw;
    ${min('560px')} {
        font-size: 8vw;
        letter-spacing: 2vw;
    }
    ${min('680px')} {
        font-size: 7vw;
        letter-spacing: 2.3vw;
    }
    ${min('920px')} {
        font-size: 48px;
        letter-spacing: 0.7em;
        padding-top: 0.5em;
    }
`;
