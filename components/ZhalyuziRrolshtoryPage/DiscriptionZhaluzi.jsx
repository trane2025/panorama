import React from 'react'
import styled from 'styled-components';
import Container from '../UI/Container';

function DiscriptionZhaluzi() {
    return (
        <Section>
            <Container>
                <FlexContainer>
                    <Discription>
                        <WraperQustion>
                            <h3>Для чего нужны <br /> жалюзи и рольшторы?</h3>
                        </WraperQustion>
                        <h2>Яркое солнце, <span className='yellow-text'>назойливые взгляды,</span> пасмурная погода</h2>
                        <WraperText>
                            Иногда так хочется от всего этого отгородиться, спрятаться, чтобы никто <br /> не видел и не слышал.
                        </WraperText>
                        <Text><span className='black-text'>Жалюзи (рольшторы&nbsp; разновидность жалюзи)&nbsp;&mdash;</span> это отличная возможность спрятать от&nbsp;солнца и&nbsp;чужих глаз свой дом и&nbsp;свою семью</Text>
                    </Discription>
                    <ImageWraper>
                        <img src="/images/zhalyuziRrolshtoryPage/question-banner.jpg" alt="question-banner" />
                    </ImageWraper>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default DiscriptionZhaluzi;

const Section = styled.div`
    background-image: -moz-linear-gradient( 127deg, rgb(192,24,24) 0%, rgb(248,61,61) 100%);
    background-image: -webkit-linear-gradient( 127deg, rgb(192,24,24) 0%, rgb(248,61,61) 100%);
    background-image: -ms-linear-gradient( 127deg, rgb(192,24,24) 0%, rgb(248,61,61) 100%);
`;

const FlexContainer = styled.section`
    display: flex;

    @media (max-width: 870px) {
        flex-direction: column;
    }
`;

const Discription = styled.div`
    padding: 100px 0;
    padding-right: 50px;

    h2 {
        width: 500px;
        min-width: 500px;
        color: white;
    }

    @media (max-width: 1200px) {
        padding: 80px 0;

    }

    @media (max-width: 960px) {
        padding: 60px 0;
        h2 {
            width: initial;
            min-width: initial;
        }
    }

    @media (max-width: 670px) {
        padding-top: 40px;
        padding-bottom: 20px;
    }    
`;

const ImageWraper = styled.div`
    position: relative;
    height: inherit;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 1020px;
        height: 100%;
    }

    @media (max-width: 1200px) {
        img {
            width: auto;
            height: 100%;
        }
    }

    @media (max-width: 870px) {
        height: 300px;
    }

    @media (max-width: 480px) {
        height: 250px;
    }
`;

const WraperQustion = styled.div`
    
    margin-bottom: 25px;
    h3 {
        width: fit-content;
        font-size: 24px;
        font-weight: 900;
        background-color: #fff825;
        padding: 10px 25px;
    }

    @media (max-width: 1200px) {
        h3 {
            font-size: 20px;
        }
    }

    @media (max-width: 480px) {
        margin-bottom: 15px;
        h3 {
            font-size: 16px;
            padding: 10px 15px;
        }
    }
`;

const Text = styled.p`
    
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-top: 25px;
    line-height: 28px;
    max-width: 500px;

    @media (max-width: 1200px) {
        font-size: 16px;
        line-height: 22px;
    }
    
    @media (max-width: 480px) {
        margin-top: 15px;
        font-size: 14px;
    }
`;

const WraperText = styled.p`
    max-width: 420px;
    width: fit-content;
    padding: 15px 25px;
    border-radius: 20px 20px 0px 20px;
    background-color: white;
    color: #1e1e1e;
    font-weight: 600;
    margin-top: 25px;
    line-height: 28px;
    font-size: 18px;

    @media (max-width: 1200px) {
        font-size: 16px;
        display: inline-block;
        line-height: 22px;
        border-radius: 10px 10px 0px 10px;
    }

    @media (max-width: 480px) {
        margin-top: 15px;
    }
`;
