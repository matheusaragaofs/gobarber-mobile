import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled(RectButton)`
    width: 100%;
    height: 60px;
    background: #ff9000;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    /* não precisa utilizar display:flex no react native, pois por padrão todos  os elementos possuem display flex;  */
`;

export const ButtonText = styled.Text`
    font-family: 'RobotSlab-Medium';
    color: #312e38;
    font-size: 16px;
`;
