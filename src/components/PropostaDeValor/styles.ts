import styled from 'styled-components';
import { min, max } from '../../styles/styleFunctions';

export const Conteudo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    margin-bottom: 250px;

    h1 {
        font-size: 44px;
        font-family: 'Titillium Web', serif;
        line-height: 1em;
    }
    p,
    h1 {
        margin-bottom: 16px;
    }
    ${max('560px')} {
        padding-left: 0;
        text-align: center;
        align-items: center;
        p {
            text-align: justify;
            padding-left: 16px;
            padding-right: 16px;
            font-size: 25px;
        }
    }
    ${min('560px')} {
        align-items: flex-end;
        text-align: right;
        p {
            font-size: 32px;
        }
    }
    ${min('768px')} {
        h1 {
            font-size: 67px;
            margin-top: 40px;
        }
        p {
            margin-bottom: 2em;
            padding-left: 15%;
        }
    }
    ${min('1100px')} {
        h1 {
            margin-top: 90px;
            padding-left: 15%;
        }
        p {
            margin-bottom: 2em;
            padding-left: 30%;
            max-width: 1300px;
        }
    }
`;
