import React from 'react'
import LayOut from '../components/layout/LayOut';
import ProductionWoods from '../components/WoodsWindowPage/ProductionWoods';
import Advanteges from '../components/UI/Advanteges/Advanteges';
import MainContainer from '../components/UI/MainContainer';
import Banner from '../components/WoodsWindowPage/Banner';
import MaterialsAndTehnology from '../components/WoodsWindowPage/MaterialsAndTehnology';
import UseWoods from '../components/WoodsWindowPage/UseWoods/UseWoods';
import WhyWoodsWindow from '../components/WoodsWindowPage/WhyWoodsWindow';

const advantagesArr = [
    {
        title: 'Прочность',
        description: 'Использование древесины из сосны, дуба и лиственницы придает оконным системам особую прочность',
        number: '01',
        image: '/images/woodsWindow/advantegesWoods/image1.png',
    },
    {
        title: 'Долговечность',
        description: 'При покрытии древесины специальным лаком, ее долговечность увеличивается в несколько раз. Используемые нами материалы не разбухают от влаги и не растрескиваются от жары',
        number: '02',
        image: '/images/woodsWindow/advantegesWoods/image2.png',
        textWidth: '300px'
    },
    {
        title: 'Экологичность',
        description: 'Деревянные окна не выделяют в окружающую среду вредных веществ, они станут гарантией экологической безопасности у вас дома',
        number: '03',
        image: '/images/woodsWindow/advantegesWoods/image3.png',
        stretch: true,
        right: true,
        colorBask: '#fef0d4',
        stretchHeight: '533px',
        colorNumber: '#fffef3',
        textWidth: '256px'
    },
    {
        title: 'Пожаробезопасность',
        description: 'Древесина является органическим материалом и обладает высокой природной огнестойкостью, за счет содержащейся в дереве воды',
        number: '04',
        image: '/images/woodsWindow/advantegesWoods/image4.png',
        colorBask: '#ffd138',
        colorStrech: '#ffd138',
        stretch: true,
        colorNumber: '#fee180',
        paddingTop: '20px'
    },
    {
        title: 'Простота обслуживания',
        description: 'Деревянные оконные системы не требуют особого ухода и легко переносят воздействие внешней среды',
        number: '05',
        image: '/images/woodsWindow/advantegesWoods/image5.png',
        colorNumber: '#444862',
        colorBask: '#343a4f',
        colorText: 'white',
        paddingTop: '20px'
    },
    {
        title: 'Уникальный природный материал',
        description: 'Он отличается долговечностью, надёжностью и способностью дышать. Современные деревянные окна защитят Ваш дом от любой непогоды',
        number: '06',
        image: '/images/woodsWindow/advantegesWoods/image6.png',
        stretch: true,
        right: true,
        colorText: 'white',
        colorBask: '#202336',
        colorStrech: '#202336',
        colorNumber: '#30334b',
        paddingTop: '20px'
    },
]

function derevyannyeOkna() {
    return (
        <MainContainer>
            <LayOut title='Деревянные окна'>
                <Banner />
                <WhyWoodsWindow />
                <UseWoods />
                <Advanteges advantagesArr={advantagesArr}>
                    <h2>Преимущества <span className='red-text'>деревянных</span> <br /> конструкций</h2>
                </Advanteges>
                <MaterialsAndTehnology />
                <ProductionWoods />
            </LayOut>
        </MainContainer>
    )
}

export default derevyannyeOkna;


