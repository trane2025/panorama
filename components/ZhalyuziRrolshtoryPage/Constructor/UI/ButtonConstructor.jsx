import React from 'react'
import styled from 'styled-components';

function ButtonConstructor({ title, subTitle, active, onClick }) {
    return (
        <Button active={active} onClick={onClick}>
            <span>{title}</span>
            <span>{subTitle}</span>
        </Button>
    )
}

export default ButtonConstructor;

const Button = styled.button`
    border: none;
    width: 100%;
    padding: 20px;
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    background-color: ${({ active }) => active ? '#ffd038' : 'white'};
    transition: .3s;
    color: ${({ active }) => active ? '#1e1e1e' : '#bababa'};
    margin-bottom: 10px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.06);
    font-family: 'primaryFont';
    cursor: pointer;

   
`;


