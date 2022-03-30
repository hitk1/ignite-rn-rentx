import React from 'react'

import GasolineSvg from '../../assets/gasoline.svg'

import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage,
} from './styles'

interface CarData {
    brand: string
    name: string
    rent: {
        period: string
        price: number
    },
    thumbnail: string
}

interface IProps {
    data: CarData
}

export const Car = ({ data }: IProps) => {
    return (
        <Container>
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>

                    <Type>
                        <GasolineSvg />
                    </Type>
                </About>
            </Details>
            <CarImage
                source={{ uri: data.thumbnail }}
            />
        </Container>
    )
}