import React from "react"
import { IconBaseProps } from 'react-icons'
import {Conteudo} from './styles'

interface InputArgumento {
    titulo: string;
    texto: string;
    icone: React.ComponentType<IconBaseProps>;
}

const Argumento: React.FC<InputArgumento> = ({titulo, texto, icone: Icon}) => {
    return (
        <Conteudo>
        <Icon size={50}/>
        <h3>
            {titulo}
        </h3>
        <p>
            {texto}
        </p>
        </Conteudo>
    )
}

export default Argumento