import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Nietzsche from '../../../assets/images/Nietzsche.jpg';
import McKewon from '../../../assets/images/McKewon.jpg';
import Megginson from '../../../assets/images/Megginson.jpg';
import { Autoria, Conteudo } from './styles';

interface Citacao {
    texto: string;
    nome: string;
    sobrenome: string;
}

function getFoto(sobrenome: string) {
    switch (sobrenome) {
        case 'Nietzsche':
            return Nietzsche;
            break;
        case 'Megginson':
            return Megginson;
            break;
        default:
            return McKewon;
    }
}

const CardProvaSocial: React.FC<Citacao> = ({
    children,
    texto,
    nome,
    sobrenome,
}) => {
    // Concatenar nome e sobrenome
    const nomeCompleto = `${nome} ${sobrenome}`;

    return (
      <Conteudo>
          <FaQuoteLeft size={30} />
          <q>{texto}</q>
          <br />
            <Autoria>
          <cite>{nomeCompleto}</cite>
          <img
                    src={getFoto(sobrenome)}
                  alt={`Fotografia de ${nomeCompleto}`}
                />
        </Autoria>
        </Conteudo>
    );
};

export default CardProvaSocial;
