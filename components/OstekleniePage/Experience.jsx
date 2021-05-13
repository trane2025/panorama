import styled from 'styled-components';
import Container from '../UI/Container';

function Experience() {
    return (
        <Section>
            <Container>
                <FlexContainer>
                    <Left>
                        <img src="/images/installWindowPage/masters.png" alt="masters" />
                    </Left>
                    <Right>
                        <h2>У нас есть <br />  <span className="red-text">решение для вас!</span> </h2>
                        <SubTitle>Установка оконных <br /> систем от <span>«Панорама»</span></SubTitle>
                        <Wraper20Years>
                            <h3>Мы&nbsp;знаем свою работу и&nbsp;успешно устанавливаем окна уже</h3>
                            <Year20>20<span>лет</span></Year20>
                        </Wraper20Years>
                    </Right>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default Experience;

const Section = styled.section`
    @media (max-width: 760px) {
        background: #f6f6f6;
    }
`;



const Wraper20Years = styled.div`
    position: relative;
    z-index: 2;
    position: relative;
    margin-top: 30px;
    width: 500px;
    height: 350px;
    background-color: #ffd138;
    padding-top: 50px;
    overflow: hidden;
    

    h3 {
        padding-left: 50px;
        max-width: 390px;
    }

    @media (max-width: 1200px) {
        margin-top: 15px;
    }

    @media (max-width: 970px) {
        width: 100%;
        height: 270px;
        padding: 30px;

        h3 {
            padding-left: initial;
            max-width: 390px;
        }
    }

    @media (max-width: 760px) {
        width: fit-content;
        
    }

    @media (max-width: 670px) {
        height: 200px;
        h3 {
            max-width: 290px;
        }
    }
`;

const Year20 = styled.h3`
    position: absolute;
    bottom: -43px;
    left: -6px;
    color: white;
    font-size: 215px;
    font-weight: 900;
    
    

    span {
        font-size: 94px;
        color: #232323;
    }

    @media (max-width: 970px) {
        font-size: 150px;
        bottom: -30px;
        span {
            font-size: 60px;
            color: #232323;
        }
        left: 30px;
    }

    @media (max-width: 670px) {
        bottom: -20px;
        font-size: 100px;
        span {
            font-size: 50px;
        }
    }

`;

const SubTitle = styled.h3`
    position: relative;
    z-index: 2;
    padding-left: 50px;
    font-weight: 600;

    span {
        color: #e31e24;
        font-weight: 900;
    }

    @media (max-width: 970px) {
        padding-left: 30px;
    }

    @media (max-width: 760px) {
        padding-left: initial;
    }
`;

const FlexContainer = styled.div`
    display: flex;

    @media (max-width: 760px) {
        flex-direction: column-reverse;
    }
`;

const Right = styled.div`
    padding-top: 115px;
    position: relative;

    ::after {
        content: '';
        display: block;
        width: 10000px;
        height: 100%;
        background-color: #f6f6f6;

        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
    }

    h2 {
        padding-left: 50px;
        margin-bottom: 20px;
        position: relative;
        z-index: 2;
    }

    @media (max-width: 1200px) {
        padding-top: 80px;
        h2 {
            margin-bottom: 15px;
        }
    }

    @media (max-width: 970px) {
        h2 {
            padding-left: 30px;
        }
    }

    @media (max-width: 760px) {

        h2 {
            padding-left: initial;
        }

        ::after {
            width: 100%;
            
        }
        
    }

    @media (max-width: 760px) {
        padding-top: 40px;
    }

    @media (max-width: 480px) {
        h2 {
            margin-bottom: 5px;
        }
    }
`;

const Left = styled.div`
    position: relative;
    width: 620px;
    height: inherit;

    img {
        position: absolute;
        bottom: 0;

    }
    

    ::before {
        content: '';
        display: block;
        background: url('/images/installWindowPage/experienceBg.jpg') center center no-repeat;
        position: absolute;
        right: 0;
        top: 0;
        width: 996px;
        height: 100%;
    }

    @media (max-width: 1200px) {
        width: 550px;

        img {
            width: 100%;
        }
    }

    @media (max-width: 760px) {
        height: 400px;
        width: 100%;
        position: relative;
        ::before {
            right: initial;
            left: 0;
            width: 100%;
            background: #f6f6f6;
        }
        img {
            background-size: cover;
            height: 350px;
            width: auto;
            top: initial;
            bottom: 0;
        }
    }

    @media (max-width: 670px) {
        height: 300px;
        img {
            height: 280px;
        }
    }
`;
