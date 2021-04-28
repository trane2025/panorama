
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

    @media (max-width: 480px) {
        background: url('/images/homePage/girl.png') no-repeat bottom;
        background-color: #fce9ad;
        padding-top: 40px;
        background-size: 350px;
        background-position-x: -50px;
    }
`;

const Wraper = styled.div`
    display: flex;
    justify-content: space-between;
    background: url('/images/homePage/girl.png') no-repeat bottom;
    min-height: 630px;
    background-position-x: 315px;

    @media (max-width: 480px) {
        display: block;
        background: none;
        min-height: 550px;
    }
`;

const TitleWraper = styled.div`
    border-radius: 20px 20px 0px 20px;
    width: fit-content;
    background: white;
    box-shadow: 20.743px 23.037px 18px 0px rgba(57, 57, 57, 0.11);
    padding: 35px 65px;
    margin-bottom: 60px;
    
    @media (max-width: 480px) {
        border-radius: 10px 10px 0px 10px;
        margin-bottom: 20px;
        padding: 15px 20px;
        
    }
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

    @media (max-width: 480px) {

        border-radius: ${({ direction }) => direction === 'left' ? '10px 10px 10px 0px' : '10px 10px 0px 10px'};
        padding: 15px 20px;
        margin-bottom: 20px;
        
        h3 {
            font-size: 18px;
        }
    }    
`;

const Left = styled.div`

`;

const Right = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;


