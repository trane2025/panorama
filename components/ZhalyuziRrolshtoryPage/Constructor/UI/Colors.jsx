import styled from 'styled-components';



function Colors({ colors, changeActiveColor }) {
    return (
        <ColorsList>
            {colors.map(item => {
                return (
                    <ColorsItem
                        key={item.id}
                        style={{ background: `${item.color}` }}
                        active={item.active}
                        onClick={() => changeActiveColor(item.id, item.color)} >
                        {item.active &&
                            <ActiveIcon>
                                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.741 1.157L9.781 0.197C9.65 0.066 9.49 0 9.301 0C9.113 0 8.953 0.066 8.821 0.197L4.192 4.834L2.117 2.752C1.985 2.62 1.825 2.554 1.637 2.554C1.449 2.554 1.289 2.62 1.157 2.752L0.197 3.712C0.066 3.843 0 4.003 0 4.192C0 4.38 0.066 4.54 0.197 4.671L2.752 7.226L3.712 8.186C3.844 8.317 4.004 8.383 4.192 8.383C4.38 8.383 4.54 8.317 4.672 8.186L5.632 7.226L10.741 2.117C10.873 1.985 10.939 1.825 10.939 1.637C10.939 1.449 10.873 1.289 10.741 1.157Z" fill="#3A3A3A" />
                                </svg>
                            </ActiveIcon>
                        }
                    </ColorsItem>
                )
            })}

        </ColorsList>
    )
}

export default Colors;

const ActiveIcon = styled.i`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #fff825;
`;

const ColorsList = styled.ul`

    
    width: 480px;
    min-width: 460px;
    height: 340px;
    min-height: 340px;
    overflow-y: auto;
   

    display: flex;
    flex-wrap: wrap;
    
    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: #c1c1c1;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #2a2a2a;
        :active {
            background-color: #4b4b4b;
        }
    }
    
`;

const ColorsItem = styled.li`
    cursor: pointer;
    position: relative;
    height: 100px;
    width: 100px;
    margin: 7px;
    ${({ active }) =>
        active ?
            { outlineOffset: '-8px', outline: 'solid white 8px' }
            : ''
    }
`;
