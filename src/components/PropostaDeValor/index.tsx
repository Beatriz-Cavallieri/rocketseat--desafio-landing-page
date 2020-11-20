import React from 'react';
import { Button } from '../Button';
import { Conteudo } from './styles';
import { Link } from 'react-router-dom';

const PropostaDeValor: React.FC = () => (
    <Conteudo>
        <h1>Prospere em qualquer circunstância</h1>
        <p>
            Se destaque no mercardo de trabalho com um dos 5 soft skills mais
            valorizados pelas empresas
        </p>
        <Link to="/obrigada">
            <Button>Alcance o próximo nível</Button>
        </Link>
    </Conteudo>
);

export default PropostaDeValor;
