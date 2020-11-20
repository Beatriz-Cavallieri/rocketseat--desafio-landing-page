import styled from 'styled-components';
import { min, max } from '../../styles/styleFunctions';

export const Form = styled.form`
    flex: 1;
    min-width: 45%;
    ${min('768px')} {
        button {
            margin-top: 16px;
        }
    }
`;

export const Conteudo = styled.div`
    border-radius: var(--raio-borda);
    background-color: var(--cor-fundo);
    padding: 24px;
    margin-top: 24px;
    margin-bottom: 24px;

    display: flex;
    flex-direction: column;
    opacity: 0.8;
    box-shadow: 1px 1px 6px gray;

    width: 100%;

    font-size: 26px;

    ${max('960px')} {
        text-align: center;
        form {
            margin-top: 44px;
        }
        button {
            margin-top: 16px;
        }
    }

    ${min('768px')} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 44px;
        p {
            margin-right: 32px;
            text-align: center;
        }
    }
`;
