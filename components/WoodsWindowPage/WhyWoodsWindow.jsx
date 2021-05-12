import styled from 'styled-components';
import Container from '../UI/Container';

function WhyWoodsWindow() {
    return (
        <Section>
            <Container>
                <FlexContainer>
                    <Left>
                        <Title>
                            Решили поставить <br />
                            <span>деревянные окна</span>
                        </Title>
                        <Unswer>Вам нужно знать несколько вещей!</Unswer>
                        <TextList>
                            <TextItem>
                                <h3>Какие бывают ?</h3>
                            </TextItem>
                            <TextItem>
                                <h3>Из чего они состоят ?</h3>
                            </TextItem>
                            <TextItem>
                                <h3>Основные отличия ?</h3>
                            </TextItem>
                            <TextItem>
                                <h3>Как правильно выбрать ?</h3>
                            </TextItem>
                        </TextList>
                    </Left>
                    <Right>
                        <ImageMen src='/images/woodsWindow/men.png' alt='men' />
                    </Right>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default WhyWoodsWindow;

const Section = styled.section`
    background-image: linear-gradient( 127deg, rgb(192,24,24) 0%, rgb(248,61,61) 100%);
    overflow: hidden;
`;

const FlexContainer = styled.div`
    display: flex;

    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

const Left = styled.div`
    padding: 100px 0;
    padding-right: 130px;
    min-width: 585px;
    position: relative;
    z-index: 2;
    
    @media (max-width: 1200px) {
        padding: 80px 0;
        padding-right: 0;
        min-width: 500px;
    }

    @media (max-width: 960px) {
        padding: 60px 0;
        min-width: 470px;
    }

    @media (max-width: 670px) {
        padding: 40px 0;
    }
`;

const Unswer = styled.h3`
    color: white;
    font-weight: 600;
    padding: 30px 0;

    @media (max-width: 1200px) {
        padding: 20px 0;
    }

    @media (max-width: 480px) {
        padding-top: 10px;
        padding-bottom: 15px;
    }
`;



const Right = styled.div`
    position: relative;
    height: inherit;
    width: 100%;

    ::before {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        display: block;
        width: 960px;
        height: 100%;
        background: url('/images/woodsWindow/whyWoodsBanner.jpg') no-repeat left;
    }

    @media (max-width: 760px) {
        height: 300px;
        ::before {
            left: 300px;
            background-size: cover;
            background-position: top;
            width: 100%;
            height: 380px;
            top: initial;
            bottom: 0;
        }
    }

    @media (max-width: 670px) {
        
        height: 300px;
        ::before {
            position: relative;
            left: 0;
            width: 400px;
        }
    }

    @media (max-width: 480px) {
        
        height: 250px;
        ::before {
            position: relative;
            left: 0;
            width: 400px;
            height: 330px;
        }
    }
`;

const ImageMen = styled.img`
    position: absolute;
    left: -170px;
    bottom: 0;

    @media (max-width: 1200px) {
        left: -150px;
        height: 450px;
        width: auto;
    }

    @media (max-width: 760px) {
        left: 170px;
        height: 380px;
    }

    @media (max-width: 480px) {
        z-index: 3;
        left: 80px;
        height: 300px;
    }
`;

const Title = styled.h2`
    color: white;
    span {
        color: #fff825;
    }
`;

const TextList = styled.ul`
    li:last-child {
        margin-bottom: 0;
    }
`;

const TextItem = styled.li`
    background-color: #fff825;
    padding: 20px;
    width: fit-content;
    margin-bottom: 20px;

    h3 {
        color: #c51d1d;
    }

    @media (max-width: 1200px) {
        padding: 10px 15px;
    }

    @media (max-width: 480px) {
        margin-bottom: 15px;
    }
`;
