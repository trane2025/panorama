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
                    <Item>
                        <TitleNumber>
                            <h3>01</h3>
                            <h4>Холодная серия</h4>
                        </TitleNumber>
                        <Description>
                            <h4>Алюминиевые профили без терморазрыва</h4>
                            <p>Подходят для изготовления окон, дверей, витражей, внутренних перегородок, не требующих теплоизоляции</p>
                            <p>Например, в неотапливаемых помещениях или между помещениями, в которых поддерживается одинаковый температурный режим</p>
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
                            <p>Подходят для изготовления окон, дверей, витражей, внутренних перегородок, не требующих теплоизоляции</p>
                            <p>Например, в неотапливаемых помещениях или между помещениями, в которых поддерживается одинаковый температурный режим</p>
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
                            <p>8 алюминиевых профилей предназначена для изготовления фасадов зданий, зимних садов, входных групп, позволяет остеклять большие оконные проёмы</p>
                            <p>Видимая ширина элементов системы всего 50 мм, это обеспечивает максимальную светопрозрачность и визуальную легкость фасадной конструкции</p>
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

    
`;

const Description = styled.div`
    position: relative;
    z-index: 2;
    max-width: 330px;
    h4 {
        font-weight: 900;
        color: ${({ color }) => color ? color : '#1e1e1e'};
        font-size: 18px;
        text-transform: none;
        margin-bottom: 10px;
    }

    p {
      margin-top: 7px;
      line-height: 22px;
      color: ${({ color }) => color ? color : '#1e1e1e'}; 
    }
`;

const ImgItem = styled.img`
    position: absolute;
    z-index: 2;
    right: ${({ right }) => right ? right : 0};
    bottom: ${({ bottom }) => bottom ? bottom : 0};
`;

const ItemImage = styled.li`
    width: 50%;
    position: relative;

    img {
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;


