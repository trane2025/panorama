import React from 'react';
import styled from 'styled-components';

function ConstructorPicture({ children, image, activePicture }) {
    return (
        <Picture activePicture={activePicture}>
            {children}
            <img src={image} alt="zhalyuzi" />

        </Picture>
    )
}

export default ConstructorPicture;

const Picture = styled.picture`
    display: ${({ activePicture }) => activePicture ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: relative;
    animation: 'fade' .3s;

    svg {
        position: absolute;
        opacity: 1;
        mix-blend-mode: multiply;
    }

    
`;
