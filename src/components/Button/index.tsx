import React from 'react'

import {
    Container,
    Title,
} from './styles'

interface IProps {
    title: string
    color?: string
    onPress: () => void
}

export const Button = ({
    onPress,
    title,
    color,
    ...restProps
}: IProps) => {

    return (
        <Container
            color={color}
            {...restProps}
        >
            <Title>{title}</Title>
        </Container>
    )
}