import React from 'react'
import { useWindowDimensions } from 'react-native'

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import { ConfirmButton } from '../../components/ConfirmButton'

import {
    Container,
    Content,
    Title,
    Message,
    Footer
} from './styles'

export const SchedulingComplete = () => {
    const { width } = useWindowDimensions()

    return (
        <Container>
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro alugado!</Title>
                <Message>
                    Agora voce só precisa ir {'\n'}
                    até a concessarionária da RENTX {'\n'}
                    pegar seu automóvel
                </Message>
            </Content>
            <Footer>
                <ConfirmButton title="OK" />
            </Footer>
        </Container>
    )
}