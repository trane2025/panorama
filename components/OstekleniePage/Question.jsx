import styled from "styled-components";
import Container from "../UI/Container";


function Question() {
    return (
        <Section>
            <Container>
                <FlexContainer>
                    <Left>
                        <Background src="/images/installWindowPage/qustion.jpg" alt="banner" />
                        <Men src='/images/installWindowPage/men.png' alt='men'></Men>
                    </Left>
                    <Right>
                        <Title>Вам необходимо застеклить</Title>
                        <SubTitle>балкон, лоджию, квартиру <br /> или коттедж</SubTitle>
                        <ul>
                            <li>
                                <img src="/images/installWindowPage/questionImage/image1.jpg" alt="question" />
                            </li>
                            <li>
                                <img src="/images/installWindowPage/questionImage/image2.jpg" alt="question" />
                            </li>
                            <li>
                                <img src="/images/installWindowPage/questionImage/image3.jpg" alt="question" />
                            </li>
                            <li>
                                <img src="/images/installWindowPage/questionImage/image4.jpg" alt="question" />
                            </li>
                        </ul>
                    </Right>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default Question;

const Section = styled.section`
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 450px;
    position: relative;
    height: 745px;
    min-width: 450px;
    
`;

const Background = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    width: 820px;
    height: 100%;
`;

const Men = styled.img`
    position: absolute;
    bottom: 0;
`;

const Right = styled.div`
    padding-top: 100px;
    padding-left: 50px;
    
    ul{
        display: flex;
        flex-wrap: wrap;
        margin: -8px;

        li {
            margin: 8px;
        }
    }
`;

const Title = styled.h2`
    padding: 20px;
    background-color: #fff825;
    text-transform: none;
    width: fit-content;
`;

const SubTitle = styled.h2`
    margin-top: 20px;
    width: fit-content;
    margin-bottom: 20px;
`;
