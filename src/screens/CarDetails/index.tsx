import React from 'react';

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
    About,
    Acessories,
    Footer,
} from './styles';

export const CarDetails = () => {
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
                <About>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque magnam sapiente libero aliquam esse nobis, ad nisi magni nam autem veritatis optio fugiat porro soluta repellendus. Esse, architecto expedita!</About>
            </Content>
            <Footer>
                <Button
                    title='Some title'
                    onPress={() => { }}
                />
            </Footer>
        </Container>
    );
}