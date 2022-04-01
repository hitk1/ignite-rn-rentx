import React from 'react'
import { FlatList, StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { Car } from '../../components/Car'

import Logo from '../../assets/logo.svg'

import {
    Carlist,
    Container,
    Header,
    HeaderContent,
    TotalCars
} from './styles'

export const Home = () => {
    const cardData = {
        name: 'Audi RS Coupé',
        brand: 'audi',
        rent: {
            price: 120,
            period: 'ao dia'
        },
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZst6cl173Ea53YrCWvrZrioLplVLDVqB8uUGxP_SG3IkUrn2EK2HLYa53Q0O2MWALe8&usqp=CAU'
    }
    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        height={RFValue(12)}
                        width={RFValue(108)}
                    />

                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>
            {/* <FlatList
                data={[1, 2, 3]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Car data={cardData} />}
            /> */}
            <Carlist
                data={[1, 2, 3, 4] as any}
                keyExtractor={item => String(item)}
                renderItem={({ item }) =>
                    <Car
                        data={cardData}
                    />
                }
            />
        </Container >
    )
}