import { useReducer, useState } from 'react';
import Quiz from './Quiz';






export const initialState = {
    activePage: 'page1',
    progresBar: {
        progres: '25%',
        value: '1 из 4'
    },
    page1: {
        title: 'Укажите тип окна',
        items: {
            window1: { id: 'window1', title: 'Одностворчатое окно', image: '/images/quiz/window1.jpg', checked: false },
            window2: { id: 'window2', title: 'Двухстворчатое окно', image: '/images/quiz/window2.jpg', checked: false },
            window3: { id: 'window3', title: 'Трехстворчатое окно с одной поворотно-откидной створкой', image: '/images/quiz/window3.jpg', checked: false },
            window4: { id: 'window4', title: 'Трехстворчатое окно с двумя поворотно-откидными створками', image: '/images/quiz/window4.jpg', checked: false },
            window5: { id: 'window5', title: 'Четырехстворчатое окно', image: '/images/quiz/window5.jpg', checked: false },
            window6: { id: 'window6', title: 'Балконный блок', image: '/images/quiz/window6.jpg', checked: false },
            window7: { id: 'window7', title: 'Балконный блок с поворотно-откидными створками', image: '/images/quiz/window7.jpg', checked: false },
        }
    },

    page2: {
        title: 'Укажите материал окна',
        items: {
            derevo: { id: 'derevo', title: 'Дерево', image: '/images/quiz/material1.jpg', checked: true },
            derevoAlyuminiy: { id: 'derevoAlyuminiy', title: 'Дерево-алюминий', image: '/images/quiz/material2.jpg', checked: false },
            plastic: { id: 'plastic', title: 'ПВХ', image: '/images/quiz/material3.jpg', checked: false },
            alyuminiy: { id: 'alyuminiy', title: 'Алюминий', image: '/images/quiz/material4.jpg', checked: false }
        }
    },
    page3: {
        derevo: {
            image: '/images/quiz/material1.jpg',
            title: 'Параметры деревянного стеклопакета',
            items: ['steklopaket', 'porodaDereva', 'profilnayaSistema']
        },
        derevoAlyuminiy: {
            image: '/images/quiz/material2.jpg',
            title: 'Параметры дерево-алюминиевого стеклопакета',
            items: ['steklopaket', 'porodaDereva']
        },
        plastic: {
            image: '/images/quiz/material3.jpg',
            title: 'Параметры пластикового стеклопакета',
            items: ['steklopaket', 'profilPlastik', 'colorPlastik']
        },
        alyuminiy: {
            image: '/images/quiz/material4.jpg',
            title: 'Параметры алюминиевого стеклопакета',
            items: ['steklopaket', 'profilAluminiy', 'colorAluminiy']
        }
    },
    selects: {
        steklopaket: {
            label: 'Стеклопакет',
            id: 'steklopaket',
            value: 'Выбрать',
            items: [
                { title: 'Выбрать' },
                { title: 'Обычный' },
                { title: 'Энергосберегающий' },
                { title: 'Солнцезащитный' },
                { title: 'Антивандальный' },
            ]
        },
        porodaDereva: {
            label: 'Порода дерева',
            id: 'porodaDereva',
            value: 'Выбрать',
            items: [
                { title: 'Выбрать' },
                { title: 'Сосна' },
                { title: 'Лиственница' },
                { title: 'Дуб' },
            ]
        },
        profilnayaSistema: {
            label: 'Профильная система',
            id: 'profilnayaSistema',
            value: 'Выбрать',
            items: [
                { title: 'Выбрать' },
                { title: 'Стандарт' },
                { title: 'Оптима' },
                { title: 'Премиум' },
            ]
        },
        profilPlastik: {
            label: 'Профиль',
            id: 'profilPlastik',
            value: 'Выбрать',
            items: [
                { title: 'Выбрать' },
                { title: 'REHAU BLITZ' },
                { title: 'REHAU GRAZIO' },
                { title: 'REHAU INTELIO' },
            ]
        },
        colorPlastik: {
            label: 'Цвет',
            id: 'colorPlastik',
            value: 'Выбрать',
            items: [
                { title: 'Выбрать' },
                { title: 'Белый' },
                { title: 'Ламинация с 2-х сторон' },
                { title: 'Ламинация снаружи' },
                { title: 'Ламинация изнутри' },
            ]
        },
        profilAluminiy: {
            label: 'Профиль',
            id: 'profilAluminiy',
            value: 'Выбрать',
            items: [
                { title: 'Выбрать' },
                { title: 'СИАЛ КП45' },
                { title: 'СИАЛ КПТ60' },
            ]
        },
        colorAluminiy: {
            label: 'Цвет',
            id: 'colorAluminiy',
            value: 'Выбрать',
            items: [
                { title: 'Выбрать' },
                { title: 'Белый' },
                { title: 'Коричневый' },
                { title: 'Другой' },
            ]
        }
    },
    userSelected: null
};

import quiz, { setCheskBoxPage1, changePage, changeRadioPage2, changeSelectPage3, changeProgresBar } from './reduser';


function QuizContainer() {


    const [state, dispatch] = useReducer(quiz, initialState);
    const [chekedMaterial, setChekedMaterial] = useState('derevo');

    const setCheckBoxPage1 = (id) => {
        dispatch(setCheskBoxPage1(id))
    }

    const changePageHandler = (page) => {
        dispatch(changePage(page))
    }

    const changeRadioPage2Handler = (id) => {
        setChekedMaterial(id);
        dispatch(changeRadioPage2(id));
    }

    const changeSelectPage3Handler = (id, value) => {
        dispatch(changeSelectPage3(id, value));
    }

    const changeProgresBarHandler = (value, progres) => {
        dispatch(changeProgresBar(value, progres))
    }

    return (
        <Quiz
            page={state[state.activePage]}
            setCheckBoxPage1={setCheckBoxPage1}
            changePage={changePageHandler}
            activePage={state.activePage}
            changeRadioPage2={changeRadioPage2Handler}
            chekedMaterial={chekedMaterial}
            page3={state.page3}
            selects={state.selects}
            changeSelectPage3={changeSelectPage3Handler}
            dataQuiz={state}
            progresBar={state.progresBar}
            changeProgresBar={changeProgresBarHandler} />
    )
}

export default QuizContainer;

