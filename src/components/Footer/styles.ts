import styled from 'styled-components';
import { lighten } from 'polished';

const Conteudo = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3em 10%;
    padding-top: 180px;

    background-color: #99b385;
`;
export const Lista = styled.ul`
    list-style: none;
    text-align: center;
    display: flex;
`;

export const Assinatura = styled.p`
    font-weight: bolder;
    font-size: 21px;
    margin-top: 0.5em;
    margin-bottom: 3em;
`;

export const Atribuicao = styled.p`
    font-size: 14px;
`;

export default Conteudo;
