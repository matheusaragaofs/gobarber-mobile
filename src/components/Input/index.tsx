import React, {
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
    useCallback,
    useState,
} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';
import { useField } from '@unform/core';

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

interface InputValueReference {
    value: string;
}

interface InputRef {
    focus(): void;
}
const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { name, icon, ...rest },
    ref,
) => {
    const { fieldName, defaultValue = '', registerField } = useField(name);
    const inputElementRef = useRef<any>(null);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputValueRef.current.value);
    }, []);

    useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        },
    }));
    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value) {
                //função pra setar o valor de forma manual
                (inputValueRef.current.value = value),
                    inputElementRef.current.setNativeProps({ text: value }); //setar uma propriedade no elemento nativo do android/ios  // /vai ser responsável por mudar visualmente o texto que está dentro do input,
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear(); //  mesma coisa que inputElementRef.current.setNativeProps({ text: '' });
            },
        });
    }, [fieldName, registerField]);
    return (
        <Container isFilled={isFilled} isFocused={isFocused}>
            <Icon
                name={icon}
                size={20}
                color={isFocused || isFilled ? '#ff9000' : '#666360'}
            />
            <TextInput
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                ref={inputElementRef}
                defaultValue={defaultValue}
                onChangeText={value => {
                    inputValueRef.current.value = value;
                }}
                placeholderTextColor="#666360"
                {...rest}
            />
        </Container>
    );
};

export default forwardRef(Input);
