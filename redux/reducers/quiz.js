


const initialState = {
    numberPage: 0,
    quiz: [
        [
            { id: 1, title: 'Одностворчатое окно', image: '', checked: false },
            { id: 2, title: 'Двухстворчатое окно', image: '', checked: false },
            { id: 3, title: 'Трехстворчатое окно с одной поворотно-откидной створкой', image: '', checked: false },
            { id: 4, title: 'Балконный блок', image: '', checked: false },
        ],
        [
            { id: 'derevo', title: 'Дерево', image: '', checked: true },
            { id: 'derevoAlyuminiy', title: 'Дерево-алюминий', image: '', checked: false },
            { id: 'plastic', title: 'ПВХ', image: '', checked: false },
            { id: 'alyuminiy', title: 'Алюминий', image: '', checked: false },
        ],
        [],
    ],
    page3: {
        derevo: [
            {
                selectTitle: 'Стеклопакет',
                id: 'Стеклопакет',
                items: [
                    { optionTitle: 'Обычный', checked: false },
                    { optionTitle: 'Энергосберегающий', checked: false },
                    { optionTitle: 'Солнцезащитный', checked: false },
                    { optionTitle: 'Антивандальный', checked: false },
                ]
            },
            {
                selectTitle: 'Порода дерева',
                id: 'ПородаДерева',
                items: [
                    { optionTitle: 'Сосна', checked: false },
                    { optionTitle: 'Лиственница', checked: false },
                    { optionTitle: 'Дуб', checked: false },
                ]
            },
            {
                selectTitle: 'Профильная система',
                id: 'ПрофильнаяСистема',
                items: [
                    { optionTitle: 'Стандарт', checked: false },
                    { optionTitle: 'Оптима', checked: false },
                    { optionTitle: 'Премиум', checked: false },
                ]
            },

        ],
        derevoAlyuminiy: [
            {
                selectTitle: 'Стеклопакет',
                id: 'СтеклоПакет',
                items: [
                    { optionTitle: 'Обычный', checked: false },
                    { optionTitle: 'Энергосберегающий', checked: false },
                    { optionTitle: 'Солнцезащитный', checked: false },
                    { optionTitle: 'Антивандальный', checked: false },
                ]
            },
            {
                selectTitle: 'Порода дерева',
                id: 'ПородаДерева',
                items: [
                    { optionTitle: 'Сосна', checked: false },
                    { optionTitle: 'Лиственница', checked: false },
                    { optionTitle: 'Дуб', checked: false },
                ]
            },
        ],
        plastic: [
            {
                selectTitle: 'Стеклопакет',
                id: 'Стеклопакет',
                items: [
                    { optionTitle: 'Обычный', checked: false },
                    { optionTitle: 'Энергосберегающий', checked: false },
                    { optionTitle: 'Солнцезащитный', checked: false },
                    { optionTitle: 'Антивандальный', checked: false },
                ]
            },
            {
                selectTitle: 'Профиль',
                id: 'Профиль',
                items: [
                    { optionTitle: 'REHAU BLITZ', checked: false },
                    { optionTitle: 'REHAU GRAZIO', checked: false },
                    { optionTitle: 'REHAU GRAZIO', checked: false },
                ]
            },
            {
                selectTitle: 'Цвет',
                id: 'Цвет',
                items: [
                    { optionTitle: 'Белый', checked: false },
                    { optionTitle: 'Ламинация с 2-х сторон', checked: false },
                    { optionTitle: 'Ламинация снаружи', checked: false },
                    { optionTitle: 'Ламинация изнутри', checked: false },
                ]
            },
        ],
        alyuminiy: [
            {
                selectTitle: 'Стеклопакет',
                id: 'Стеклопакет',
                items: [
                    { optionTitle: 'Обычный', checked: false },
                    { optionTitle: 'Энергосберегающий', checked: false },
                    { optionTitle: 'Солнцезащитный', checked: false },
                    { optionTitle: 'Антивандальный', checked: false },
                ]
            },
            {
                selectTitle: 'Профиль',
                id: 'Профиль',
                items: [
                    { optionTitle: 'СИАЛ КП45', checked: false },
                    { optionTitle: 'СИАЛ КПТ60', checked: false },
                ]
            },
            {
                selectTitle: 'Цвет',
                id: 'Профильнаясистема',
                items: [
                    { optionTitle: 'Белый', checked: false },
                    { optionTitle: 'Коричневый', checked: false },
                    { optionTitle: 'Другой', checked: false },
                ]
            },

        ],
    },
    userSelected: null
};


const quiz = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default quiz