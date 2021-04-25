import React, { useState } from 'react'
import Constructor from './Constructor';

const arrConstructorInitial = {
    activeColor: '#f06008',
    colors: [
        { color: '#f06008', active: true },
        { color: '#ed8342', active: false },
        { color: '#f2a170', active: false },
        { color: '#f6ba96', active: false },
        { color: '#e50f0f', active: false },
        { color: '#df4545', active: false },
        { color: '#f47171', active: false },
        { color: '#fdb6b6', active: false },
        { color: '#1a237e', active: false },
        { color: '#304ed5', active: false },
        { color: '#4e68db', active: false },
        { color: '#8a9ced', active: false },
        { color: '#004d40', active: false },
        { color: '#00695c', active: false },
        { color: '#00897b', active: false },
        { color: '#26a69a', active: false },
        { color: '#37474f', active: false },
        { color: '#546E7A', active: false },
        { color: '#78909C', active: false },
        { color: '#b0bec5', active: false },
        { color: '#b2dfdb', active: false },
        { color: '#e1bee7', active: false },
        { color: '#e1e851', active: false },
    ]
}

arrConstructorInitial.colors.forEach((item, index) => {
    item.id = `color${index + 1}`;
})

const buttonsInital = {
    activePicture: 'zhaluzi',
    items: [
        { id: 'zhaluzi', title: 'Жалюзи', subTitle: 'от 900 руб. за шт.', active: true },
        { id: 'rolshotori', title: 'Рольшторы', subTitle: 'от 1900 руб. за шт.', active: false },
    ]
}

function ConstructorContainer() {

    const [arrConstructor, setArrContructor] = useState(arrConstructorInitial);
    const [buttons, setButtons] = useState(buttonsInital);

    const changeActiveColor = (id, color) => {
        setArrContructor(pre => {
            return {
                ...pre,
                activeColor: color,
                colors: pre.colors.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            active: true
                        }
                    }
                    return {
                        ...item,
                        active: false
                    }
                })
            }
        })
    }

    const changeActiveButton = (id) => {
        setButtons(pre => {
            return {
                ...pre,
                activePicture: id,
                items: pre.items.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            active: true
                        }
                    }
                    return {
                        ...item,
                        active: false
                    }
                })

            }
        })
    }

    return (
        <Constructor
            colors={arrConstructor.colors}
            activeColor={arrConstructor.activeColor}
            changeActiveColor={changeActiveColor}
            buttons={buttons.items}
            changeActiveButton={changeActiveButton}
            activePicture={buttons.activePicture} />
    )
}

export default ConstructorContainer;
