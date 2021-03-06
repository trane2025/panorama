import React from 'react'
import styled from 'styled-components';
import Container from '../UI/Container';
import TitleSection from '../UI/TitleSection';

function TypesOfProfileSystems() {
    return (
        <Section>
            <Container>
                <TitleSection colorAtantion='#e31e24'>
                    <span>Виды</span> профильных <br /> систем
                    </TitleSection>
                <List>
                    <Item backColorMobyle='#e4fbff'>
                        <TitleNumber>
                            <h3>01</h3>
                            <h4>Холодная серия</h4>
                        </TitleNumber>
                        <Description>
                            <h4>Алюминиевые профили без терморазрыва</h4>
                            <p>Подходят для изготовления окон, дверей, витражей, внутренних перегородок, не&nbsp;требующих теплоизоляции</p>
                            <p>Например, в&nbsp;неотапливаемых помещениях или между помещениями, в&nbsp;которых поддерживается одинаковый температурный режим</p>
                        </Description>
                        <ImgItem
                            src="/images/alumiumPage/types-system-profiles/image1.png"
                            alt="types-system-profiles"
                            right={'-40px'} />
                    </Item>

                    <ItemImage>
                        <img src="/images/alumiumPage/types-system-profiles/banner.jpg" alt="banner" />
                    </ItemImage>

                    <Item
                        paddingTop='50px'
                        backColor='#ffd138'>
                        <TitleNumber colorNum='white'>
                            <h3>02</h3>
                            <h4>Тёплая серия</h4>
                        </TitleNumber>
                        <Description>
                            <h4>Алюминиевые профили <br /> с терморазрывом</h4>
                            <p>Окна, двери и&nbsp;другие изделия из&nbsp;профилей с&nbsp;терморазрывом применяют в&nbsp;наружной архитектурной застройке зданий, к&nbsp;которым предъявляются требования по&nbsp;термоизоляции</p>
                            <p>Это витрины и&nbsp;входные двери офисов и&nbsp;магазинов, окна и&nbsp;двери в&nbsp;жилых помещениях</p>
                        </Description>
                        <ImgItem
                            right='10px'
                            src="/images/alumiumPage/types-system-profiles/image2.png"
                            alt="types-system-profiles"
                        />
                    </Item>
                    <Item
                        paddingTop='50px'
                        right
                        paddingLeft
                        backColor='#202336'
                        paddingBottom='50px'>
                        <TitleNumber
                            colorNum='#f7ed04'
                            colorTitle='white'>
                            <h3>03</h3>
                            <h4>Фасадная система</h4>
                        </TitleNumber>
                        <Description color='white'>
                            <h4>Алюминиевые профили <br /> с терморазрывом</h4>
                            <p>Комплект специальных алюминиевых профилей, предназначенных для изготовления фасадов зданий, витражей, зимних садов, позволяет остеклять проемы больших размеров</p>
                            <p>Видимая ширина элементов системы всего 50&nbsp;мм, это обеспечивает максимальную светопрозрачность и&nbsp;визуальную легкость фасадной конструкции</p>
                        </Description>
                        <ImgItem
                            src="/images/alumiumPage/types-system-profiles/image3.png"
                            alt="types-system-profiles"
                        />
                    </Item>
                </List>
            </Container>
        </Section>
    )
}

export default TypesOfProfileSystems;

const Section = styled.section`
    padding-top: 100px;

    @media (max-width: 1200px) {
        padding-top: 80px;
    }

    @media (max-width: 960px) {
        padding-top: 60px;
    }

    @media (max-width: 670px) {
        padding-top: 40px;
    }
`;

const List = styled.ul`
   display: flex;
   flex-wrap: wrap;
`;

const Item = styled.li`
    position: relative;
    width: 50%;
    padding-bottom: ${({ paddingBottom }) => paddingBottom ? paddingBottom : '50px'};
    padding-top: ${({ paddingTop }) => paddingTop ? paddingTop : 0};
    background-color: ${({ backColor }) => backColor ? backColor : 'white'};
    ${({ paddingLeft }) => paddingLeft && { paddingLeft: '15px' }};
    padding-left: ${({ paddingLeft }) => paddingLeft ? paddingLeft : 0};
    ::after {
        content: '';
        display: block;
        width: 10000px;
        height: 100%;
        background-color: ${({ backColor }) => backColor ? backColor : 'white'};

        position: absolute;
        ${({ right }) => right ? 'left: 0;' : 'right: 0;'};
        bottom: 0;
    }

    @media (max-width: 1200px) {
        padding-top: 30px;
        padding-bottom: 30px;
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;

        background-color: ${({ backColor, backColorMobyle }) => backColor ? backColor : backColorMobyle};

        ::after {
            display: none;
        }
    }

    @media (max-width: 670px) {
        padding-top: 15px;
        padding-bottom: 15px;
    }
    
`;

const TitleNumber = styled.div`
    display: flex;
    align-items: center;
    max-width: 170px;
    margin-bottom: 8px;
    position: relative;
    z-index: 2;
    h3 {
        font-size: 65px;
        color: ${({ colorNum }) => colorNum ? colorNum : '#8bbcff'};
        margin-right: 10px;
        position: relative;
        z-index: 2;
    }

    h4 {
        font-weight: 900;
        text-transform: uppercase;
        font-size: 24px;
        color: ${({ colorTitle }) => colorTitle ? colorTitle : '#1e1e1e'};
        position: relative;
        z-index: 2;
    }

    @media (max-width: 670px) {
        h3 {
            font-size: 40px;
        }

        h4 {
            font-size: 18px;
        }
    }
`;

const Description = styled.div`
    position: relative;
    z-index: 2;
    max-width: 330px;
    h4 {
        font-weight: 900;
        color: ${({ color }) => color ? color : '#1e1e1e'};
        text-transform: none;
        margin-bottom: 10px;
    }

    p {
      margin-top: 7px;
      line-height: 22px;
      color: ${({ color }) => color ? color : '#1e1e1e'}; 
    }

    @media (max-width: 670px) {
        p {
            line-height: 20px;
        }
    }
`;

const ImgItem = styled.img`
    position: absolute;
    z-index: 2;
    right: ${({ right }) => right ? right : 0};
    bottom: ${({ bottom }) => bottom ? bottom : 0};

    @media (max-width: 1200px) {
        right: 15px;
    }

    @media (max-width: 670px) {
        bottom: 0;
        right: initial;
        height: 215px;
        width: auto;
        position: relative;
        margin-top: 20px;
    }

    @media (max-width: 670px) {
        height: 190px;
    }
`;

const ItemImage = styled.li`
    width: 50%;
    position: relative;

    img {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    @media (max-width: 1200px) {
        display: none;
    }
`;


