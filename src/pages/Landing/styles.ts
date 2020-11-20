import styled from 'styled-components';
import { min, max } from '../../styles/styleFunctions';
import camaleao from '../../assets/images/camaleao.png';

export const ConteudoLanding = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    // Imagem de fundo
    background: url(${camaleao});
    background-repeat: no-repeat;
    background-position-y: 100px;
    background-position-x: -650px;

    padding-left: 5%;
    padding-right: 5%;

    // Breakpoints imagem de fundo
    ${min('768px')} {
        background-position-x: -550px;
    }
    ${min('1000px')} {
        background-position-x: -400px;
    }
    ${min('1440px')} {
        background-position-x: -300px;
    }

    ${min('2000px')} {
        background-position-x: -100px;
    }

    ${min('960px')} {
        padding-left: 10%;
        padding-right: 10%;
    }
`;
