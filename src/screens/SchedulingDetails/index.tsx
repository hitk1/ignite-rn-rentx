import React from 'react';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components'

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import Backbutton from '../../components/Backbutton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';


import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Acessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
} from './styles';

export const SchedulingDetails = () => {
    const theme = useTheme()

    return (
        <Container>
            <Header>
                <Backbutton
                    onPress={() => { }}
                />
            </Header>

            <CarImages>
                <ImageSlider
                    imagesUrl={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZst6cl173Ea53YrCWvrZrioLplVLDVqB8uUGxP_SG3IkUrn2EK2HLYa53Q0O2MWALe8&usqp=CAU']}
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>
                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>
                <Acessories>
                    <Acessory name="380KM/h" icon={SpeedSvg} />
                    <Acessory name="3.2s" icon={AccelerationSvg} />
                    <Acessory name="800HP" icon={ForceSvg} />
                    <Acessory name="Gasoline" icon={GasolineSvg} />
                    <Acessory name="Auto" icon={ExchangeSvg} />
                    <Acessory name="2 pessoas" icon={PeopleSvg} />
                </Acessories>
                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>02/04/2022</DateValue>
                    </DateInfo>
                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />
                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>16/04/2022</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>total</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>
            <Footer>
                <Button
                    title='Alugar agora'
                    color={theme.colors.success}
                    onPress={() => { }}
                />
            </Footer>
        </Container>
    );
}