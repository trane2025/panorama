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
                            <img src="/images/plastikWindow/window-min.png" alt="window" />
                            <DescriptionAction color={'#9fcbf9'} left={'60px'} bottom={'-40px'}>
                                <div className="wraper-description">
                                    <h3>до 57%</h3>
                                    <p>экономия на охлаждении</p>
                                </div>
                            </DescriptionAction>
                            <DescriptionAction color={'#f3e905'} right={'40px'} bottom={'-40px'}>
                                <div className="wraper-description">
                                    <h3>до 57%</h3>
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
`;

const Item = styled.li`
    background-color: white;
    box-shadow: 0px 0px 21px 0px rgba(39, 39, 39, 0.2);
    padding: 15px 20px;
    margin-top: 10px;

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
  
    background-color: ${({ summer }) => summer ? 'rgb(235, 216, 7)' : '#10385b'};
    box-shadow: 0px 0px 21px 0px rgba(39, 39, 39, 0.2);
    padding: 15px 30px;
    

    h3 {
        font-weight: 900;
        color:  ${({ summer }) => summer ? '#272727' : 'white'};
    }
`;

const FlexContainer = styled.div`
    display: flex;
    padding-top: 85px;

    
`;

const Left = styled.div`

`;

const Center = styled.div`
    position: relative;

`;

const Right = styled.div`

`;

const BackGround = styled.section`
    background: url('/images/plastikWindow/energySave-min.jpg') no-repeat center center;
    padding: 100px 0;

`;

const Title = styled.h2`
    span {
        color: #f2a612;
        font-size: 58px;
    }
`;
