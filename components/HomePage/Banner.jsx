import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components';
import ButtonLink from '../UI/ButtonLink';
import Container from '../UI/Container';

function Banner() {
    return (
        <Section>
            <Container>
                <Title><span>Собственное <br /></span>производство <br /> окон в Астрахани</Title>
                <p>качество и надежность <br /> гарантируем</p>
                <ButtonLink
                    link={`/#quiz`}
                    description={'Узнайте точную стоимость вашего окна за 2 минуты'}
                >
                    Узнать стоимость
                    </ButtonLink >
            </Container>
        </Section>
    )
}

export default Banner;



const Section = styled.section`
    padding-top: 150px;
    padding-bottom: 200px;
    background: url('/images/homePage/banner.jpg') top center no-repeat;

    p {
        font-size: 30px;
        margin: 20px 0; 
    }

    
`;

const Title = styled.h1`
    line-height: 54px;
`;
