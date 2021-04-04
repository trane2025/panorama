import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button';
import CheckBox from '../../UI/CheckBox';
import Input from '../UI/Input';
import InputPhoneMask from '../UI/InputPhoneMask';
import Select from '../UI/Select';

const arrCheckBox = ['Отлив', 'Откос', 'Сетка', 'Подоконник'];

const filterObject = (obj) => {

    let result = [];
    Object.keys(obj).forEach(key => {

        const item = obj[key];
        if (item.checked) {
            result.push(item.title);
        }
        else if (item.value && item.value !== 'Выбрать') {
            result.push(`${item.label}: ${item.value}`)
        }
    })
    return result
}

const initialUserData = {
    communicated: {
        value: 'mobile',
        id: 'communicated',
    },
    mobile: {
        value: '',
        id: 'mobile'
    },
    vk: {
        value: '',
        id: 'vk'
    },
    instagram: {
        value: '',
        id: 'instagram'
    },
    whatsApp: {
        value: '',
        id: 'whatsApp'
    }

}

const initialParam = {
    mouthing: {
        value: 'Да',
        id: 'mouthing'
    },
    size: {
        value: '',
        id: 'size'
    }
}

const changeState = (value, id, func) => {

    func(pre => {

        return {
            ...pre,
            [id]: { ...pre[id], value }
        }

    })
}

function Page4({ changePage, dataQuiz, changeProgresBar }) {


    const [dopParam, setDopParam] = useState([]);
    const [param, setParam] = useState(initialParam)
    const [userData, setUserData] = useState(initialUserData);

    const [fail, setFail] = useState(false);



    const getAllQuizData = () => {

        if (userData[userData.communicated.value].value === '') {
            setFail(true);
            return
        }

        const objAllQuizData = {
            windowsTypes: filterObject(dataQuiz.page1.items).join(', '),
            materialWindow: filterObject(dataQuiz.page2.items).join(', '),
            paramWindow: filterObject(dataQuiz.selects).join(', '),
            dopParam: dopParam.length === 0 ? 'Нет дополнительных параметров' : dopParam.join(', '),
            mounting: param.mouthing.value,
            size: param.size.value === '' ? 'Не указан' : param.size.value,
            [userData.communicated.value]: userData[userData.communicated.value].value
        }

        console.log(objAllQuizData);

        changePage('page5');
    }



    const getDopParam = (event) => {
        if (event.target.checked) {
            setDopParam(pre => [...pre, event.target.value])
        }
        else {
            setDopParam(pre => pre.filter(item => item !== event.target.value))
        }
    }

    const prevPage = () => {
        changeProgresBar('3 из 4', '75%')
        changePage('page3');
    }

    return (
        <Container>
            <Section>
                <h3>Дополнительные параметры и обратная связь</h3>
                <WraperParamList>
                    <WraperParamItem>
                        <h4>Дополнения</h4>
                        <ListCheckbox>
                            {arrCheckBox.map(title => {
                                return (
                                    <CheckBox key={title} onChange={getDopParam}>{title}</CheckBox>
                                )
                            })}
                        </ListCheckbox>
                    </WraperParamItem>
                    <ListInput>
                        <SelectItem>
                            <Select
                                label='Монтаж'
                                changeMetod={changeState}
                                value={param.mouthing.value}
                                id={param.mouthing.id}
                                func={setParam}>
                                <option value="Да">да</option>
                                <option value="Нет">нет</option>
                            </Select>
                        </SelectItem>
                        <InputItem>
                            <Input
                                label='Размер'
                                placeholder='Ширина х высота, например, 1200х1500 мм'
                                changeMetod={changeState}
                                value={param.size.value}
                                id={param.size.id}
                                func={setParam} />
                        </InputItem>
                        <SelectItem>
                            <Select
                                label='Способ связи'
                                value={userData.communicated.value}
                                id={userData.communicated.id}
                                changeMetod={changeState}
                                func={setUserData}>

                                <option value="mobile">Мобильный</option>
                                <option value="whatsApp">Whatapp</option>
                                <option value="vk">Вконтакте</option>
                                <option value="instagram">Инстаграм</option>

                            </Select>
                        </SelectItem>
                        <InputItem>
                            {userData.communicated.value === 'mobile' && < InputPhoneMask
                                label='Мобильный'
                                placeholder='+7 (___) - ___ ____'
                                changeMetod={changeState}
                                value={userData.mobile.value}
                                id={userData.mobile.id}
                                func={setUserData}
                                fail={fail}
                                setFail={setFail} />}

                            {userData.communicated.value === 'whatsApp' && < InputPhoneMask
                                label='Whatapp'
                                placeholder='+7 (___) - ___ ____'
                                changeMetod={changeState}
                                value={userData.whatsApp.value}
                                id={userData.whatsApp.id}
                                func={setUserData}
                                fail={fail}
                                setFail={setFail} />}

                            {userData.communicated.value === 'vk' && < Input
                                label='Вконтакте'
                                placeholder='Ваш адрес вк'
                                changeMetod={changeState}
                                value={userData.vk.value}
                                id={userData.vk.id}
                                func={setUserData}
                                fail={fail}
                                setFail={setFail} />}

                            {userData.communicated.value === 'instagram' && < Input
                                label='Инстаграм'
                                placeholder='Ваш адрес инстаграм'
                                changeMetod={changeState}
                                value={userData.instagram.value}
                                id={userData.instagram.id}
                                func={setUserData}
                                fail={fail}
                                setFail={setFail} />}

                        </InputItem>
                    </ListInput>
                </WraperParamList>
            </Section>
            <WraperButton>
                <li>
                    <Button
                        animate={false}
                        width='250px'
                        onClick={prevPage}>
                        Назад
                    </Button>
                </li>
                <li>
                    <Button
                        width='250px'
                        onClick={getAllQuizData}>
                        Готово
                    </Button>
                </li>
            </WraperButton>
        </Container>
    )
}

export default Page4;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    
`;

const WraperButton = styled.ul`
    display: flex;
    justify-content: center;

    li {
        margin: 0 5px;
        display: block;
    }
`;

const InputItem = styled.li`
    margin-top: 20px;
`;

const SelectItem = styled.li`
    margin-top: 20px;
`;

const ListInput = styled.ul`
    
`;

const Section = styled.div`
    
    h3 {
        text-align: center;
        margin-bottom: 30px;
    }
`;

const WraperParamList = styled.ul`
    animation: fade .8s ;
    width: 600px;
    max-width: 600px;
`;

const WraperParamItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ListCheckbox = styled.ul`
    display: flex;
`;






