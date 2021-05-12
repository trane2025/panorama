import React from 'react'
import styled from 'styled-components';
import Container from '../UI/Container';

function About() {
    return (
        <Section>
            <Container>
                <FlexContainer>
                    <Description>
                        <h2>Алюминиевые <br /> <span className='red-text'>Конструкции</span></h2>
                        <Paragraf>
                            <span>Алюминий</span>&nbsp;&mdash; лёгкий, прочный материал, устойчивый к&nbsp;воздействию окружающей среды
                        </Paragraf>
                        <Paragraf>
                            Алюминий, получаемый из&nbsp;минерального боксита, является <span>экологически чистым материалом</span>, не&nbsp;содержит примесей тяжелых металлов, не&nbsp;выделяет вредных веществ под воздействием ультрафиолетовых лучей и&nbsp;сохраняет работоспособность в&nbsp;любых климатических условиях при перепадах температур
                        </Paragraf>
                        <Atention>
                            от -80 до +100 градусов
                        </Atention>
                        <Paragraf>
                            Эти конструкции становятся незаменимы, когда необходимо <span>остеклить проёмы большой площади или сложной формы</span>
                        </Paragraf>
                        <Paragraf>
                            Специальные защитные покрытия придают алюминиевым профилям надежность и привлекательный <span>внешний вид</span>
                        </Paragraf>
                    </Description>
                    <ImageWraper>
                        <img src="/images/alumiumPage/bannerAbout.jpg" alt="bannerAbout" />
                    </ImageWraper>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default About;

const ImageWraper = styled.div`
    width: 100%;
    height: inherit;
    position: relative;

    img {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
    }

    @media (max-width: 760px) {
        display: none;
    }
`;

const Section = styled.div`
    h2 {
        margin-bottom: 20px;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: inherit;
`;

const Description = styled.div`
    padding: 100px 0;
    padding-right: 70px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
        padding: 80px 0;
        padding-right: 30px;
    }

    @media (max-width: 960px) {
        padding: 60px 0;
        padding-right: 30px;
    }

    @media (max-width: 670px) {
        padding: 40px 0;
    }
`;

const Paragraf = styled.p`
    margin: 5px 0;
    width: 510px;
    line-height: 24px;
    span {
        font-weight: 900;
    }

    @media (max-width: 1200px) {
       width: 480px;
    }

    @media (max-width: 670px) {
       width: initial; 
       max-width: 480px;
       line-height: 20px;
    }
`;

const Atention = styled.h4`
    padding: 15px 20px;
    text-transform: uppercase;
    font-weight: 900;
    margin: 10px 0;
    background-color: #f7ed04;
    width: fit-content;

`;


