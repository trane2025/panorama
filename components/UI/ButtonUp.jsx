import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';

function showBtn(fn) {


    return () => {
        if (pageYOffset > 600) {
            fn(true);
        }
        else fn(false);
    }

}

function ButtonUp() {
    const { pathname } = useRouter();
    const [activeBtn, setActiveBtn] = useState(false);

    const srollMemo = useMemo(() => showBtn(setActiveBtn), []);

    useEffect(() => {
        addEventListener('scroll', srollMemo);
        return () => {
            removeEventListener('scroll', srollMemo);
        }
    })

    return (
        <Link href={`${pathname}#banner`}>
            <Button style={{ display: activeBtn ? 'block' : 'none' }}>
                <img src="/icon/button-up.svg" alt="button-up" />
            </Button>
        </Link>
    )
}

export default ButtonUp;

const Button = styled.a`
    position: fixed;
    right: 20px;
    bottom: 100px;
    z-index: 20;
    cursor: pointer;
    animation: fade .5s;
    img {
        width: 140px;
        height: 120px;
    }
    
    @media (max-width: 1200px) {
        bottom: 20px; 
    }

    @media (max-width: 670px) {

        display: none;

        img {
            display: none;
        }
    }
`;
