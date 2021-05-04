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
                    <WraperImage>
                        <PeopleAstrachan src="/images/plastikWindow/AstrakhanPeople-min.png" alt="people" />
                    </WraperImage>

                </FlexContainer>
            </Container>
        </BackGround>
    )
}

export default WhyChoose;

const WraperImage = styled.div`
    position: relative;
    width: 100%;
    height: 720px;

    ::before {
        content: '';
        position: absolute;
        z-index: 1;
        width: 947px;
        height: 100%;
        background: url('/images/plastikWindow/backWhyChouse.jpg') no-repeat;
    }

    @media (max-width: 1200px){
        height: 606px;
    }

    @media (max-width: 970px){
        height: 520px;
            ::before {
                width: 600px;
                background-size: contain;
                background-position: bottom;
            }
        
    }

    @media (max-width: 760px){
        left: -15px;
        height: 390px;

        ::before {
            width: 480px;
        }
    }

    @media (max-width: 480px){
        height: 285px;

        ::before {
            width: 340px;
        }
    }
`;

const PeopleAstrachan = styled.img`
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: -100px;

    @media (max-width: 970px){
        height: 60%;
        width: auto;
        left: -90px;
    }

    @media (max-width: 760px){
        left: 0;
        height: 75%;
    }

    @media (max-width: 480px){

    }
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: flex-end;

    @media (max-width: 760px){
        display: block;
    }
`;

const AskTheQuestions = styled.p`
    
    max-width: 390px;
    color: white;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;


    @media (max-width: 970px) {
        font-size: 20px;
        line-height: initial;
        max-width: 320px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        line-height: initial;
        max-width: 260px;
    }
`;

const WraperText = styled.div`
    padding: 100px 0;
    padding-right: 110px;
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

    @media (max-width: 1200px){
        padding-top: 80px;
        padding-bottom: 80px;

        h3 {
            margin-top: 15px;
            line-height: 30px;
        }
    }

    @media (max-width: 970px){
        padding-top: 60px;
        padding-bottom: 60px;
        padding-right: 60px;
    }

    @media (max-width: 760px){
        padding-top: 40px;
        padding-bottom: 0px;
        padding-right: 0px;
    }

    
    @media (max-width: 670px){
       
            

        h3 {
            margin-top: 10px;
            margin-bottom: 15px;
        }
        
    }

    @media (max-width: 480px){
       
            

       h3 {
           margin-top: 5px;
           margin-bottom: 10px;
           line-height: 20px;
           width: fit-content;
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

    @media (max-width: 970px){
        li {
            padding: 15px 15px;

            p {
                font-size: 18px;
            }
        }
    }

    @media (max-width: 670px){
        li {
            

            p {
                font-size: 16px;
            }
        }
    }

    @media (max-width: 480px){
        li {
            

            p {
                font-size: 14px;
            }
        }
    }

`;

const BackGround = styled.section`
    background-image: -moz-linear-gradient( 127deg, rgb(192,24,24) 0%, rgb(248,61,61) 100%);
    background-image: -webkit-linear-gradient( 127deg, rgb(192,24,24) 0%, rgb(248,61,61) 100%);
    background-image: -ms-linear-gradient( 127deg, rgb(192,24,24) 0%, rgb(248,61,61) 100%);
    overflow: hidden;
`;
