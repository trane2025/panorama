import styled from 'styled-components';
import Container from '../../UI/Container';
import TitleAdvantages from '../../UI/TitleAdvantages';
import WhatSafety from './WhatSafety';

function DurabilitySafety() {
    return (
        <>
            <BackGround>
                <Container>
                    <TitleAdvantages colorNumber='#ed271d'><span>03 </span> прочность и безопасность</TitleAdvantages>
                    <WraperText>
                        <TextItem>
                            <h3>Окно — зона риска для ребенка</h3>
                        </TextItem>
                        <TextItem>
                            <p>Наш ребенок не всегда в поле нашего зрения.
                        <br /> Это факт, как бы нам не хотелось выглядеть суперродителями
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
                    <WraperDiscription>
                        <img src="/images/plastikWindow/matherDescription.svg" alt="matherDescription" />
                    </WraperDiscription>
                </Container>
            </BackGround>
            <WhatSafety />
        </>
    )
}

export default DurabilitySafety;

const WraperDiscription = styled.div`
    position: absolute;
    right: 0;
    bottom: -20px;
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
`;

const TextWarning = styled.li`
    margin-bottom: 30px;
    background-color: #fed533;
    padding: 15px 25px;
    width: fit-content;

    h3 {
        font-weight: 900;
        text-shadow: 0.07px 0.998px 0px rgba(255, 255, 255, 0.46);
        font-size: 22px;
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
`;

const BackGround = styled.section`
    background: url('/images/plastikWindow/safety.jpg') no-repeat center center;
    padding: 85px 0 ;
`;
