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
                            <h4>Мы знаем свою работу <br />и успешно устанавливаем <br /> окна уже </h4>
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
    
`;



const Wraper20Years = styled.div`
    position: relative;
    z-index: 2;
    position: relative;
    margin-top: 30px;
    width: 450px;
    height: 350px;
    background-color: #ffd138;
    padding-top: 50px;
    overflow: hidden;
    

    h4 {
        padding-left: 50px;
        font-size: 24px;
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
`;

const SubTitle = styled.p`
    position: relative;
    z-index: 2;
    font-size: 30px;
    padding-left: 50px;
    font-weight: 600;
    margin-bottom: 20px;

    span {
        color: #e31e24;
        font-weight: 900;
    }
`;

const FlexContainer = styled.div`
    display: flex;
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
`;

const Left = styled.div`
    position: relative;
    width: 620px;
    height: 665px;

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
`;
