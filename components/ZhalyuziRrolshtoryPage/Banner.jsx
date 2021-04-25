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
                    <BannerText>
                        <h1><span>Купить</span> жалюзи <br /> или рольшторы <br /> в Астрахани</h1>
                        <p>Заключительный штрих <br /> в создании стиля интерьера</p>
                        <ButtonLink link={`${pathname}/#constructor`}>
                            Подобрать расцветку
                        </ButtonLink>
                    </BannerText>
                    <BannerImage>
                        <img src="/images/zhalyuziRrolshtoryPage/banner.jpg" alt="banner" />
                    </BannerImage>
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
    align-items: center;
`;

const BannerText = styled.div`
    padding: 100px 0;
    padding-right: 130px;

    h1 {
        min-width: 420px;
    }

    p {
        max-width: 350px;
        font-size: 24px;
        margin: 20px 0;
    }
`;

const BannerImage = styled.div`
    position: relative;
    height: 650px;
    width: 100%;

    img {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 1020px;
    }
`;