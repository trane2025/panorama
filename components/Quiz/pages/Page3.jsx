import styled from 'styled-components';
import Button from '../../UI/Button';
import ButtonWraper from '../UI/ButtonWraper';

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
            <Title>{title}</Title>
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
            <ButtonWraper>
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
            </ButtonWraper>
        </Container>
    )
}

export default Page3;

const Title = styled.h3`
    
    @media (max-width: 550px) {
        width: 300px;
        text-align: center;
    }
    
`;

const WraperWindowParam = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 35px auto;
    width: 680px;
    animation: fade .8s ;

    @media (max-width: 770px) {
        width: fit-content;
    }

    @media (max-width: 550px) {
        flex-direction: column;
        margin: 15px auto;
    }
`;

const SelectsList = styled.ul`
    width: 100%;
    padding-left: 50px;
    li {
        display: block;
        margin-bottom: 20px;
        width: inherit;
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
            width: inherit;
        }
    }

    @media (max-width: 550px) {
        flex-direction: column;
        padding-left: 0;
        margin-top: 15px;
    }
`;

const WraperImage = styled.div`
    background-color: rgb(255, 255, 255);
    box-shadow: 4.213px 5.59px 9.8px 0.2px rgba(18, 18, 18, 0.07);
    width: 240px;
    height: 240px;
    min-height: 240px;
    min-width: 240px;
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

