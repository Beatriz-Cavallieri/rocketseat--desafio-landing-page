import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import Argumento from './Argumento';
import { Conteudo } from './styles';

const Argumentos: React.FC = () => {
    const loremIpsum =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tenetur sint ullam sapiente laboriosam odio dignissimos minima, voluptate iure dolores! Voluptatibus hic quia doloribus quis ipsum, deserunt sunt quidem sequi.';
    const argumentos = [
        {
            icone: FiMapPin,
            titulo: 'Tenha mais tranquilidade',
            texto:
                'Encare com serenidade os problemas e imprevistos. A adaptabilidade reduz o estresse enfrentado quando as coisas não saem exatamente como a você planejou.',
        },
        {
            icone: FiMapPin,
            titulo: 'Domine o mundo',
            texto:
                'Pessoas adaptáveis ampliam suas oportunidades de carreira. Seus limites geográficos nunca foram tão amplos!',
        },
        {
            icone: FiMapPin,
            titulo: 'Cresça mais rápido',
            texto:
                'Assuma rápida e eficientemente novas responsabilidades, novas equipes e novas tecnologias. Amplie suas capacidades técnicas e suas habilidades gerais.',
        },
    ];
    return (
        <Conteudo>
            {argumentos.map(arg => (
            <Argumento
                    titulo={arg.titulo}
                    texto={arg.texto}
                    icone={arg.icone}
              />
            ))}
      </Conteudo>
    );
};

export default Argumentos;
