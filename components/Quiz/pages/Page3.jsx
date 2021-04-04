import styled from 'styled-components';
import Button from '../../UI/Button';

function Page3({ changePage, title, image, selects, items, changeSelect, changeProgresBar }) {

    const nextPage = () => {
        changeProgresBar('4 из 4', '100%')
        changePage('page4');
    }

    const prevPage = () => {
        changeProgresBar('2 из 4', '50%')
        changePage('page2');
    }

    return (
        <Container>
            <h3>{title}</h3>
            <WraperWindowParam>
                <WraperImage>
                    <img src={image} alt="window" />
                </WraperImage>
                <SelectsList>
                    {items.map(key => {
                        const select = selects[key];
                        return (
                            <li key={select.id}>
                                <label htmlFor={select.id}>{select.label}</label>
                                <select id={select.id} value={select.value} onChange={(event) => changeSelect(select.id, event.target.value)}>
                                    {select.items.map((option, index) => {

                                        return (
                                            <option key={option.title + select.id + index} value={option.title}>{option.title}</option>
                                        )
                                    })}
                                </select>
                            </li>
                        )
                    })}

                </SelectsList>
            </WraperWindowParam>
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
                        onClick={nextPage}>
                        Далее
                    </Button>
                </li>
            </WraperButton>
        </Container>
    )
}

export default Page3;

const WraperWindowParam = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 35px auto;
    width: 680px;
    animation: fade .8s ;
`;

const SelectsList = styled.ul`
    li {
        margin-bottom: 20px;
        label {
            display: block;
            font-size: 16px;
            font-weight: 800;
            margin-bottom: 5px;
        }

        select {
            font-size: 16px;
            font-weight: 400;
            font-family: 'primaryFont';
            padding-left: 15px;
            padding-top: 10px;
            padding-bottom: 10px;
            border-width: 1px;
            border-color: rgb(222, 222, 222);
            border-style: solid;
            width: 400px;
        }
    }
`;

const WraperImage = styled.div`
    background-color: rgb(255, 255, 255);
    box-shadow: 4.213px 5.59px 9.8px 0.2px rgba(18, 18, 18, 0.07);
    width: 240px;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;


`;


const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const WraperButton = styled.ul`
    display: flex;

    li {
        margin: 0 5px;
    }
`;