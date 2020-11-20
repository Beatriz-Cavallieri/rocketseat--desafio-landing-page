import styled from 'styled-components';
import { shade } from 'polished';
import { min, max } from '../../styles/styleFunctions';

export const Button = styled.button`
    background-color: #bb8103;
    color: var(--cor-fundo);

    border-radius: var(--raio-borda);

    padding: 16px;
    font-size: 20px;
    width: 100%;

    border: none;
    &:hover {
        background-color: ${shade(0.2, '#bb8103')};
    }
    ${min('1100px')} {
        padding: 24px 50px;
        font-size: 28px;
    }
`;
