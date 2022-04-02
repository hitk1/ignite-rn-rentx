import React from 'react'
import { StatusBar } from 'react-native'
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
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <Title>{title}</Title>
        </Container>
    )
}