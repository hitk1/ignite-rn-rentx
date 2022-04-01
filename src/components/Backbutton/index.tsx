import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { BorderlessButtonProperties } from 'react-native-gesture-handler'

import { Container } from './styles';

interface IProps extends BorderlessButtonProperties {
    color?: string
}

const Backbutton = ({ color, ...restProps }: IProps) => {
    const theme = useTheme()

    return (
        <Container
            {...restProps}
        >
            <MaterialIcons
                name="chevron-left"
                size={24}
                color={color ? color : theme.colors.text}
            />
        </Container>
    );
}

export default Backbutton;