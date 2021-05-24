import styled from 'styled-components';
import Container from '../UI/Container';
import TitleAdvantages from '../UI/TitleAdvantages';

function Production() {
    return (
        <BackGround>
            <Container>

                <FlexConntainer>
                    <Left>
                        <TitleAdvantages colorNumber='#f3e905' colorTitle='white'><span>o4</span> производители</TitleAdvantages>
                        <ImageLeft src="/images/plastikWindow/windowProdactions-new.png" alt="widow" />
                    </Left>
                    <Right>
                        <ImageRight src="/images/plastikWindow/logoRehau.png" alt="Rehau" />
                        <ul>
                            <li>
                                <p><span className='black-text'>REHAU</span> по праву считается одним из мировых лидеров по производству оконных профилей. Бренд стал эталоном качества на современном строительном рынке, благодаря жесткому контролю и высоким техническим требованиям к выпускаемой продукции. </p>
                            </li>
                            <li>
                                <p><span className='black-text'>Окна REHAU</span> – это сочетание первоклассного сырья, инновационных технологий производства и безукоризненного дизайна. Профили REHAU прошли десятилетия испытаний во всех климатических условиях и пригодны к эксплуатации даже в самой экстремальной среде. Поверхность профиля не теряет цвет со временем.  </p>
                            </li>
                            <li>
                                <p><span className='black-text'>Окна REHAU</span> изготавливаются по принципу конструктора, что позволяет создавать действительно индивидуальные решения. <span className='black-text'>REHAU</span> - это постоянно совершенствующаяся и обновляющаяся линейка продукции, лучшие образцы которой представлены в ассортименте оконных систем <span className='black-text'>Панорама</span>.</p>
                            </li>
                        </ul>
                    </Right>
                </FlexConntainer>
            </Container>
        </BackGround>
    )
}

export default Production;


const FlexConntainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: inherit;

    @media (max-width: 870px) {
        display: block;
    }
`;

const Right = styled.div`
    position: relative;
    height: inherit;
    padding-left: 60px;
    padding-top: 100px;
    padding-bottom: 30px;
    p {
        max-width: 505px;
        color: #dddddd;
        line-height: 24px;
    }

    li {
        margin: 14px 0;
    }

    ul {
        margin-top: 30px;
        position: relative;
        z-index: 1;
    }

    ::before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        content: '';
        display: block;
        background-image: -moz-linear-gradient( 127deg, rgb(22,22,22) 0%, rgb(48,47,47) 100%);
        background-image: -webkit-linear-gradient( 127deg, rgb(22,22,22) 0%, rgb(48,47,47) 100%);
        background-image: -ms-linear-gradient( 127deg, rgb(22,22,22) 0%, rgb(48,47,47) 100%);
        width: 10000px;
        height: 100%;
    }

    @media (max-width: 1200px) {
        padding-top: 80px;
    }

    @media (max-width: 870px) {
        padding-top: 60px;
        padding-bottom: 60px;
        padding-left: initial;
        ::before {
            left: -15px;
        }
    }

    @media (max-width: 670px) {
        padding-top: 60px; 
        padding-bottom: 40px;
    }

    @media (max-width: 480px) {
        p {
            max-width: 480px;
            line-height: 20px;
        }
    }
`;

const ImageRight = styled.img`
    position: relative;
    z-index: 1;
`;

const Left = styled.div`
    padding: 100px 0;

    @media (max-width: 1200px) {
        padding: 80px 0;
    }

    @media (max-width: 870px) {
       width: 460px;
       padding: 60px 0;
    }

    @media (max-width: 670px) {
       padding: 40px 0;
    }

    @media (max-width: 480px) {
        width: initial;
    }
`;

const ImageLeft = styled.img`
    margin-top: 50px;
    width: 100%;

    @media (max-width: 480px) {
        margin-top: 20px;
    }
`;

const BackGround = styled.section`
    background-image: -moz-linear-gradient( 90deg, rgb(206,21,21) 0%, rgb(187,37,37) 39%, rgb(245,75,74) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(206,21,21) 0%, rgb(187,37,37) 39%, rgb(245,75,74) 100%);
    background-image: -ms-linear-gradient( 90deg, rgb(206,21,21) 0%, rgb(187,37,37) 39%, rgb(245,75,74) 100%);
    
    
`;


