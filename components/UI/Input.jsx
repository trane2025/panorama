import React from 'react';
import styled from 'styled-components';

function Input({ type, id, placeholder, changeMetod, value, width }) {

    const onChange = (event) => {
        changeMetod(event.target.value, id);
    }

    return (
        <InputStyle width={width}>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </InputStyle>
    )
}

export default Input;


const InputStyle = styled.div`

    

    input {
        width: ${({ width }) => width ? width : '100%'};
        height: 50px;
        font-size: 16px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 0;
        border: none;
        transition-duration: .2s;
        

        :focus {
            outline: 1px solid #333232;
        }
    }
`;
