import React from 'react';
import { FiLinkedin, FiMail, FiGithub, FiCodepen } from 'react-icons/fi';
import Contato from '../../components/Contato';
import { Conteudo } from './styles';

const links = [
    {
        link: 'mailto:bfcavallieri@gmail.com',
        icone: FiMail,
    },
    {
        link: 'https://linkedin.com/in/Beatriz-Cavallieri',
        icone: FiLinkedin,
    },
    {
        link: 'https://github.com/Beatriz-Cavallieri',
        icone: FiGithub,
    },
    {
        link: 'https://codepen.com/Beatriz-Cavallieri',
        icone: FiCodepen,
    },
];

const Agradecimento: React.FC = () => (
  <Conteudo>
      <h1>Obrigada por visualizar esse projeto!</h1>
      <h2>Se quiser saber mais:</h2>
      {links.map(link => (
          <Contato link={link.link} icone={link.icone} />
        ))}
    </Conteudo>
);

export default Agradecimento;
