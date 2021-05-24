import styled from 'styled-components';
import Container from '../UI/Container';
import { useRouter } from 'next/router';
import ButtonLink from '../UI/ButtonLink';

function Banner() {
    const { pathname } = useRouter();
    return (
        <Section>
            <Container>
                <FlexContainer>
                    <TextWraper>
                        <h1><span>Алюминиевые</span> <br /> конструкции</h1>
                        <h2>купить в Астрахани</h2>
                        <p>Функциональное и&nbsp;надежное решение для офиса и&nbsp;загородного дома</p>
                        <ButtonLink link={`${pathname}/#quiz`}>
                            Узнать стоимость
                        </ButtonLink>
                    </TextWraper>
                    <WraperImage>
                        <img src="/images/alumiumPage/banner.jpg" alt="banner" />
                    </WraperImage>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default Banner;

const WraperImage = styled.div`
    position: relative;
    width: 100%;
    height: inherit;

    img {
        position: absolute;
        top: 0;
        left: 0;
        z-index:3;
        height: 100%;
        width: auto;
    }

    @media (max-width: 770px) {
        height: 300px;
        width: 103%;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: -15px;
        z-index: 0;
        img {
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: 480px) {
        height: 280px;
        width: 110%;

        img {
            width: auto;
            height: 100%;
        }
    }
`;

const Section = styled.section`
    background-color: #fffaf0;
    position: relative;
    z-index: 3;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: inherit;

    @media (max-width: 770px) {
        flex-direction: column;
        justify-content: inherit;
    }
`;

const TextWraper = styled.div`
    position: relative;
    padding: 175px 0;
    padding-right: 20px;

    ::before {
        content: '';
        display: block;
        width: 876px;
        height: 100%;
        background-image: -moz-linear-gradient( 50deg, rgb(255,248,235) 0%, rgb(255,255,255) 100%);
        background-image: -webkit-linear-gradient( 50deg, rgb(255,248,235) 0%, rgb(255,255,255) 100%);
        background-image: -ms-linear-gradient( 50deg, rgb(255,248,235) 0%, rgb(255,255,255) 100%);
        z-index: 0;

        position: absolute;
        right: 0;
        top: 0;

    }

    h1 {
        position: relative;
        z-index: 1;
    }


    h2 {
        min-width: 475px;
        position: relative;
        z-index: 1;
    }

    p{
        margin-top: 20px;
        margin-bottom: 25px;
        position: relative;
        z-index: 1;
        font-size: 24px;
    }

    @media (max-width: 1200px) {
        padding: 80px 0;

            p {
                margin-top: 10px;
                font-size: 18px;
            }
    }

    @media (max-width: 970px) {
        padding: 60px 0;
        h2 {
            min-width: 400px;
        }
    }

    @media (max-width: 770px) {
        padding-bottom: 265px;
        ::before {
            display: none;
        }
    }

    @media (max-width: 670px) {
        padding-top: 40px;
    }

    @media (max-width: 480px) {
        padding-bottom: 250px;
        
        h1,h2,p {
            text-align: center;
            min-width: initial;
        }

        p {
            font-size: 16px;
            margin-top: 5px;
            margin-bottom: 15px;
        }

    }
    
`;