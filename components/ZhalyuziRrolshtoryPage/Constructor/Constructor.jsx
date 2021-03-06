import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/Container';
import ButtonConstructor from './UI/ButtonConstructor';
import Colors from './UI/Colors';
import ConstructorPicture from './UI/ConstructorPicture';

function Constructor({ colors, activeColor, changeActiveColor, buttons, changeActiveButton, activePicture }) {

    return (
        <Section id='constructor'>
            <Container>
                <Title>Конструктор <span>жалюзи и&nbsp;рольшторы</span></Title>
                <FlexContainer>
                    <WraperImage>
                        <ConstructorPicture
                            activeColor={activeColor}
                            image='/images/zhalyuziRrolshtoryPage/constructor/zhalyuzi.jpg'
                            activePicture={activePicture === 'zhaluzi'}>

                            <svg viewBox="0 0 472 573" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M101.19 330.391H369.301L374.887 339H96.9655L101.19 330.391ZM39.7481 330.391H95.0968V339H34.6703L39.7481 330.391ZM374.887 330.391H432.267L437.852 339H374.887V330.391ZM374.217 311.501H431.596L437.182 320.11H374.217V311.501ZM39.0779 311.501H94.4265V320.11H34L39.0779 311.501ZM100.52 311.501H368.631L374.217 320.11H96.3054L100.52 311.501V311.501ZM101.19 291.082H369.301L374.887 299.691H96.9655L101.19 291.082V291.082ZM39.7481 291.082H95.0968V299.691H34.6703L39.7481 291.082V291.082ZM374.887 291.082H432.267L437.852 299.691H374.887V291.082ZM374.552 270.571H431.932L437.517 279.181H374.552V270.571ZM39.413 270.571H94.7617V279.181H34.3351L39.413 270.571ZM100.855 270.571H368.966L374.552 279.181H96.6405L100.855 270.571ZM102.003 250.253H370.114L375.699 258.863H97.7779L102.003 250.253V250.253ZM40.5606 250.253H95.9093V258.863H35.4827L40.5606 250.253ZM375.699 250.253H433.079L438.665 258.863H375.699V250.253ZM374.887 230.341H432.267L437.852 238.95H374.887V230.341V230.341ZM39.7481 230.341H95.0968V238.95H34.6703L39.7481 230.341V230.341ZM101.19 230.341H369.301L374.887 238.95H96.9655L101.19 230.341V230.341ZM102.328 209.932H370.449L376.035 218.541H98.1131L102.328 209.932ZM40.8856 209.932H96.2343V218.541H35.8077L40.8856 209.932ZM376.035 209.932H433.414L439 218.541H376.035V209.932ZM374.887 190.019H432.267L437.852 198.628H374.887V190.019ZM39.7481 190.019H95.0968V198.628H34.6703L39.7481 190.019ZM101.19 190.019H369.301L374.887 198.628H96.9655L101.19 190.019ZM374.552 170.015H431.932L437.517 178.624H374.552V170.015ZM39.413 170.015H94.7617V178.624H34.3351L39.413 170.015ZM100.855 170.015H368.966L374.552 178.624H96.6405L100.855 170.015ZM100.855 148.401H368.966L374.552 157.01H96.6405L100.855 148.401ZM39.413 148.401H94.7617V157.01H34.3351L39.413 148.401ZM374.552 148.401H431.932L437.517 157.01H374.552V148.401ZM374.887 130.321H432.267L437.852 138.93H374.887V130.321ZM39.7481 130.321H95.0968V138.93H34.6703L39.7481 130.321ZM101.19 130.321H369.301L374.887 138.93H96.9655L101.19 130.321ZM101.19 108.707H369.301L374.887 117.316H96.9655L101.19 108.707ZM39.7481 108.707H95.0968V117.316H34.6703L39.7481 108.707ZM374.887 108.707H432.267L437.852 117.316H374.887V108.707ZM374.887 89.6144H432.267L437.852 98.2236H374.887V89.6144ZM39.7481 89.6144H95.0968V98.2236H34.6703L39.7481 89.6144ZM101.19 89.6144H369.301L374.887 98.2236H96.9655L101.19 89.6144ZM101.19 68H369.301L374.887 76.6093H96.9655L101.19 68ZM39.7481 68H95.0968V76.6093H34.6703L39.7481 68ZM374.887 68H432.267L437.852 76.6093H374.887V68Z" fill={activeColor} />
                            </svg>
                        </ConstructorPicture>
                        <ConstructorPicture
                            activeColor={activeColor}
                            image='/images/zhalyuziRrolshtoryPage/constructor/rolshtori.jpg'
                            activePicture={activePicture === 'rolshotori'}>

                            <svg viewBox="0 0 472 573" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M411.5 31H64.0502C64.0502 31 62 33.526 62 38.0727C62 42.6195 63 46 63 46V404.5V412.5C63 419.5 65 419.92 65 419.92C65 419.92 171.716 420.249 239.398 420.46L412.709 421V46.1901C412.709 46.1901 413.496 45.9703 414.498 43.6299C415.5 41.2894 415.558 36.116 414.5 34C413.5 32 411.5 31 411.5 31Z" fill={activeColor} />
                            </svg>
                        </ConstructorPicture>
                    </WraperImage>
                    <ColorsWraper>
                        {buttons.map(item => {
                            return (
                                <ButtonConstructor
                                    key={item.id}
                                    title={item.title}
                                    subTitle={item.subTitle}
                                    active={activePicture === item.id}
                                    onClick={() => changeActiveButton(item.id)}
                                />
                            )
                        })}
                        <Colors colors={colors} changeActiveColor={changeActiveColor} />
                    </ColorsWraper>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default Constructor;

const WraperBtn = styled.div`

`;

const ColorsWraper = styled.div`
    margin-left: 150px;

    @media (max-width: 1200px) {
        margin-left: initial;
    }

    @media (max-width: 480px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Title = styled.h2`
    text-align: center;
    span {
        color: #e31e24;
    }
`;


const Section = styled.section`
    background: url('/images/zhalyuziRrolshtoryPage/constructor/banner.jpg') bottom center no-repeat;
    background-color: #e4e4e4;
    padding: 100px 0;


    @media (max-width: 1200px) {
        padding: 80px 0;
    }

    @media (max-width: 960px) {
        padding: 60px 0;
    }

    @media (max-width: 670px) {
        padding: 40px 0;
    }
`;

const FlexContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap-reverse;

    @media (max-width: 1200px) {
        justify-content: space-between;
    }

    @media (max-width: 980px) {
        justify-content: center;
    }
`;

const WraperImage = styled.div`

`;
