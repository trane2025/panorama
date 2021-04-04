import styled from 'styled-components';

function Select({ children, label, changeMetod, value, id, func }) {



    const onChange = (event) => {
        changeMetod(event.target.value, id, func);
    }

    return (
        <SelectContainer>
            <label>{label}</label>
            <select value="да" onChange={onChange} value={value}>
                {children}
            </select>
        </SelectContainer>
    )
}

export default Select;

const SelectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    select {
        cursor: pointer;
        align-items: center;
        width: 74%;
        height: 40px;
        border: none;
        font-size: 16px;
        font-family: 'primaryFont';
        padding-left: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    label {
        font-weight: 800;
        font-size: 16px;
    }

`;
