import { useState } from 'react';
import styled from 'styled-components';
import PrelouderImage from '../../UI/PrelouderImage';
import Image from 'next/image';

function CheckBoxImage({ checkbox, change }) {

    const [prelouder, setPrelouder] = useState(true);

    return (
        <CheckBoxItem active={checkbox.checked} onClick={() => change(checkbox.id)}>
            <div className="wraper-checkbox">
                {prelouder && <PrelouderImage />}
                <Image src={checkbox.image} alt="window" onLoad={() => setPrelouder(false)} unoptimized={true} layout="fill" objectFit="scale-down" />
                {checkbox.checked &&
                    <div className="castom-checkbox">
                        <i>
                            <svg
                                width="17px" height="13px">
                                <path fillRule="evenodd" fill="rgb(58, 58, 58)"
                                    d="M16.061,2.504 L14.679,1.122 C14.489,0.932 14.258,0.837 13.987,0.837 C13.716,0.837 13.486,0.932 13.296,1.122 L6.630,7.798 L3.642,4.801 C3.452,4.611 3.222,4.516 2.951,4.516 C2.680,4.516 2.449,4.611 2.260,4.801 L0.878,6.183 C0.688,6.372 0.593,6.603 0.593,6.874 C0.593,7.145 0.688,7.375 0.878,7.565 L4.557,11.243 L5.939,12.625 C6.128,12.815 6.359,12.910 6.630,12.910 C6.901,12.910 7.131,12.815 7.321,12.625 L8.703,11.243 L16.061,3.886 C16.250,3.696 16.345,3.466 16.345,3.195 C16.345,2.924 16.250,2.694 16.061,2.504 L16.061,2.504 Z" />
                            </svg>
                        </i>
                    </div>
                }
            </div>
            <p>{checkbox.title}</p>
        </CheckBoxItem>
    )
}

export default CheckBoxImage

const CheckBoxItem = styled.li`
    margin: 8px;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    min-width: 0;
    min-height: 0;

        img {
            opacity: ${({ active }) => active ? '1' : '.8'};
            transition-duration: .3s;
            filter: ${({ active }) => active ? 'grayscale(0)' : 'grayscale(100%)'}; 
        }

        .wraper-checkbox {
            position: relative;
            background-color: white;
            box-shadow: 4.213px 5.59px 9.8px 0.2px rgba(18, 18, 18, 0.07);
            height: 190px;
            width: 230px;
            display: flex;
            justify-content:center;
            align-items: center;
            min-width: 0;
            min-height: 0;
        }


        .castom-checkbox {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 30px;
            height: 30px;
            border: none;
            background-color: #f8ef03;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
            max-width: 210px;
            text-align: center;
            display: inline-block;
            margin-top: 10px;
            font-weight: 900;
            font-size: 14px;
        }
    
`;