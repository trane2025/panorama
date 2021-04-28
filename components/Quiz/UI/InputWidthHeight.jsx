import React from 'react';
import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

const InputWidthHeight = ({ label, placeholder, changeMetod, value, id, func, fail, setFail }) => {

    const onChange = (event) => {
        if (setFail) {
            setFail(false)
        }
        changeMetod(event.target.value, id, func)
    }

    return (
        <InputStyle >
            <label>{label}</label>
            <MaskedInput
                style={{ outline: fail ? 'red 1px solid' : 'none' }}
                mask={['(', /\d/, /\d/, /\d/, /\d/, ')', ' ', 'x', ' ', '(', /\d/, /\d/, /\d/, /\d/, ')', ' ', 'мм']}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </InputStyle>
    )
}



export default InputWidthHeight;

const InputStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
        font-weight: 800;
        font-size: 16px;
    }

    input {
        width: 74%;
        height: 40px;
        font-size: 16px;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 0;
        border: none;
        transition-duration: .2s;
        

        :focus {
            outline: 1px solid rgb(92, 92, 92);
        }
    }

    @media (max-width: 760px){
        input {
            width: 260px;
            height: 35px;
            font-size: 14px;
        }

        label {
            font-size: 14px;
            margin-bottom: 5px;
        }
    }
`;