import React from 'react'
import styled from 'styled-components';
import Container from '../UI/Container';
import OfferItem from './UI/OfferItem';

function Offer() {
    return (
        <Section>
            <Container>
                <h2>Мы предлагаем</h2>
                <ListOffer>
                    <OfferItem
                        image='/images/homePage/derevo.png'
                        title='Деревянные окна'
                        description='Экологически чистые, они придадут Вашему дому комфорт и уют'
                        number='01'
                        href='/' />
                    <OfferItem
                        image='/images/homePage/derevo-al.png'
                        title='дерево-алюминиевые окна'
                        description='Более устойчивые к механическим и атмосферным воздействиям'
                        number='02'
                        href='/' />
                    <OfferItem
                        image='/images/homePage/plastik.png'
                        title='Пластиковые окна'
                        description='Цена и надежность, а также удобство и практичность в эксплуатации'
                        number='03'
                        colorBack='#ffd138'
                        colorNumber='#ffe48c'
                        href='/plastikovye-okna'
                    />
                    <OfferItem
                        image='/images/homePage/al-construction.png'
                        title='АЛЮМИНИЕВЫЕ КОНСТРУКЦИИ'
                        description='Надежные и изящные конструкции способны реализовать любые потребности в остеклении'
                        number='04'
                        colorBack='#202336'
                        colorNumber='#383d5b'
                        colorText='white'
                        href='/'
                    />
                </ListOffer>
            </Container>
        </Section>
    )
}

export default Offer;



const Section = styled.section`
    background-color: #343a4f;
    padding: 100px 0;

    h2 {
        color: white;
    }
`;

const ListOffer = styled.ul`
    margin: 0 -15px;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
`;