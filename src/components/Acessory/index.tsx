import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
    Container,
    Name,
} from './styles';

interface IProps {
    name: string
    icon: React.FC<SvgProps>
}

export const Acessory = ({
    name,
    icon: Icon
}: IProps) => {
    return (
        <Container>
            <Icon height={32} width={32} />
            <Name>{name}</Name>
        </Container>
    )
}