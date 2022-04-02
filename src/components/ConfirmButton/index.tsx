import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import {
    Container,
    Title
} from './styles'

interface IProps extends RectButtonProps {
    title: string
}

export const ConfirmButton = ({
    title,
    ...restProps
}: IProps) => {

    return (
        <Container
            {...restProps}
        >
            <Title>{title}</Title>
        </Container>
    )
}