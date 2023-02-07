import React, {ButtonHTMLAttributes, Children} from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => ( 
     <Container type="button" {...props}>
        {props.loading ? 'Carregando' : props.children}
      </Container>
)

export default Button;