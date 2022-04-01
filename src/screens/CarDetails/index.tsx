import React from 'react';

import Backbutton from '../../components/Backbutton';
import { ImageSlider } from '../../components/ImageSlider';

import {
    Container,
    Header,
    CarImages
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
        </Container>
    );
}