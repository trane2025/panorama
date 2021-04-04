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
                    <Operator>
                        <h2>=</h2>
                    </Operator>
                    <FormulaItem >
                        <h2>35 дБ</h2>
                        <p>Допустимый нормами звуковой фон во время сна</p>
                    </FormulaItem>
                    <Grafik>
                        <GrafikTitle>Коэффициент сопротивления <br /> теплопередачи дБ</GrafikTitle>
                        <WraperList>
                            <Item>
                                <p>Панорама</p>
                                <Graph width={'100%'} />
                                <p>33 / 36</p>
                            </Item>
                            <Item>
                                <p>Обычный стеклопакет</p>
                                <Graph width={'70%'} />
                                <p>29 / 30</p>
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
    margin-top: 40px;
`;

const Graph = styled.div`
    width: 250px;
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

const BackGround = styled.div`
    background: url('/images/plastikWindow/formula.jpg') no-repeat center center;
    padding: 100px 0;

    h2 {
        text-align: center;
        text-transform: none;
    }
`;

const FormulaList = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 50px;
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
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        margin-top: 10px;
    }
    
`;

const Operator = styled.li`
    margin: 0 10px;
    position: relative;
    top: -45px;
    h2 {
        font-size: 50px;
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
`;

const GrafikTitle = styled.h4`
    color: white;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
`;