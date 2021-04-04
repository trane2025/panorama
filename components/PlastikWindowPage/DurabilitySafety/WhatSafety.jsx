import styled from 'styled-components';
import Container from '../../UI/Container';

function WhatSafety() {
    return (
        <BackGround>
            <Container>
                <h2>Что обеспечивает безопасность и ударопрочность <br /> <span className='red-text'>стеклопакета от «Панорама»</span> </h2>
                <FlexContainer>
                    <WraperWindowList>
                        <li>
                            <WraperImage>
                                <img src="/images/plastikWindow/windowSafty.png" alt="windowSafty" />
                            </WraperImage>

                        </li>
                        <li>
                            <TextList>
                                <ItemText>
                                    <i>
                                        <svg
                                            width="144px" height="25px">
                                            <path fillRule="evenodd" fill="rgb(243, 233, 5)"
                                                d="M144.003,4.661 L16.467,4.661 L16.467,0.850 L-0.004,12.849 L16.467,24.849 L16.467,21.037 L144.003,21.037 L144.003,4.661 Z" />
                                        </svg>
                                    </i>
                                    <WraperText>
                                        <p>
                                            <span className='black-text'>Внутренний Triplex 44.2 </span>- это многослойное ударопрочное стекло, состоящее из двух флоат-стекол (по 4мм), соединенных PVB
                                    </p>
                                    </WraperText>
                                </ItemText>
                                <ItemText>
                                    <i style={{ zIndex: '2' }}>
                                        <svg
                                            width="95px" height="25px">
                                            <path fillRule="evenodd" fill="rgb(243, 233, 5)"
                                                d="M95.003,21.115 L15.352,21.115 L15.352,24.926 L-0.003,12.927 L15.352,0.927 L15.352,4.738 L95.003,4.738 L95.003,21.115 Z" />
                                        </svg>
                                    </i>
                                    <WraperText>
                                        <p>
                                            <span className='black-text'>Внутренний Triplex 44.2 </span>- это многослойное ударопрочное стекло, состоящее из двух флоат-стекол (по 4мм), соединенных PVB
                                    </p>
                                    </WraperText>
                                </ItemText>
                            </TextList>
                        </li>
                    </WraperWindowList>

                    <ItemArrow>
                        <svg
                            width="94px" height="68px">
                            <path fillRule="evenodd" fill="rgb(32, 32, 32)"
                                d="M-0.009,55.572 L49.293,55.572 L49.293,67.918 L94.009,34.400 L49.293,0.883 L49.293,13.228 L-0.009,13.228 L-0.009,55.572 Z" />
                        </svg>
                    </ItemArrow>
                    <AdvantagesText>
                        <li>
                            <p>Существенно повышает ударопрочность стекла</p>
                        </li>
                        <li>
                            <p>В случае повреждения <span className='black-text'>осколки не образуются</span> </p>
                        </li>
                        <li>
                            <p>Выдерживает удар шины <br /> <span className='black-text'>45 кг</span> при падения с высоты <br /> <span className='black-text'>1,2 м</span> без проникновения</p>
                        </li>
                        <li>
                            <p>Выдерживает тройное падение металлческого шара <span className='black-text'>4,2 кг с высоты 3 м</span></p>
                        </li>
                    </AdvantagesText>
                </FlexContainer>
            </Container>
        </BackGround>
    )
}

export default WhatSafety;

const WraperWindowList = styled.ul`
    display: flex;
    position: relative;
`;


const AdvantagesText = styled.ul`
    background-color: #f3e905;
    width: 100%;
    flex: 1;
    padding: 30px 30px;

    

    li {
        ::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: #bec000;
            margin: 15px 0;
        }
    }

    p {
        font-weight: 600;
        max-width: 240px;
        line-height: 20px;
    }

    li:last-child {
        ::after {
            content: '';
            display: block;
            width: 100%;
            height: 0;
            background-color: none;
            margin: 0;
        }
    }
    
`;


const ItemArrow = styled.li`
    margin: 0 15px;
`;

const WraperImage = styled.div`
    margin-right: 5px;
    width: 250px;
    height: 320px;
    position: relative;
    img {
        position: absolute;
    }
`;


const WraperText = styled.div`
    padding: 30px;
    background-color: white;
    box-shadow: 0px 0px 9px 0px rgba(39, 39, 39, 0.1);
`;

const ItemText = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 15px 0;
    
`;

const TextList = styled.ul`  

    p {
        max-width: 250px;
        line-height: 22px;
    }

`;

const FlexContainer = styled.ul`
    margin-top: 40px;
    display: flex;
    align-items: center;
`;

const BackGround = styled.div`
    background: url('/images/plastikWindow/WhatSafety.jpg') no-repeat center center;
    padding-bottom: 100px;

    h2 {
        text-transform: none;
        text-align: center;
    }
`;
