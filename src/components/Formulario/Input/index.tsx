import React, { InputHTMLAttributes, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { Conteudo } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...props }) => {
    const [estaFocado, setEstaFocado] = useState(false);

    return (
      <Conteudo estaFocado={estaFocado}>
          <FiMail />
          <input {...props} onFocus={() => setEstaFocado(true)} />
        </Conteudo>
    );
};

export default Input;
