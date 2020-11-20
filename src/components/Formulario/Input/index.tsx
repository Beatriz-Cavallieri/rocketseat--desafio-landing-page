import React, { InputHTMLAttributes } from 'react'
import { FiMail } from 'react-icons/fi'
import { Conteudo } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ ...props }) => (
    <Conteudo>
        {<FiMail />}
        <input {...props} />
    </Conteudo>
)

export default Input
