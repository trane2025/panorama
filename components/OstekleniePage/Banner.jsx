import styled from "styled-components";
import ButtonLink from "../UI/ButtonLink";
import Container from "../UI/Container";
import { useRouter } from 'next/router';


function Banner() {
    const { pathname } = useRouter();
    return (
        <Section>
            <Container>
                <FlexContainer>
                    <WraperText>
                        <h1>Остекление <br /> в Астрахани</h1>
                        <p>балконов, лоджий, квартир, домов и коттеджей</p>
                        <ButtonLink link={`${pathname}/#quiz`}>
                            Узнать стоимость
                    </ButtonLink>
                    </WraperText>
                    <WraperBanner />
                </FlexContainer>
            </Container>
        </Section>
    )
}

export default Banner;

const Section = styled.section`
    
`;

const FlexContainer = styled.div`
    display: flex;
`;

const WraperBanner = styled.div`
    width: 100%;
    height: 630px; 
    position: relative;
    ::after {
        content: '';
        display: block;
        width: 1100px;
        height: 100%;
        background: url('/images/installWindowPage/banner.jpg') center center no-repeat;

        position: absolute;
        left: 0;
        top: 0;
    }
`;

const WraperText = styled.div`
    padding-top: 150px;
    padding-right: 85px;
    h1 {
        width: 364px;
    }
    p {
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 30px;
    }

`;
