import React from 'react'
import styled from 'styled-components';
import Container from '../UI/Container';

function WhereToApply() {
    return (
        <Section>
            <Container>
                <FlexContainer>
                    <Left>
                        <h2><span className='yellow-text'>Но не ЗНАЕТЕ</span>  <br /> <span className='white-text'>КУДА лучше</span> <br /> <span className='white-text'>ОБРАТИТЬСЯ?</span> </h2>
                        <Text>Чтобы все и сразу, <br /> в одном месте и без  <br /> лишней суеты </Text>
                        <Text weight={600}>Что&nbsp;бы все и&nbsp;сразу, в&nbsp;одном месте и&nbsp;без лишней суеты </Text>
                        <Attention>И качество на много лет</Attention>
                    </Left>
                    <Right>
                        <Phone src="/images/installWindowPage/phone.png" alt="phone" />
                    </Right>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default WhereToApply;



const Attention = styled.h3`
    
    font-weight: 900;
    padding: 15px 20px;
    background-color: #fff825;
    text-transform: uppercase;
    margin-top: 20px;
    min-width: 406px;

    @media (max-width: 760px) {
        width: fit-content;
        min-width: initial;
    }
`;




const Text = styled.p`
    color: white;
    font-size: 24px;
    margin-top: 20px;
    line-height: 34px;
    font-weight: ${({ weight }) => weight ? weight : 400};

    @media (max-width: 960px) {
        font-size: 20px;
        line-height: 28px;
        margin-top: 15px;
    }

    @media (max-width: 960px) {
        max-width: 400px;
    }

    @media (max-width: 670px) {
        font-size: 16px;
        line-height: 22px;
        margin-top: 10px;
    }
`;

const Section = styled.section`
    background-image: linear-gradient(127deg,rgb(192,24,24) 0%,rgb(248,61,61) 100%);
`;

const FlexContainer = styled.div`
    display: flex;

    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

const Left = styled.div`
    padding-top: 100px;
    padding-right: 130px;
    padding-bottom: 100px;

    @media (max-width: 1200px) {
        padding-right: 50px;
        padding-bottom: 80px;
        padding-top: 80px;
    }

    @media (max-width: 960px) {
        padding-bottom: 60px;
        padding-top: 60px;
    }

    @media (max-width: 760px) {
        padding-right: initial;
    }

    @media (max-width: 670px) {
        padding-bottom: 40px;
        padding-top: 40px;
    }
`;

const Right = styled.div`
    position: relative;
    width: 100%;
    height: inherit;

    ::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 1047px;
        height: 100%;
        background: url('/images/installWindowPage/wheatoapply.jpg') center center no-repeat;
    }

    @media (max-width: 760px){
        height: 290px;
        left: 280px;
    }

    @media (max-width: 670px){
        height: 250px;
        left: 100px;
    }
`;

const Phone = styled.img`
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: -100px;

    @media (max-width: 970px) {
       width: auto;
       height: 500px; 
    }

    @media (max-width: 760px) {
       width: auto;
       height: 420px; 
    }

    @media (max-width: 670px) {
       width: auto;
       height: 350px; 
    }
`;

