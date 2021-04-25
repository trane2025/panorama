import React from 'react';
import About from '../components/AluminumContstructionPage/About';
import Banner from '../components/AluminumContstructionPage/Banner';
import TypesOfProfileSystems from '../components/AluminumContstructionPage/TypesOfProfileSystems';
import WhereUseAluminim from '../components/AluminumContstructionPage/WhereUseAluminim';
import LayOut from '../components/layout/LayOut';
import Advanteges from '../components/UI/Advanteges/Advanteges';
import MainContainer from '../components/UI/MainContainer';
import TitleAdvantages from '../components/UI/TitleAdvantages';
import TitleSection from '../components/UI/TitleSection';


const advantagesArr = [
    {
        title: 'Прочность',
        description: 'Повышенная прочность конструкций из алюминия, обуславливается не только металлической основой, но и специальными защитными покрытиями',
        number: '01',
        image: '/images/woodsWindow/advantegesWoods/image1.png',
    },
    {
        title: 'Долговечность',
        description: 'Алюминиевые конструкции отличаются высокой прочностью и легкостью. Металл со временем не подвержен влиянию влаги и со временем не почернеет даже с внешней стороны',
        number: '02',
        image: '/images/woodsWindow/advantegesWoods/image2.png',
        textWidth: '270px'
    },
    {
        title: 'Экологичность',
        description: 'Алюминий – экологически чистый материал. В нем отсутствуют примеси тяжелых металлов, которые бы могли нанести непоправимый вред человеку',
        number: '03',
        image: '/images/woodsWindow/advantegesWoods/image3.png',
        stretch: true,
        right: true,
        stretchHeight: '533px',
        colorNumber: '#fffef3',
        textWidth: '256px'
    },
    {
        title: 'Пожаробезопасность',
        description: 'Повышенная степень огнестойкости металлических конструкций делает их надежной преградой на пути распространения огня с этажа на этаж и в соседние помещения',
        number: '04',
        image: '/images/woodsWindow/advantegesWoods/image4.png',
        colorStrech: '#ffd138',
        stretch: true,
        colorNumber: '#fee180',
        paddingTop: '20px'
    },
    {
        title: 'Простота обслуживания',
        description: 'Металлическая поверхность легко поддается мойке, без применения сильнодействующих чистящих средств',
        number: '05',
        image: '/images/woodsWindow/advantegesWoods/image5.png',
        colorNumber: '#444862',
        colorBask: '#343a4f',
        colorText: 'white',
        paddingTop: '20px',
        textWidth: '280px'
    },
    {
        title: 'Широкая цветовая гамма',
        description: 'При необходимости алюминиевая конструкция может быть покрашена в любой цвет, в соответствии с общим дизайном комнаты',
        number: '06',
        image: '/images/alumiumPage/advantages/image6.png',
        stretch: true,
        right: true,
        colorText: 'white',
        colorStrech: '#202336',
        colorNumber: '#30334b',
        paddingTop: '20px',
        textWidth: '270px'
    },
]

const commertion = {
    colorBack: '#343a4f',
    items: [
        { title: 'Общественные и спортивные сооружения', image: '/images/alumiumPage/comertion/image1.png' },
        { title: 'Аэропорты', image: '/images/alumiumPage/comertion/image2.png' },
        { title: 'Офисные здания', image: '/images/alumiumPage/comertion/image3.png', colorItemBack: '#202336' },
        { title: 'Торговые центры', image: '/images/alumiumPage/comertion/image4.png', colorItemBack: '#202336' },
    ]
}

const privateSphere = {
    items: [
        { title: 'Веранды', image: '/images/alumiumPage/private/image1.png' },
        { title: 'Беседки', image: '/images/alumiumPage/private/image2.png' },
        { title: 'Балконы и лоджии', image: '/images/alumiumPage/private/image3.png', colorItemBack: '#202336' },
        { title: 'Теплицы', image: '/images/alumiumPage/private/image4.png', colorItemBack: '#202336' },
    ]
}

function aluminumConstruction() {

    return (
        <MainContainer>
            <LayOut title='Алюминиевые конструкции'>
                <Banner />
                <Advanteges advantagesArr={advantagesArr} >
                    <h2>Преимущества <span className='red-text'>алюминиевых</span> <br /> конструкций</h2>
                </Advanteges>
                <About />
                <WhereUseAluminim obj={commertion}>
                    <TitleSection colorTitle='white' colorAtantion='#f7ed04'>
                        Где используются <br /> <span>алюминиевые профили</span>
                    </TitleSection>
                    <TitleAdvantages
                        colorNumber='#f7ed04'
                        colorTitle='white'
                        fontWeight='900'
                        fontSize='30px'
                        fontSizeNumber='50px'>
                        <span>01</span> Коммерческая сфера
                    </TitleAdvantages>
                </WhereUseAluminim>
                <WhereUseAluminim obj={privateSphere} paddingBottom='100px'>
                    <TitleAdvantages
                        colorNumber='#ed271d'
                        fontWeight='900'
                        fontSize='30px'
                        fontSizeNumber='50px'>
                        <span>02</span> Частная сфера
                    </TitleAdvantages>
                </WhereUseAluminim>
                <TypesOfProfileSystems />
            </LayOut>
        </MainContainer>
    )
}

export default aluminumConstruction
