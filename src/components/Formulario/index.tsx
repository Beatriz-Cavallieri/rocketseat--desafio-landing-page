import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import Input from './Input';
import { Conteudo, Form } from './styles';

const Formulario: React.FC = () => (
    <Conteudo>
    <p>
        Descubra como se tornar um profissional mais adaptável acompanhando
        as dicas de nossa newsletter exclusiva
      </p>
        <Form>
        <Input type="text" name="email" id="email" placeholder="E-mail" />
            <Link to="/obrigada">
                <Button>Inscreva-se</Button>
      </Link>
        </Form>
  </Conteudo>
);

export default Formulario;
