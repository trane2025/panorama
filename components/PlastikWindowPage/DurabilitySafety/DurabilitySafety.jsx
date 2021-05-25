import styled from 'styled-components';
import Container from '../../UI/Container';
import TitleAdvantages from '../../UI/TitleAdvantages';
import WhatSafety from './WhatSafety';

function DurabilitySafety() {
    return (
        <>
            <BackGround>
                <Container>
                    <FlexContainer>
                        <LeftWraper>
                            <TitleAdvantages colorNumber='#ed271d'><span>03 </span> прочность и безопасность</TitleAdvantages>
                            <WraperText>
                                <TextItem>
                                    <h3>Окно — зона риска для ребенка</h3>
                                </TextItem>
                                <TextItem>
                                    <p>Наш ребенок не всегда в поле нашего зрения.
                                    <br /> Это факт, как бы нам не хотелось выглядеть суперродителями.
                                    <br /> Современная оконная фурнитура позволяет оградить ребенка от самостоятельного открытия окна. <span className='black-text'>НО ...</span></p>
                                </TextItem>
                                <TextWarning>
                                    <h3>ОКНО НА 80% — ЭТО СТЕКЛО!</h3>
                                </TextWarning>
                                <TextItem>
                                    <h3>Как сделать окно безопасным <br /> для малыша на 100% ?</h3>
                                </TextItem>
                                <TextResponse>
                                    <h3>ИСПОЛЬЗОВАТЬ ИНОВАЦИОННЫЙ БЕЗОПАСНЫЙ <br /> СТЕКЛОПАКЕТ ОТ «Панорама»</h3>
                                </TextResponse>
                            </WraperText>

                        </LeftWraper>
                        <RightWraper>
                            <Child src='/images/plastikWindow/safety/сhild.png' alt='сhild' />
                            <WraperDiscription>
                                <img src="/images/plastikWindow/matherDescription.svg" alt="matherDescription" />
                            </WraperDiscription>
                        </RightWraper>
                    </FlexContainer>
                </Container>
            </BackGround>
            <WhatSafety />
        </>
    )
}

export default DurabilitySafety;




const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    

    @media (max-width: 970px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const LeftWraper = styled.div`
    min-width: 700px;
    position: relative;
    z-index: 2;

    @media (max-width: 970px) {
        min-width: initial;
    }
`;

const Child = styled.img`
    position: absolute;
    left: 0;

    @media (max-width: 1200px) {
        left: initial;
        right: -100px;
    }

    @media (max-width: 970px) {
        left: initial;
        left: 0;
        height: 420px;
        width: auto;
    }

    @media (max-width: 480px) {
        height: 330px;
    }
`;

const RightWraper = styled.div`
    position: relative;
    width: 100%;
    height: 530px;

    @media (max-width: 970px) {
        height: 450px;
    }

    @media (max-width: 480px) {
        height: 400px;
    }
`;

const WraperDiscription = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;

    @media (max-width: 970px) {
        left: 185px;
    }

    @media (max-width: 480px) {
        left: initial;
        right: 0;
    }
`;

const TextItem = styled.li`
    margin: 12px 0;
`;

const TextResponse = styled.li`
    margin-top: 30px;
    width: fit-content;
    background-color: white;
    padding: 15px 25px;
    box-shadow: 4.213px 5.59px 9.8px 0.2px rgba(18, 18, 18, 0.07);

    h3 {
        font-weight: 900;
        font-size: 22px;
    }

    @media (max-width: 970px) {
        margin-top: 20px;
        padding: 15px 20px;
        h3 {
            font-size: 18px;
            line-height: 24px;
        }
        
    }

    @media (max-width: 670px) {
        
        h3 {
            font-size: 14px;
            line-height: 20px;
        }
        
    }
`;

const TextWarning = styled.li`
    margin-bottom: 30px;
    background-color: #f3e905;
    padding: 15px 25px;
    width: fit-content;

    h3 {
        font-weight: 900;
        text-shadow: 0.07px 0.998px 0px rgba(255, 255, 255, 0.46);
        font-size: 22px;
    }

    @media (max-width: 970px) {
        margin-bottom: 20px;
        padding: 15px 20px;
        h3 {
            font-size: 18px; 
        }
        
    }

    @media (max-width: 670px) {
        
        h3 {
            font-size: 14px;
            line-height: 20px;
        }
        
    }
`;

const WraperText = styled.ul`
    p {
        width: 430px;
        max-width: 450px;
        line-height: 28px;
        font-weight: 400;
        color: #5c5c5c;
    }

    @media (max-width: 970px){
        p {
            line-height: 24px;
        }
    }

    @media (max-width: 480px){
        p {
            width: auto;
            max-width: initial;
        }
    }
`;

const BackGround = styled.section`
    background: url('/images/plastikWindow/safety/background.jpg') no-repeat center center;
    background-color: #fdedba;
    padding: 85px 0 ;

    @media (max-width: 1200px) {
        background: #fff4cf;
    }

    @media (max-width: 970px) {
        
        padding: 60px 0;
    }

    @media (max-width: 670px) {
        padding: 40px 0;
    }
`;
