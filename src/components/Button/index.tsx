import React from 'react';
import { Container, ButtonText } from './styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
    children: string; //pra forçar ele ser obritário
}
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Container {...rest}>
        <ButtonText>{children}</ButtonText>
    </Container>
);

export default Button;
