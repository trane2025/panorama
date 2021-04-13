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
                        <p>Вам нужно знать несколько вещей!</p>
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
`;

const FlexContainer = styled.div`
    display: flex;

`;

const Left = styled.div`
    padding-top: 100px;
    min-height: 720px;
    padding-right: 130px;
    min-width: 585px;

    p {
        color: white;
        font-size: 24px;
        font-weight: 600;
        padding: 30px 0;
    }
    
`;

const Right = styled.div`
    position: relative;
    height: 720px;
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
`;

const ImageMen = styled.img`
    position: absolute;
    left: -170px;
    bottom: 0;
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
`;
