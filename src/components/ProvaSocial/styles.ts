import styled from 'styled-components';
import { min, max } from '../../styles/styleFunctions';

const Conteudo = styled.ul`
    position: relative;
    top: 150px;
    ${min('1100px')} {
        display: flex;
        top: 100px;
    }
`;

export default Conteudo;
