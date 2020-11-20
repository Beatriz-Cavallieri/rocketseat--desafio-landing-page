import styled from 'styled-components';
import { shade } from 'polished';

export const Li = styled.li`
    width: 50px;
    height: 50px;
    font-size: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--amarelo);
    border-radius: 50%;
    margin: 0.4em;

    &:hover {
        background-color: ${shade(0.2, '#bb8103')};
    }
`;
