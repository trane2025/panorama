import React from 'react'
import LayOut from '../components/layout/LayOut';
import MainContainer from '../components/UI/MainContainer';
import Banner from '../components/ZhalyuziRrolshtoryPage/Banner';
import DiscriptionZhaluzi from '../components/ZhalyuziRrolshtoryPage/DiscriptionZhaluzi';
import HappyZhaluzi from '../components/UI/Advanteges/HappyAdvatages';
import ConstructorContainer from '../components/ZhalyuziRrolshtoryPage/Constructor/ConstructorContainer';

const arrRolshtori = {
    title: ['Чем порадуют вас', 'рольшторы'],
    titleColor: '#1e1e1e',
    primaryTitleColor: '#e31e24',
    backColor: '#fef0d4',
    items: [
        {
            title: 'Компакность',
            description: 'Рольшторы плотно прилегают / к окну, за счёт чего Вы можете рационально использовать подоконник и практично расставить мебель',
            number: '01',
            image: '/images/zhalyuziRrolshtoryPage/rolshtoriHappy/image1.png',
        },
        {
            title: 'Гигиеничность',
            description: 'Рольшторы не собирают пыль, за ними легко ухаживать',
            number: '02',
            image: '/images/zhalyuziRrolshtoryPage/rolshtoriHappy/image2.png'
        }, {
            title: 'Удобство / эксплуатации',
            description: 'Одним простым движением / Вы в любое время создадите / в комнате приятный полумрак',
            number: '03',
            image: '/images/zhalyuziRrolshtoryPage/rolshtoriHappy/image3.png',
            colorNumber: '#ffe48c',
            colorBack: '#ffd138'
        }, {
            title: 'Дизайн',
            color: 'white',
            description: 'Выбор цветов и материалов для рольштор огромен, благодаря чему окна всегда будут отражением Вашего вкуса / и индивидуальности',
            number: '04',
            image: '/images/zhalyuziRrolshtoryPage/rolshtoriHappy/image4.png',
            colorNumber: '#383d5b',
            colorBack: '#202336',
            rightImage: '-30px'
        },
    ]
}

const arrZhaluzi = {
    title: ['Чем порадуют вас', 'рольшторы'],
    titleColor: '#ffffff',
    primaryTitleColor: '#fff825',
    backColor: '#343a4f',
    items: [
        {
            title: 'Прочность',
            description: 'Жалюзи имеют прочную конструкцию, не рвутся, / не мнутся, не выгорают / и прослужат Вам ни один год',
            number: '01',
            image: '/images/zhalyuziRrolshtoryPage/zhalyuziHappy/image1.png',
        },
        {
            title: 'Защита',
            description: 'Жалюзи прекрасно / защищают помещение / от жары и солнца',
            number: '02',
            image: '/images/zhalyuziRrolshtoryPage/zhalyuziHappy/image2.png',
            rightImage: '-30px'
        }, {
            title: 'Удобство / эксплуатации',
            description: 'Жалюзи не нужно стирать, просушивать, гладить, достаточно пропылесосить / или протереть влажной губкой',
            number: '03',
            image: '/images/zhalyuziRrolshtoryPage/zhalyuziHappy/image3.png',
            colorNumber: '#ffe48c',
            colorBack: '#ffd138'
        }, {
            title: 'Дизайн',
            color: 'white',
            description: 'Благодаря разнообразию рисунков, текстур, цветовой гаммы Вы всегда сможете подчеркнуть индивидуальность своего дома',
            number: '04',
            image: '/images/zhalyuziRrolshtoryPage/zhalyuziHappy/image4.png',
            colorNumber: '#383d5b',
            colorBack: '#202336',
            rightImage: '-30px'
        },
    ]
}

function zhalyuziRolshtory() {
    return (
        <MainContainer>
            <LayOut title='Жалюзи/рольшторы' noQuiz noPortfolio>
                <Banner />
                <DiscriptionZhaluzi />
                <HappyZhaluzi arr={arrRolshtori} />
                <HappyZhaluzi arr={arrZhaluzi} />
                <ConstructorContainer />
            </LayOut>
        </MainContainer>
    )
}

export default zhalyuziRolshtory;
