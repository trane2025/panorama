import styled from 'styled-components';
import Container from '../UI/Container';
import { useRouter } from 'next/router';
import ButtonLink from '../UI/ButtonLink';

function Banner() {
    const { pathname } = useRouter();
    return (
        <Section>
            <Container>
                <FlexContainer>
                    <TextWraper>
                        <h1><span>Алюминиевые</span> <br /> конструкции</h1>
                        <h2>купить в Астрахани</h2>
                        <p>надежные, удобные, практичные <br /> создают особую атмосферу</p>
                        <ButtonLink link={`${pathname}/#quiz`}>
                            Узнать стоимость
                        </ButtonLink>
                    </TextWraper>
                    <WraperImage>
                        <img src="/images/alumiumPage/banner.jpg" alt="banner" />
                    </WraperImage>
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default Banner;

const WraperImage = styled.div`
    position: relative;
    width: 100%;
    height: 648px;

    img {
        position: absolute;
        top: 0;
        left: 0;
        z-index:3;
    }
`;

const Section = styled.section`
    background-color: #fff8eb;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`;

const TextWraper = styled.div`
    position: relative;
    padding: 175px 0;
    padding-right: 20px;

    ::before {
        content: '';
        display: block;
        width: 876px;
        height: 100%;
        background-image: -moz-linear-gradient( 50deg, rgb(255,248,235) 0%, rgb(255,255,255) 100%);
        background-image: -webkit-linear-gradient( 50deg, rgb(255,248,235) 0%, rgb(255,255,255) 100%);
        background-image: -ms-linear-gradient( 50deg, rgb(255,248,235) 0%, rgb(255,255,255) 100%);
        z-index: 0;

        position: absolute;
        right: 0;
        top: 0;

    }

    h1 {
        position: relative;
        z-index: 1;
    }


    h2 {
        min-width: 475px;
        position: relative;
        z-index: 1;
    }

    p{
        margin-top: 20px;
        margin-bottom: 25px;
        position: relative;
        z-index: 1;
        font-size: 24px;
    }
`;