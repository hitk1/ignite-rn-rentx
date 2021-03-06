import React from 'react'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components'

import ArrowSvg from '../../assets/arrow.svg'

import Backbutton from '../../components/Backbutton'
import { Button } from '../../components/Button'
import { Calendar } from '../../components/Calendar'


import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles'

export const Scheduling = () => {
    const theme = useTheme()

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <Backbutton
                    color={theme.colors.shape}
                    onPress={() => { }}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </Title>
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={true}>02/04/2022</DateValue>
                    </DateInfo>

                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>
            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button
                    title='Confirmar'
                    onPress={() => { }}
                />
            </Footer>
        </Container>
    )
}