import React from 'react'
import styled from 'styled-components';
import Container from '../UI/Container';

function ProductionWoods() {
    return (
        <Section>
            <Container>
                <Title>Мы производим <br /> <span>4 профильные системы</span></Title>
                <ListProduction>
                    <ItemProduction>
                        <WraperImage>
                            <img src="/images/woodsWindow/production/image1.png" alt="production" />
                        </WraperImage>
                        <TextList>
                            <h4>Стандартный</h4>
                            <ul>
                                <li>
                                    <p>
                                        трёхслойный клееный брус <br /> толщиной 68 мм
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        стеклопакет толщиной до 32 мм
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        поворотно-откидная фурнитура <br /> с микропроветриванием MACO
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        покраска на водной основе TEKNOS
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        два контура мягкого резинового <br /> уплотнителя DEVENTER
                                    </p>
                                </li>
                            </ul>
                        </TextList>
                    </ItemProduction>
                    <ItemProduction>
                        <WraperImage>
                            <img src="/images/woodsWindow/production/image2.png" alt="production" />
                        </WraperImage>
                        <TextList>
                            <h4>ОПТИМА</h4>
                            <ul>
                                <li>
                                    <p>
                                        трёхслойный клееный брус <br /> толщиной 68 мм
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        стеклопакет толщиной до 32 мм
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        поворотно-откидная фурнитура <br /> с микропроветриванием MACO
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        покраска на водной основе TEKNOS
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        два контура мягкого резинового <br /> уплотнителя DEVENTER
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        алюминиевая водоотливная <br /> шина GUTMANN
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        алюминиевый профиль защиты створки GUTMANN
                                    </p>
                                </li>
                            </ul>
                        </TextList>
                    </ItemProduction>
                    <ItemProduction backColor='#fef0d4'>
                        <WraperImage>
                            <img src="/images/woodsWindow/production/image3.png" alt="production" />
                        </WraperImage>
                        <TextList>
                            <h4>Премиум</h4>
                            <ul>
                                <li>
                                    <p>
                                        трёхслойный клееный брус <br /> толщиной 68 мм
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        стеклопакет толщиной до 40 мм
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        поворотно-откидная фурнитура <br /> с микропроветриванием MACO
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        покраска на водной основе TEKNOS
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        два контура мягкого резинового <br /> уплотнителя DEVENTER
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        алюминиевая водоотливная шина GUTMANN
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        алюминиевый профиль защиты створки GUTMANN
                                    </p>
                                </li>
                            </ul>
                        </TextList>
                    </ItemProduction>
                    <ItemProduction backColor='#202336'>
                        <WraperImage>
                            <img src="/images/woodsWindow/production/image4.png" alt="production" />
                        </WraperImage>
                        <TextList colorText='white'>
                            <h4>Элит</h4>
                            <ul>
                                <li>
                                    <p>
                                        трёхслойный клееный брус <br /> толщиной 68 мм
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        стеклопакет толщиной до 50 мм
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        поворотно-откидная фурнитура <br /> с микропроветриванием MACO
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        покраска на водной основе TEKNOS
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        четыре контура мягкого резинового <br /> уплотнителя DEVENTER
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        алюминиевые накладки ALURON <br /> по периметру
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        общая толщина дерево-алюминиевого <br /> профиля 87 мм
                                    </p>
                                </li>
                            </ul>
                        </TextList>
                    </ItemProduction>
                </ListProduction>
            </Container>
        </Section>
    )
}

export default ProductionWoods;

const WraperImage = styled.div`
    width: 185px;
    height: 310px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;

    img {

    }

    @media (max-width: 480px) {
        width: initial;
        height: initial;
        margin-right: 0;
        justify-content: flex-start;

        img {
            height: 200px;
            width: auto;
        }
    }
`;

const TextList = styled.div`
    
    h4{
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 900;
        margin-bottom: 12px;
        color: ${({ colorText }) => colorText ? colorText : '#1e1e1e'};
        padding-left: 12px;
    }



    li {
        display: flex;
        align-items: center;
        ::before {
            content: '-';
            margin-right: 8px;
            color: ${({ colorText }) => colorText ? colorText : '#1e1e1e'};

        }
        margin-top: 10px;
        p {
            font-size: 14px;
            color: ${({ colorText }) => colorText ? colorText : '#1e1e1e'};
        }
    }
`;

const Title = styled.h2`
    margin-bottom: 35px;
    color: white;
    span {
        color: #ffc915;
    }

    @media (max-width: 1200px) {
        margin-bottom: 30px;
    }

    @media (max-width:970px) {
        margin-bottom: 25px;
    }

    @media (max-width:670px) {
        margin-bottom: 10px;
    }
`;

const Section = styled.section`
    background-color: #2b3145;
    padding: 100px 0;

    @media (max-width: 1200px) {
        padding: 80px 0;
    }

    @media (max-width:970px) {
        padding: 60px 0;
    }

    @media (max-width:670px) {
        padding: 40px 0;
    }
`;

const ListProduction = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
`;

const ItemProduction = styled.li`
    display: flex;
    align-items: center;
    margin: 15px;
    padding: 20px;
    width: calc(50% - 30px);
    background-color: ${({ backColor }) => backColor ? backColor : 'white'};

    @media (max-width: 970px) {
        width: calc(100% - 30px);
    }

    @media (max-width: 480px) {
        display: block;
    }
`;


