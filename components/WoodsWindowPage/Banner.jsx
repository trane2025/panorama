import styled from 'styled-components';
import ButtonLink from '../UI/ButtonLink';
import Container from '../UI/Container';
import { useRouter } from 'next/router';

function Banner() {

    const { pathname } = useRouter();

    return (
        <Section>
            <Container>
                <FlexContainer>
                    <Left>
                        <Title>
                            <h1>Деревянные окна</h1>
                            <h2>Экологичность природного материала приобрести в&nbsp;Астрахани</h2>
                        </Title>
                        <SubTitle>надежные, удобные, практичные <br /> создают особую атмосферу</SubTitle>

                        <ButtonLink link={`${pathname}/#quiz`}>
                            Узнать стоимость
                        </ButtonLink>

                    </Left>
                    <Right>
                        <ImageHouse src='/images/woodsWindow/house.png' alt='house' />
                        <ImageKust src='/images/woodsWindow/kust.png' alt='kust' />
                    </Right>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default Banner;



const Title = styled.div`
    position: relative;
    z-index: 2;

    h1 {
        color: #e31e24;
    }

    @media (max-width: 670px) {
        max-width: 450px;
    }

    @media (max-width: 480px) {
        text-align: center;
    } 
`;

const SubTitle = styled.p`
    position: relative;
    margin-top: 20px;
    margin-bottom: 25px;
    font-size: 24px;
    z-index: 2;

    @media (max-width: 1200px) {
        margin-top: 10px;
        margin-bottom: 20px;
    }

    @media (max-width: 760px) {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        text-align: center;
    }    
`;

const Section = styled.section`
    background: url('/images/woodsWindow/banner.jpg') top center no-repeat ;
    overflow: hidden;
    @media (max-width: 1200px) {
        background-position-x: right;
    }

    @media (max-width: 760px) {
        background-position-y: bottom;
        background-position-x: -550px;
        background-color: #fff8f6;
        background-size: 1045px;
    }

    @media (max-width: 480px) {
        background-position-y: bottom;
        background-position-x: -445px;
        background-color: #fff8f6;
        background-size: 870px;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: inherit;

    @media (max-width: 760px) {
        flex-direction: column;
    }

   
`;

const Left = styled.div`
    padding-top: 150px;
    padding-bottom: 165px;
    min-width: 580px;
    position: relative;

    ::before {
        position: absolute;
        right: -5px;
        top: 0;
        content: '';
        display:block;
        width: 10000px;
        height: 100%;
        z-index:0;
        border-top: 50px solid #fef0d4;
        border-right: 50px solid #fef0d4;
        background-color: white;
    }

    @media (max-width: 1200px) {
        padding-top: 100px;
        padding-bottom: 130px;
        min-width: 550px;

        ::before {
            border-top: 30px solid #fef0d4;
            border-right: 30px solid #fef0d4; 
        }
    }

    @media (max-width: 760px) {
        padding-top: 60px;
        padding-bottom: 0;
        min-width: initial;

        ::before {
            border-top: none;
            border-right: none; 
            background-color: initial;
        }
    }

    @media (max-width: 670px) {
        padding-top: 40px;
    }
`;


const ImageHouse = styled.img`
    position: absolute;
    bottom: 0;
    left: -100px;
    animation: fade .2s;

    @media (max-width: 1200px) {
        width: auto;
        height: 370px;
    }

    @media (max-width: 760px) {
        position: relative;
        left: initial;
        right: -250px;
        bottom: -15px;
        height: 330px;
    }

    @media (max-width: 480px) {
        right: -60px;
        bottom: -15px;
        height: 270px;
    }
`;

const ImageKust = styled.img`
    position: absolute;
    bottom: 0;
    left: -370px;

    @media (max-width: 1200px) {
        width: auto;
        height: 200px;
        left: -300px;
    }

    @media (max-width: 760px) {
        height: 165px;
        left: -10px;
    }
`;

const Right = styled.div`
    position: relative;
    height: inherit;
    width: 100%;
`;
