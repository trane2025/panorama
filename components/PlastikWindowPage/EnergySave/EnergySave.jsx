import styled from 'styled-components'
import Container from '../../UI/Container'
import HeatSaving from './HeatSaving'

function EnergySave() {
    return (
        <>
            <BackGround>
                <Container>
                    <Title><span>01</span> Энергосбережение</Title>
                    <FlexContainer>
                        <Left>
                            <TitleEconomy summer>
                                <h3>Экономия летом</h3>
                            </TitleEconomy>
                            <ul>
                                <Item>
                                    <h4>Защита от жары и ультрафиолета</h4>
                                    <p>Отсекает невидимую часть спектра - ультрафиолетовое (УФ) и инфракрасное излучение</p>
                                </Item>
                                <Item>
                                    <h4>Функция «Солнцезащита»</h4>
                                    <p>Отражает солнечное излучение, вызывающее нагрев помещения <br /> <span className='black-text'>до 2 раз</span> эффективнее чем обычные стеклопакеты</p>
                                </Item>
                            </ul>
                        </Left>
                        <Center>
                            <DescriptionAction color={'#9fcbf9'} left={'60px'} bottom={'-40px'}>
                                <div className="wraper-description">
                                    <h3>до 57%</h3>
                                    <p>экономия на охлаждении</p>
                                </div>
                            </DescriptionAction>
                            <DescriptionAction summer color={'#f3e905'} right={'40px'} bottom={'-40px'}>
                                <div className="wraper-description">
                                    <h3>до 45%</h3>
                                    <p>экономия на отоплении</p>
                                </div>
                            </DescriptionAction>
                        </Center>
                        <Right>
                            <TitleEconomy >
                                <h3>Экономия зимой</h3>
                            </TitleEconomy>
                            <ul>
                                <Item>
                                    <h4>Функция «Энергосбережение»</h4>
                                    <p>Мультифункциональное стекло сохраняет тепло в помещении <span className='black-text'>до 2 раз</span> эффективнее, чем обычные стеклопакеты</p>
                                </Item>
                                <Item>
                                    <h4>Функция «Антиконденсат»</h4>
                                    <p>Композитная термокерамика с теплопроводностью <br /> <span className='black-text'>в 1000 раз</span> ниже алюминиевой, защищает окно от промерзация и образования конденсата</p>
                                </Item>
                            </ul>
                        </Right>
                    </FlexContainer>
                </Container>
            </BackGround>
            <Container>
                <HeatSaving />
            </Container>
        </>
    )
}

export default EnergySave;



const DescriptionAction = styled.div`
    position: absolute;
    background-color: ${({ color }) => color};
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    bottom: ${({ bottom }) => bottom ? bottom : 'none'};
    left: ${({ left }) => left ? left : 'none'};
    right: ${({ right }) => right ? right : 'none'};


    .wraper-description {
        display: block;
        width: 145px;
        height: 145px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        

        p {
            text-align: center;
            font-weight: 600;
            margin-top: 3px;
        }
    }

    @media (max-width: 1200px){
        width: 130px;
        height: 130px;

        .wraper-description {
            width: 120px;
            height: 120px;


            p {
                font-size: 14px;
            }
        }   
    }

    @media (max-width: 970px){
        ${({ summer }) => !summer ? 'bottom: initial; left: 0; top: 0;' : 'bottom: 0; right:0;'};
    }

    @media (max-width: 480px){
        width: 110px;
        height: 110px;
        .wraper-description {
            width: 100px;
            height: 100px;


            p {
                font-size: 12px;
            }
        } 
    }
`;

const Item = styled.li`
    background-color: white;
    box-shadow: 0px 0px 21px 0px rgba(39, 39, 39, 0.2);
    padding: 15px 20px;
    margin-top: 10px;
    position: relative;
    z-index: 1;

    p {
       max-width: 210px;
    }

    h4 {
        margin-bottom: 5px;
        font-size: 18px;
        max-width: 170px;
    }
`;

const TitleEconomy = styled.div`
  
    background-color: ${({ summer }) => summer ? 'rgb(255 235 12)' : '#10385b'};
    box-shadow: 0px 0px 21px 0px rgba(39, 39, 39, 0.2);
    padding: 15px 30px;
    position: relative;
    z-index: 1;

    h3 {
        font-weight: 900;
        color:  ${({ summer }) => summer ? '#272727' : 'white'};
    }

    @media (max-width: 760px){
        padding: 15px;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    padding-top: 85px;
    position: relative;

    @media (max-width: 1200px){
        padding-top: 25px;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 970px){
        display: block;
    }
`;

const Left = styled.div`
    @media (max-width: 970px){
        max-width: 350px;
        padding-bottom: 230px;
        position: relative;
        
        ::before {
            content: '';
            display: block;
            position: absolute;
            width: 1000px;
            height: 100%;
            left: -15px;
            bottom: 0;
            background: url('/images/plastikWindow/mobile/summer-back.jpg') no-repeat bottom left;
            background-color: #fefcf0;
        }
    }

    @media (max-width: 760px){
        padding-bottom: 150px;
    }
`;

const Center = styled.div`
    position: relative;

    background: url('/images/plastikWindow/window-min.png') center center no-repeat;
    height: 513px;
    width: 610px;

    @media (max-width: 1200px){
        width: 430px;
        height: 361px;
        background-size: cover;
    }

    @media (max-width: 970px){
        background: url('/images/plastikWindow/mobile/windows-energy-save.png') center center no-repeat;
        position: absolute;
        z-index: 2;
        width: 400px;
        height: 400px;
        top: 486px;
    }

    @media (max-width: 760px){
        width: 360px;
        height: 250px;
        background-size: contain;
        top: 480px;
    }

    @media (max-width: 670px){
        top: 420px;
    }

    @media (max-width: 480px){
        width: 100%;
        height: 250px;
    }
`;

const Right = styled.div`
    @media (max-width: 970px){
        max-width: 350px;
        padding-top: 230px;
        padding-bottom: 60px;
        position: relative;
        ::before {
            content: '';
            display: block;
            position: absolute;
            width: 1000px;
            height: 100%;
            left: -15px;
            bottom: 0;
            background: url('/images/plastikWindow/mobile/winter-back.jpg') no-repeat top left;
            background-color: #0a162c
        }
    }

    @media (max-width: 760px){
        padding-bottom: 40px;
        padding-top: 150px;
    }
`;

const BackGround = styled.section`
    background: url('/images/plastikWindow/energySave-min.jpg') no-repeat center center;
    padding: 100px 0;
    @media (max-width: 1200px){
        background-size: cover;
        background-position: center center;
        padding: 80px 0;
    }

    @media (max-width: 970px) {
        background: #fefcf0;
        padding-top: 60px;
        padding-bottom: 0;
    }

    @media (max-width: 760px) {
        background: #fefcf0;
        padding-top: 40px;
    }
`;

const Title = styled.h2`
    span {
        color: #f2a612;
        font-size: 58px;
    }

    @media (max-width: 970px){
        span {
            font-size:40px;
        }
    }

    @media (max-width: 760px){
        span {
            font-size:36px;
        }
    }

    @media (max-width: 480px){
        span {
            font-size:30px;
        }
    }
`;
