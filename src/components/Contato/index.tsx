import React from "react"
import { IconBaseProps } from 'react-icons'
import { Li } from "./styles"


interface InputContato {
    link: string;
    icone: React.ComponentType<IconBaseProps>;
}

const Contato: React.FC<InputContato> = ({ link, icone: Icon }) => (
    <Li className="wrapper-icone">
        <a href={link}>
            {Icon && <Icon size={25} />}
        </a>
    </Li>
)

export default Contato
