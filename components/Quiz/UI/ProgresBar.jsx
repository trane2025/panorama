import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const useUpdateEffect = (fn, deps) => {
    const ref = useRef(false);

    useEffect(() => {
        if (ref.current) {
            fn();
        }
        else ref.current = true;
    }, deps)
}

function ProgresBar({ progresBar }) {

    const [animate, setAnimate] = useState(false);

    useUpdateEffect(() => {
        setAnimate(true);
    }, [progresBar.value])

    return (
        <ProgresBarContainer>
            <LineProgresBar progres={progresBar.progres} animate={animate} onTransitionEnd={() => setAnimate(false)} />
            <p>{`Вопрос ${progresBar.value}`}</p>
        </ProgresBarContainer>
    )
}

export default ProgresBar;

const LineProgresBar = styled.div`
    width: ${({ progres }) => progres};
    height: 100%;
    background-color: #fef401;
    position: absolute;
    z-index: 1;
    left: 0;
    transition-duration: 1s;

    ::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        background: url('/images/quiz/lineProgresBar.svg');
        width: 100%;
        height: 100%;
        animation: ${({ animate }) => animate ? 'progress_bar linear infinite 1.2s' : 'none'}; 
        
    }

    @keyframes progress_bar {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: -100px 0;
        }
    }
`;

const ProgresBarContainer = styled.div`
    width: 70%;
    background-color: white;
    border: #efefef solid 7px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    position: relative;

    p {
        text-align: center;
        font-weight: 800;
        z-index: 2;
    }

    @media (max-width: 480px) {
        margin: 5px;
        width: 80%;
    }
`;