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
                    <Window src="/images/plastikWindow/windowSaveHeat.jpg" alt="window" />
                </WraperWindow>
                <BrickWall src="/images/plastikWindow/brickWall.jpg" alt="brick" />
            </FlextContainer>
            <ContainerСoefficient>

                <TitleContainer>Коэффициент сопротивления <br /> теплопередачи К/Вт</TitleContainer>

                <WraperList>
                    <Item>
                        <p>Панорама</p>

                        <div className="garaph-info__wraper">
                            <Graph width={'100%'} />
                            <p>0,70 / 0,93</p>
                        </div>
                    </Item>
                    <Item>
                        <p>Обычный стеклопакет</p>

                        <div className="garaph-info__wraper">
                            <Graph width={'70%'} />
                            <p>0,35 / 0,50</p>
                        </div>
                    </Item>
                </WraperList>

            </ContainerСoefficient>
        </Section>
    )
}

export default HeatSaving;

const BrickWall = styled.img`
    @media (max-width: 1200px){
        width: auto;
        height: 300px;
    }
    
    @media (max-width: 960px) {
        height: 240px;
    }

    @media (max-width: 480px) {
        display: none;
    }
`;

const Window = styled.img`
    @media (max-width: 1200px) {
        width: auto;
        height: 380px;
    }

    @media (max-width: 960px) {
        height: 290px;
    }

    
`;


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

    @media (max-width: 1200px){
        display: block;
    }

    @media (max-width: 760px) {
        padding: 30px 30px;
    }
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

    @media (max-width: 760px) {
        margin-left: 0;
        width: 230px;
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

    .garaph-info__wraper {
        display: flex;
        align-items: center;
    }

    @media (max-width: 760px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        p {
            margin-bottom: 10px;
            width: fit-content;
            max-width: initial;
        }
    }

    @media (max-width: 670px) {

        .garaph-info__wraper {
            position: relative;

            p {
                position: absolute;
                margin-bottom: 0;
                left: 15px;
                color: #1c1c1c;
                font-weight: 700;
            }
        }
    }
`;

const TitleContainer = styled.h4` 

    color: white;
    line-height: 24px;
    font-weight: 600;
    font-size: 18px;

    @media (max-width: 960px){
        margin-bottom: 5px;
    }
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

    @media (max-width: 760px){

        margin-bottom: 50px;

        i {
            display: none;
        }
    }

    @media (max-width: 480px) {
        margin-bottom: 0;
    }
`;

const Title = styled.h2`
    text-transform: none;
    text-align: center;
    margin-bottom: 40px;
`;

const Section = styled.div`
    padding-bottom: 100px;

    @media (max-width: 1200px){
        padding-top: 80px;
        padding-bottom: 80px;
    }

    @media (max-width: 960px){
        padding-top: 60px;
        padding-bottom: 60px;
    }

    @media (max-width: 760px){
        padding-top: 40px;
        padding-bottom: 40px;
    }
`;

const FlextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 760px){
        flex-direction: column;
    }
`;
