import React from 'react';
import {
    Image,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import Icon from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/logo.png';

import {
    Container,
    Title,
    ForgotPassword,
    ForgotPasswordText,
    CreateAccountButton,
    CreateAccountButtonText,
} from './style';

const SignIn: React.FC = () => {
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                enabled
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={{ flex: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <Container>
                        <Image source={logoImg} />
                        <View>
                            <Title>Faça seu logon</Title>
                        </View>
                        <Input name="email" icon="mail" placeholder="E-mail" />
                        <Input
                            name="password"
                            icon="lock"
                            placeholder="Senha"
                        />
                        <Button onPress={() => {}}>Entrar</Button>
                        <ForgotPassword>
                            <ForgotPasswordText>
                                Esqueci minha senha
                            </ForgotPasswordText>
                        </ForgotPassword>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
            <CreateAccountButton onPress={() => {}}>
                <Icon name="log-in" size={20} color={'#ff9000'} />
                <CreateAccountButtonText>
                    Criar uma conta
                </CreateAccountButtonText>
            </CreateAccountButton>
        </>
    );
};

export default SignIn;
