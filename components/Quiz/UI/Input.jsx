import React from 'react';
import styled from 'styled-components';

function Input({ label, type, placeholder, value, changeMetod, id, func, fail, setFail }) {

    const onChange = (event) => {
        if (setFail) {
            setFail(false)
        }
        changeMetod(event.target.value, id, func)
    }

    return (
        <InputStyle>
            <label htmlFor={label}>{label}</label>
            <input
                style={{ outline: fail ? 'red 1px solid' : 'none' }}
                type={type}
                id={label}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </InputStyle>
    )
}

export default Input;




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
            height: 35px;
            font-size: 14px;
            width: 100%;
        }

        label {
            font-size: 14px;
            margin-bottom: 5px;
        }

        flex-direction: column;
        align-items: flex-start;
    }
`;
