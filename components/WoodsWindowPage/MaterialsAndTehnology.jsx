import React, { useState } from 'react'
import styled from 'styled-components';
import Container from '../UI/Container';


const objInitial = {
    checked: 'brus',
    items: {
        brus: {
            id: 'brus',
            title: 'Брус',
            description: 'Деревянные окна Панорама изготавливаются из 3-х слойного клееного бруса. Данный материал стал широко применяться около сорока лет назад и быстро завоевал популярность на рынке пиломатериалов. / И это не удивительно, ведь клеёный брус не имеет недостатков, характерных для бруса из массива, таких как: неравномерная влажность, растрескивание, различные пороки, нестабильная геометрия.',
            image: '/images/woodsWindow/materialAndTexnology/image1.jpg'
        },
        steklopaket: {
            id: 'steklopaket',
            title: 'Стеклопакет',
            description: 'Мы применяем стеклопакеты толщиной от 32 до 40 мм, состоящие их 2-х или из 3- стекол. И предлагаем очень широкий выбор стеклопакетов, в зависимости от требований по дизайну и условий эксплуатации оконных конструкций. / Современные технологии нанесения специальных покрытий на стёкла позволяют придавать стеклопакетам уникальные свойства, например: / 1) пропускать солнечный свет, но задерживать жару / 2) отражать тепло от отопительных приборов обратно в помещение / 3) быть цветными с внешней стороны, но не окрашивать, проходящий сквозь них свет',
            image: '/images/woodsWindow/materialAndTexnology/image2.jpg'
        },
        furnitura: {
            id: 'furnitura',
            title: 'Фурнитура',
            description: 'Мы применяем поворотно - откидную фурнитуру австрийской фирмы МАСО, которая имеет запорные элементы по всему периметру створки и имеет широкие возможности по регулировке положения створки относительно рамы и уровня прижима запорных элементов. / Все элементы фурнитуры имеют стойкое антикоррозийное покрытие, очень хорошо удерживающее смазку. Производитель гарантирует безотказную работу в течение 20 000 циклов открываний/закрываний. Широкая цветовая гамма оконных ручек и декоративных накладок на петли даёт большие возможности по дизайну.',
            image: '/images/woodsWindow/materialAndTexnology/image3.jpg'
        },
        kraskiLaki: {
            id: 'kraskiLaki',
            title: 'Краски / лаки',
            description: 'Применяемые нами материалы ведущей европейской компании TEKNOS обеспечивают надёжную защиту деревянных частей от разрушительных воздействий грибка, солнца и воды. Данные материалы на водной основе, экологически чистые и имеют большой выбор по цветам. / Самые уязвимые места - нижние горизонтальные части створок и рам покрыты специальными алюминиевыми накладками. Краска на наших первых изделиях, выпущенных в начале 2000 - х годов, прекрасно сохранилась и по сей день, что полностью опровергает миф о том, что деревянные окна нужно каждый год подкрашивать и ремонтировать.',
            image: '/images/woodsWindow/materialAndTexnology/image4.jpg'
        },
    }

}

function MaterialsAndTehnology() {


    const [obj, setObj] = useState(objInitial);

    const checkedChange = (id) => {
        setObj(pre => {
            return {
                ...pre,
                checked: id
            }
        })
    }



    const getFormatedText = (text) => {
        return text.description?.split('/').map((str, i) => {
            return (
                <p key={i + text.id}>{str}</p>
            )
        })
    }

    return (
        <Section>
            <Container>
                <h2>Материалы <span className="red-text">и&nbsp;технологии</span></h2>
                <ListBtn>
                    {Object.values(obj.items).map(item => {

                        return (
                            <ItemBtn
                                key={item.id}
                                active={obj.checked === item.id}
                                onClick={() => checkedChange(item.id)}
                            >
                                <h3>{item.title}</h3>
                            </ItemBtn>
                        )
                    })}
                </ListBtn>
                <WraperContent>

                    <TextWraper>
                        <h3>{obj.items[obj.checked].title}</h3>
                        {getFormatedText(obj.items[obj.checked])}
                    </TextWraper>
                    <ImageWraper>
                        <img src={obj.items[obj.checked].image} alt="materialAndTexnology" />
                    </ImageWraper>
                </WraperContent>
            </Container>
        </Section>
    )
}

export default MaterialsAndTehnology;

const WraperContent = styled.div`
    display: flex;

    @media (max-width: 870px) {
        flex-direction: column-reverse;
    }
`;

const TextWraper = styled.div`
    
    width: 50%;
    padding: 45px;
    background-color: white;

    h3 {
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: 900;
    }

    p {
        line-height: 24px;
        margin-top: 10px;
        
    }

    @media (max-width: 1200px) {
        p {
            line-height: 22px;
        }
    }

    @media (max-width: 870px) {
        width: 100%;
        padding: 30px;
    }

    @media (max-width: 670px) {
        p {
            line-height: 20px;
        }
    }

`;

const ImageWraper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: #dbdbdb;
    height: inherit;
    overflow: hidden;
    position: relative;
    min-height: 430px;
    img {
        position: absolute;
        top: 0;
    }

    @media (max-width: 970px) {
       img {
           width: 100%;
           height: auto;
       } 
    }

    @media (max-width: 870px) {
        width: 100%;
        min-height: 350px;

        img {
            height: 100%;
            width: auto;
            right: 0;
        }
    }

    @media (max-width: 480px) {
        min-height: 230px;

        img {
            height: 100%;
            width: auto;
            right: 0;
        }
    }
`;

const Section = styled.section`
    background-color: #ededed;
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

const ListBtn = styled.ul`
    margin-top: 35px;
    margin-bottom: 30px;
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
        margin-top: 25px;
        margin-bottom: 20px;
    }

    @media (max-width: 670px) {
        margin-top: 0px;
    }
`;

const ItemBtn = styled.li`
    padding: 20px 0;
    margin: 15px;
    margin-bottom: 0;
    width: calc(25% - 30px);
    background-color: ${({ active }) => active ? '#f7ed04' : 'white'};
    cursor: pointer;
    transition: .3s;

    :hover {
        background-color: ${({ active }) => active ? '#f7ed04' : '#343a4f'};

        h3 {
            color: ${({ active }) => active ? '#1e1e1e' : 'white'};;
        }
    }

    h3 {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 20px;
        text-align: center;
        color: #575757;
        color: ${({ active }) => active ? '#1e1e1e' : '#575757'};
    }

    @media (max-width: 1200px) {
        h3 {
            font-size: 16px;
        }
    }

    @media (max-width: 970px) {
        width: calc(30% - 30px);
    }

    @media (max-width: 670px) {
        width: calc(50% - 30px); 
    }

    @media (max-width: 480px) {
        width: calc(100% - 30px);
    }
`;


