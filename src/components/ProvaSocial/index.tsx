import React from 'react';
import CardProvaSocial from './CardProvaSocial';
import Conteudo from './styles';

const ProvaSocial: React.FC = () => {
    const cit1 = {
        texto:
            'Não são os mais fortes ou os mais inteligentes que irão sobreviver, e sim aqueles que melhor conseguem lidar com a mudança.',
        nome: 'Leon C.',
        sobrenome: 'Megginson',
    };
    const cit2 = {
        texto:
            'A cobra que não consegue livrar-se de sua casca morre. O mesmo acontece com os espíritos que são impedidos de mudar as suas opiniões; eles deixam de ser espírito.',
        nome: 'Friedrich',
        sobrenome: 'Nietzsche',
    };
    const cit3 = {
        texto:
            'Investir em alta adaptabilidade levará a retornos mais altos, porque as pessoas irão reenviar a energia desperdiçada no que não resulta, em novo sucesso.',
        nome: 'Max',
        sobrenome: 'McKewon',
    };
    const cit4 = {
        texto:
            'Não devemos desejar o desaparecimento de nossos problemas, mas sim a graça para transformá-los.',
        nome: 'Simone',
        sobrenome: 'Weil',
    };
    const citacoes = [cit1, cit2, cit3];
    return (
      <Conteudo>
          {citacoes.map(cit => (
              <CardProvaSocial
              texto={cit.texto}
                    nome={cit.nome}
              sobrenome={cit.sobrenome}
            />
            ))}
        </Conteudo>
    );
};

export default ProvaSocial;
