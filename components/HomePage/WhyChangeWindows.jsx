import styled from 'styled-components';
import Container from '../UI/Container';

function WhyChangeWindows() {
    return (
        <Section>
            <Container>
                <FlexContainer>
                    <Left>
                        <h2><span className='white-text'>Меняете окна</span></h2>
                        <h2><span style={{ color: '#ffea00' }}>Нужно поставить <br /> новые?</span></h2>
                        <TextWhy>
                            <p>Вам необходимо сменить свои старые окна или некачественные окна от застройщика</p>
                        </TextWhy>
                        <TextWhy color='#ffea00' colorText='#d90000'>
                            <p>Или Вы построили дом и его необходимо застеклить <span className='black-text'>качественными окнами</span></p>
                        </TextWhy>
                    </Left>
                    <Right>
                        <ImageBackground src="/images/homePage/whyChangeWindowBanner.jpg" alt="фон" />
                        <ImageHome src="/images/homePage/home.png" alt="фон" />
                    </Right>
                </FlexContainer>

            </Container>
        </Section>
    )
}

export default WhyChangeWindows;

const FlexContainer = styled.div`
    display: flex;

    @media (max-width: 670px) {
        display: block;
        position: relative;
    }

    @media (max-width: 480px) {
        display: block;
        position: relative;
    }

    
`;

const TextWhy = styled.div`
    border-radius: 20px 20px 0px 20px;
    padding: 25px;
    background-color: ${({ color }) => color ? color : 'white'};
    width: fit-content;
    margin-top: 40px;
    box-shadow: 20.743px 23.037px 18px 0px rgba(57, 57, 57, 0.11);

    p {
        max-width: 430px;
        font-size: 24px;
        font-weight: 600;
        color: ${({ colorText }) => colorText ? colorText : '#181a26'};
    }

    @media (max-width: 670px) {
        padding: 20px;
        max-width: 350px;
        min-width: 350px;
        border-radius: 10px 10px 0px 10px;
        margin-top: 20px;
        position: relative;
        z-index: 3;
        p {
            font-size: 16px;
            line-height: 20px;
        }
    }

    @media (max-width: 480px) {
        padding: 20px;
        max-width: 290px;
        min-width: 290px;
        border-radius: 10px 10px 0px 10px;
        margin-top: 20px;
        position: relative;
        z-index: 3;
        p {
            font-size: 14px;
            line-height: 20px;
        }
    }
`;

const Section = styled.section`
    background-image: linear-gradient( 127deg, rgb(192,24,24) 0%, rgb(248,61,61) 100%);

    @media (max-width: 670px) {
        overflow: hidden;
    }
`;


const Left = styled.div`
    height: 758px;
    min-width: 601px;
    padding-top: 100px;
    padding-bottom: 145px;
    padding-right: 130px;
    flex: 1;

    h2 {
        margin-bottom: 20px;
    }

    @media (max-width: 670px) {
        padding-top: 40px;
        padding-bottom: 40px;
        height: 590px;
        
        h2 {
            margin-bottom: 8px;
        }
    }

    @media (max-width: 480px) {
        padding-top: 40px;
        padding-bottom: 40px;
        height: 590px;
        
        h2 {
            margin-bottom: 8px;
        }
    }
`;




const Right = styled.div`
    position: relative;
    width: 100%;
    min-height: 758px;

    @media (max-width: 670px) {
        position: absolute;
        bottom: 0;
    }

    
`;

const ImageBackground = styled.img`
    position: absolute;
    left: 0;
    top: 0;

    @media (max-width: 670px) {
        width: auto;
        top: initial;
        bottom: 0;
        height: 310px;
        left: 270px;
        bottom: 0;
        z-index: 2;
    }

    @media (max-width: 480px) {
        width: auto;
        top: initial;
        bottom: 0;
        height: 310px;
        left: 75px;
        bottom: 0;
        z-index: 2;
    }
`;

const ImageHome = styled.img`
    position: absolute;
    bottom: 0;
    left: -175px;

    @media (max-width: 670px) {
        width: auto;
        height: 245px;
        left: initial;
        right: -20px;
        z-index: 4;
        bottom: -10px;
    }

    @media (max-width: 480px) {
        right: 10px;
        left: 0;
    }
`;