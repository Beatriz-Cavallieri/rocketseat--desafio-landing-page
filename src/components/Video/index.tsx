import React from 'react';
import ReactPlayer from 'react-player';
import { Conteudo } from './styles';

interface UrlVideo {
    url: string;
}

const Video: React.FC<UrlVideo> = ({ url }) => (
  <Conteudo>
      <ReactPlayer url={url} />
    </Conteudo>
);

export default Video;
