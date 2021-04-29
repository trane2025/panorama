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
                        <Text><span className='black-text'>Жалюзи (рольшторы - разновидность жалюзи)</span> - <br /> это отличная возможность спрятать от солнца <br /> и чужих глаз свой дом и свою семью.</Text>
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
    align-items: center;
`;

const Discription = styled.div`
    padding: 100px 0;
    padding-right: 50px;

    h2 {
        width: 500px;
        min-width: 500px;
        color: white;
        line-height: 46px;
    }

    
`;

const ImageWraper = styled.div`
    position: relative;
    height: 700px;
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
`;

const WraperQustion = styled.div`
    
    margin-bottom: 25px;
    h3{
        width: fit-content;
        font-size: 24px;
        font-weight: 900;
        background-color: #fff825;
        padding: 10px 25px;
    }
`;

const Text = styled.p`
    
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-top: 25px;
    line-height: 28px;
    
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
`;
