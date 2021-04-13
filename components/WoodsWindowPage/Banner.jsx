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
                            Деревянные окна <br />
                            <span>Экологичность <br /> природного материала <br /> в астрахани</span>
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



const Title = styled.h1`
    position: relative;
    color: #e31e24;
    z-index: 2;

    span {
        color: #232323;
        font-size: 36px;
    }
`;

const SubTitle = styled.p`
    position: relative;
    margin-top: 20px;
    margin-bottom: 25px;
    font-size: 24px;
    z-index: 2;
`;

const Section = styled.section`
    background: url('/images/woodsWindow/banner.jpg') top center no-repeat ;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: flex-end;
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
        height: 90%;
        z-index:0;
        border-top: 50px solid #fef0d4;
        border-right: 50px solid #fef0d4;
    }
`;


const ImageHouse = styled.img`
    position: absolute;
    bottom: 0;
    left: -100px;
`;

const ImageKust = styled.img`
    position: absolute;
    bottom: 0;
    left: -370px;
`;

const Right = styled.div`
    position: relative;
    height: 511px;
    width: 100%;
`;
