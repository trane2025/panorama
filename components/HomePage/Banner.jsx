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
        font-size: 24px;
        margin-top: 15px;
        margin-bottom: 25px;
    }


    @media (max-width: 1200px) {
        
        background: url('/images/homePage/banner.jpg') bottom center no-repeat;
        background-size: cover;
        padding-top: 100px;
        padding-bottom: 100px;

        p {
            margin: 10px 0;
        }
    }

    @media (max-width: 670px) {
        padding-top: 100px;
        padding-bottom: 100px;
        background: url('/images/homePage/banner.jpg') bottom right no-repeat;
        background-size: 1220px;
        background-position-x: -336px;
        background-color: #fcfaf2;

        p {
            font-size: 20px;
            line-height: 25px;
            margin-top: 0;
        }
    }

    @media (max-width: 480px){

        padding-top: 45px;
        padding-bottom: 231px;
        background: url('/images/homePage/banner.jpg') bottom center no-repeat;
        background-size: 650px;
        background-color: #fffbe7;
        background-position-x: -279px;



        p {
            font-size: 18px;
            line-height: 20px;
            text-align: center;
            margin-top: 0;
        }
    }

    
`;

const Title = styled.h1`
    line-height: 54px;

    @media (max-width: 1200px) {
        line-height: 42px;
     }

    @media (max-width: 670px) {
        line-height: 36px;
        margin-bottom: 10px;
    }

    @media (max-width: 480px){
        line-height: 30px;
        text-align: center;
        margin-bottom: 10px;
    }
`;
