import React from 'react';
import ReactPlayer from 'react-player';
import Argumentos from '../../components/Argumentos';
import Footer from '../../components/Footer';
import Formulario from '../../components/Formulario';
import PropostaDeValor from '../../components/PropostaDeValor';
import ProvaSocial from '../../components/ProvaSocial';
import { Titulo } from '../../components/Titulo';
import Video from '../../components/Video';
import { ConteudoLanding } from './styles';

function Landing() {
    return (
      <>
          <ConteudoLanding>
              <Titulo>Adaptabilidade</Titulo>
              <PropostaDeValor />
              {/* Descrição da oferta */}
                <Argumentos />
              <Video url="https://www.youtube.com/watch?v=B5tOAmCiGh0" />
                {/* Formulário: onde acontece a conversão */}
              <Formulario />
              {/* Prova social: evidências de pessoas que aprovam */}
                <ProvaSocial />
            </ConteudoLanding>
          <Footer />
        </>
    );
}

export default Landing;
