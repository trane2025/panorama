
import styled from 'styled-components';
import Container from '../UI/Container';

function HardСhoice() {
    return (
        <Section>
            <Container>
                <Wraper>
                    <Left>
                        <TitleWraper>
                            <h2>Не знаете<br />какие выбрать?</h2>
                        </TitleWraper>
                        <QustionWraper
                            style={{ marginLeft: '80px' }}
                        >
                            <h3>Какие лучше?</h3>
                        </QustionWraper>
                    </Left>
                    <Right>

                        <QustionWraper
                            direction='left'
                            color='#ffea00'
                            marginRight='80px'
                        >
                            <h3>А какие есть?</h3>
                        </QustionWraper>



                        <QustionWraper
                            direction='left'
                            color='#ffea00'
                        >
                            <h3>В чем разница?</h3>
                        </QustionWraper>



                    </Right>
                </Wraper>
            </Container>
        </Section>
    )
}

export default HardСhoice;

const Section = styled.section`
    background: url('/images/homePage/hardChoice.jpg') no-repeat center center;
    padding-top: 100px;
    background-color: #fbeecb;
`;

const Wraper = styled.div`
    display: flex;
    justify-content: space-between;
    background: url('/images/homePage/girl.png') no-repeat bottom;
    min-height: 630px;
    background-position-x: 315px;
`;

const TitleWraper = styled.div`
    border-radius: 20px 20px 0px 20px;
    background: white;
    box-shadow: 20.743px 23.037px 18px 0px rgba(57, 57, 57, 0.11);
    padding: 35px 65px;
    margin-bottom: 60px;
    
`;

const QustionWraper = styled.div`
    padding: 30px 40px;
    border-radius: ${({ direction }) => direction === 'left' ? '20px 20px 20px 0px' : '20px 20px 0px 20px'};
    box-shadow: 20.743px 23.037px 18px 0px rgba(57, 57, 57, 0.11);
    background: ${({ color }) => color ? color : 'white'};
    width: fit-content;
    margin: 0;
    margin-bottom: 60px;
    margin-right: ${({ marginRight }) => marginRight ? marginRight : '0'};

    h3 {
        font-weight: 900;
        font-size: 30px;
    }
`;

const Left = styled.div`

`;

const Right = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;


