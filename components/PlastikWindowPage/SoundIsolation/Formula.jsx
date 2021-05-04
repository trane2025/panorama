import styled from 'styled-components';
import Container from '../../UI/Container';

function Formula() {
    return (
        <BackGround>
            <Container>
                <h2><span className='red-text'>Формула спокойного</span> <br /> отдыха от «Панорама» </h2>
                <FormulaList>
                    <FormulaItem >
                        <h2>75 дБ</h2>
                        <p>Уровень шума 6 полосной автострады</p>
                    </FormulaItem>
                    <Operator>
                        <h2>-</h2>
                    </Operator>
                    <FormulaItem color={'#f3e905'}>
                        <h2>40 дБ</h2>
                        <p>Уровень звукоизоляции окна «Панарама»</p>
                    </FormulaItem>
                    <OperatorResult>
                        <h2>=</h2>
                    </OperatorResult>
                    <ResultItem >
                        <h2>35 дБ</h2>
                        <p>Допустимый нормами звуковой фон во время сна</p>
                    </ResultItem>
                    <Grafik>
                        <GrafikTitle>Коэффициент сопротивления <br /> теплопередачи дБ</GrafikTitle>
                        <WraperList>
                            <Item>
                                <ItemTitle>Панорама</ItemTitle>
                                <WraperGraph>
                                    <Graph width={'100%'} />
                                    <p>33 / 36</p>
                                </WraperGraph>
                            </Item>
                            <Item>
                                <ItemTitle>Обычный стеклопакет</ItemTitle>
                                <WraperGraph>
                                    <Graph width={'70%'} />
                                    <p>29 / 30</p>
                                </WraperGraph>
                            </Item>
                        </WraperList>
                    </Grafik>
                </FormulaList>
            </Container>
        </BackGround>
    )
}

export default Formula;

const WraperList = styled.ul`
    
`;

const OperatorResult = styled.li`
    margin: 0 10px;
    position: relative;
    top: -45px;
    h2 {
        font-size: 50px;
    }

    @media (max-width: 760px) {
        display: none;
    }
`;

const ItemTitle = styled.p`
    
        color: white;
        margin-bottom: 10px;
    
`;

const ResultItem = styled.li`
    background-color: #e6e6e6;
    height: 230px;
    padding: 0 30px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    p {
        width: 130px;
        max-width: 130px;
        font-weight: 600;
        text-align: center;
        margin-top: 10px;
    }

    @media (max-width: 760px) {
        width: 100%;
        margin-top: 20px;
        height: 200px;
    }

    @media (max-width: 480px) {
        width: 290px;
        margin-top: 15px;
        padding: 30px 0;
        height: fit-content;

        p {
            max-width: 140px;
            font-size: 12px;
            font-weight: 600;
            line-height: 16px;
        }
    }

    
`;



const Graph = styled.div`
    width: 250px;
    height: 25px;
    background-color: #464646;
    margin-right: 30px;

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

const WraperGraph = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    p {
        color: white;
    }

    @media (max-width: 480px) {
        p {
            position: absolute;
            left: 10px;
            margin-bottom: 0;
            color: #1e1e1e;
            font-weight: 800;
        }
    }
`;

const Item = styled.li`
    margin-top: 15px;

    
`;

const BackGround = styled.div`
    background: url('/images/plastikWindow/sound-isolation/formul-back.jpg') no-repeat center center;
    background-color: #f5f3f2;
    padding: 100px 0;

    h2 {
        text-align: center;
        text-transform: none;
    }

    @media (max-width: 1200px) {
        padding: 80px 0; 
    }

    @media (max-width: 970px) {
        padding: 60px 0; 
    }
    @media (max-width: 670px) {
        padding: 40px 0; 
    }
`;

const FormulaList = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 50px;
    
    @media (max-width: 1200px) {
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (max-width: 760px) {
        margin-top: 20px;
    }

    @media (max-width: 480px) {
        margin-top: 15px;
    }
`;

const FormulaItem = styled.li`
    background-color: ${({ color }) => color ? color : '#e6e6e6'};
    height: 230px;
    padding: 0 30px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    p {
        width: 130px;
        max-width: 130px;
        font-weight: 600;
        text-align: center;
        margin-top: 10px;
    }

    @media (max-width: 760px) {
        width: 45%;
        height: 200px;
    }

    @media (max-width: 480px) {
        width: 130px;
        padding: 30px 0;
        height: fit-content;

        p {
            max-width: 85px;
            font-size: 12px;
            font-weight: 600;
            line-height: 16px;
        }
    }
    
`;

const Operator = styled.li`
    margin: 0 10px;
    position: relative;
    top: -45px;
    h2 {
        font-size: 50px;
    }

    @media (max-width: 480px) {
        top: -30px;
        margin: 0 5px;
        h2 {
            font-size: 40px;
        }
    }
`;

const Grafik = styled.li`
    margin-left: 15px;
    width: 100%;
    height: 230px;
    background-image: -moz-linear-gradient( 149deg, rgb(45,44,44) 0%, rgb(36,36,36) 100%);
    background-image: -webkit-linear-gradient( 149deg, rgb(45,44,44) 0%, rgb(36,36,36) 100%);
    background-image: -ms-linear-gradient( 149deg, rgb(45,44,44) 0%, rgb(36,36,36) 100%);
    padding: 20px 30px;

    @media (max-width: 1200px) {
        margin-left: 0;
        max-width: 760px;
        margin-top: 30px;
    }

    @media (max-width: 760px) {
        margin-top: 20px;
        height: fit-content;
    }
`;

const GrafikTitle = styled.h4`
    color: white;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
`;