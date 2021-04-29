import React from 'react';
import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

const InputPhoneMask = ({ placeholder, changeMetod, value, width, id }) => {

    const onChange = (event) => {
        changeMetod(event.target.value, id);
    }

    return (
        <InputStyle width={width}>
            <MaskedInput
                mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholder={placeholder}
                onChange={onChange}
                value={value}

            />
        </InputStyle>
    )

}

export default InputPhoneMask;

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