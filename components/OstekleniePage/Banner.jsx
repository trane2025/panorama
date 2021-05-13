import styled from "styled-components";
import ButtonLink from "../UI/ButtonLink";
import Container from "../UI/Container";
import { useRouter } from 'next/router';


function Banner() {
    const { pathname } = useRouter();
    return (
        <Section>
            <Container>
                <FlexContainer>
                    <WraperText>
                        <h1>Остекление <br /> в Астрахани</h1>
                        <p>балконов, лоджий, квартир, домов и&nbsp;коттеджей</p>
                        <ButtonLink link={`${pathname}/#quiz`}>
                            Узнать стоимость
                    </ButtonLink>
                    </WraperText>
                    <WraperBanner />
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default Banner;

const Section = styled.section`
    
`;

const FlexContainer = styled.div`
    display: flex;

    @media (max-width: 970px) {
        flex-direction: column;
    }
`;

const WraperBanner = styled.div`
    width: 100%;
    height: inherit; 
    position: relative;
    ::after {
        content: '';
        display: block;
        width: 1100px;
        height: 100%;
        background: url('/images/installWindowPage/banner.jpg') center center no-repeat;

        position: absolute;
        left: 0;
        top: 0;
    }

    @media (max-width: 970px) {
        height: 300px;

        ::after {
            width: 100%;
        }
    }

    @media (max-width: 480px) {
        height: 300px;

        ::after {
            background-size: cover;
        }
    }
`;

const WraperText = styled.div`
    padding-top: 150px;
    padding-bottom: 200px;
    padding-right: 85px;
    h1 {
        width: 364px;
    }
    p {
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    @media (max-width: 1200px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    @media (max-width: 970px) {
        padding-top: 60px;
        padding-bottom: 20px;
        padding-right: 0;

        p {
            margin-top: 10px;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 670px) {
        padding-top: 40px;

        h1 {
            width: initial;
        }

        p {
            font-size: 20px;
            margin-top: 10px;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 480px) {
        padding-top: 40px;

        h1 {
            text-align: center;
        }

        p {
            text-align: center;
            font-size: 18px;
            margin-top: 10px;
            margin-bottom: 20px;
        }
    }
`;
