import styled from 'styled-components';
import { min } from '../../../styles/styleFunctions';

export const Conteudo = styled.div`
    width: 100%;

    border: 1px solid #666;
    border-radius: var(--raio-borda);

    padding: 16px;
    display: flex;
    align-items: center;

    color: #222;

    svg {
        margin-right: 8px;
        color: #666;
    }

    input {
        font-size: 18px;
        background-color: transparent;
        color: #222;
        border: none;
        &::placeholder {
            color: #666;
        }
    }
    ${min('1100px')} {
        padding: 24px 50px;
        font-size: 28px;
    }
`;
