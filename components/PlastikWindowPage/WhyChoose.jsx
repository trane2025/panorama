import styled from 'styled-components';
import Container from '../UI/Container';

function WhyChoose() {
    return (
        <BackGround>
            <Container>
                <FlexContainer>
                    <WraperText>
                        <h2><span>Почему</span> Астраханцы</h2>
                        <h3>Все чаще выбирают платиковые окна от <span>«Панорамы» ?</span></h3>
                        <ListMessangers>
                            <li>
                                <p>На что действительно</p>
                            </li>
                            <li>
                                <p>cтоит Обратить внимание</p>
                            </li>
                            <li>
                                <p>при выборе пластиковых окон ?</p>
                            </li>
                        </ListMessangers>
                        <AskTheQuestions>Мы занимаемся установкой пластиковых окон уже <span className='yellow-text black-text'>20 лет</span> <span className='black-text'>и нашли ответ на этот вопрос</span></AskTheQuestions>
                    </WraperText>
                    <img src="/images/plastikWindow/AstrakhanPeople-min.png" alt="people" />
                </FlexContainer>
            </Container>
        </BackGround>
    )
}

export default WhyChoose;

const FlexContainer = styled.div`
    display: flex;
    align-items: flex-end;
`;

const AskTheQuestions = styled.p`
    
    max-width: 390px;
    color: white;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    
`;

const WraperText = styled.div`
    padding: 100px 0;
    h2 {
        color: white;

        span {
            color: #ffea00;
        }
    }

    h3 {
        width: 490px;
        color: white;
        font-weight: 800;
        margin-top: 25px;
        margin-bottom: 25px;
        text-transform: uppercase;
        line-height: 40px;

        span {
            color: #ffea00; 
        }
    }
`;


const ListMessangers = styled.ul`
    li {
        background-color: #ffea00;
        padding: 15px 20px;
        width: fit-content;
        margin-bottom: 15px;

        p {
            color: #a21414;
            font-size: 20px;
            font-weight: 800;
            text-transform: uppercase;
        }



    }
`;

const BackGround = styled.section`
    background: url('/images/plastikWindow/whyChoose.jpg') no-repeat center center;
`;
