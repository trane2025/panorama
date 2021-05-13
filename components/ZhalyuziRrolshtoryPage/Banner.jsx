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

    @media (max-width: 670px) {
        flex-direction: column;
    }
`;

const BannerText = styled.div`
    padding: 150px 0;
    padding-right: 130px;

    h1 {
        min-width: 420px;
    }

    p {
        max-width: 350px;
        font-size: 24px;
        margin: 20px 0;
    }

    @media (max-width: 1200px) {
        padding: 80px 0;
        padding-right: 30px;

        h1 {
            min-width: 400px;
        }
    }

    @media (max-width: 960px) {
        padding: 60px 0;
        padding-right: 30px;
    }

    @media (max-width: 670px) {
        padding: 40px 0;

        h1 {
            min-width: initial;
        }

        p {
            font-size:20px;
            margin: 20px 0;
        }
    }

    @media (max-width: 480px) {
        h1 {
            text-align: center;
        }

        p {
            text-align: center;
        }
    }
`;

const BannerImage = styled.div`
    position: relative;
    height: inherit;
    width: 100%;

    img {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 1020px;
    }

    @media (max-width: 1200px) {
        img {
            width: 700px;
        }
    }

    @media (max-width: 670px) {
        height: 300px;

        img {
            height: inherit;
            width: auto;
        }
    }
`;