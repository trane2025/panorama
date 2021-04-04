import styled from 'styled-components';

function HeatSaving() {
    return (
        <Section>
            <Title>Теплосбережение окон «Панорама» <br /> эквивалентно толщине <span className='red-text'>кирпичной стены</span></Title>
            <FlextContainer>
                <WraperWindow>
                    <i>
                        <img src="/images/plastikWindow/Arrow.svg" alt="arrow" />
                    </i>
                    <img src="/images/plastikWindow/windowSaveHeat.jpg" alt="window" />
                </WraperWindow>
                <img src="/images/plastikWindow/brickWall.jpg" alt="brick" />
            </FlextContainer>
            <ContainerСoefficient>

                <TitleContainer>Коэффициент сопротивления <br /> теплопередачи К/Вт</TitleContainer>

                <WraperList>
                    <Item>
                        <p>Панорама</p>
                        <Graph width={'100%'} />
                        <p>0,70 / 0,93</p>
                    </Item>
                    <Item>
                        <p>Обычный стеклопакет</p>
                        <Graph width={'70%'} />
                        <p>0,35 / 0,50</p>
                    </Item>
                </WraperList>

            </ContainerСoefficient>
        </Section>
    )
}

export default HeatSaving;


const ContainerСoefficient = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    background-image: -moz-linear-gradient( 149deg, rgb(45,44,44) 0%, rgb(36,36,36) 100%);
    background-image: -webkit-linear-gradient( 149deg, rgb(45,44,44) 0%, rgb(36,36,36) 100%);
    background-image: -ms-linear-gradient( 149deg, rgb(45,44,44) 0%, rgb(36,36,36) 100%);
    width: 100%;
    padding: 30px 70px;
`;

const WraperList = styled.ul``;

const Graph = styled.div`
    width: 280px;
    height: 30px;
    background-color: #464646;
    margin: 0 30px;

    ::before {
        content: '';
        display: block;
        width: ${({ width }) => width};
        height: 100%;
        background-image: -moz-linear-gradient( 90deg, rgb(240,232,37) 0%, rgb(251,246,109) 83%, rgb(254,248,93) 100%);
        background-image: -webkit-linear-gradient( 90deg, rgb(240,232,37) 0%, rgb(251,246,109) 83%, rgb(254,248,93) 100%);
        background-image: -ms-linear-gradient( 90deg, rgb(240,232,37) 0%, rgb(251,246,109) 83%, rgb(254,248,93) 100%);
    }
`;

const Item = styled.li`
    display: flex;
    align-items: center;
    margin: 15px 0;

    p {
        color: white;
        max-width: 100px;
        width: 100px;
    }
`;

const TitleContainer = styled.h4` 

    color: white;
    line-height: 36px;
    font-weight: 600;
    font-size: 24px;
`;


const WraperWindow = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        position: absolute;
        right: -80px;
        
    }

   
`;

const Title = styled.h2`
    text-transform: none;
    text-align: center;
    margin-bottom: 40px;
`;

const Section = styled.div`
    margin-bottom: 30px;
`;

const FlextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
