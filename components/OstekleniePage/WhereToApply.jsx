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
                        <Text>Что бы все и сразу, <br /> в одном месте и без  <br /> лишней суеты </Text>
                        <Text weight={600}>Что бы все и сразу, <br /> в одном месте и без  <br /> лишней суеты </Text>
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
    font-size: 24px;
    font-weight: 900;
    padding: 15px 20px;
    background-color: #fff825;
    text-transform: uppercase;
    margin-top: 20px;
    min-width: 406px;
`;




const Text = styled.p`
    color: white;
    font-size: 24px;
    margin-top: 20px;
    line-height: 34px;
    font-weight: ${({ weight }) => weight ? weight : 400};
`;

const Section = styled.section`
    background-image: linear-gradient(127deg,rgb(192,24,24) 0%,rgb(248,61,61) 100%);
`;

const FlexContainer = styled.div`
    display: flex;

`;

const Left = styled.div`
    padding-top: 100px;
    padding-right: 130px;
    padding-bottom: 79px;
`;

const Right = styled.div`
    position: relative;
    width: 100%;
    height: 623px;

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

`;

const Phone = styled.img`
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: -136px;
`;

