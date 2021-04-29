import styled from 'styled-components';
import Container from '../UI/Container';
import TitleAdvantages from '../UI/TitleAdvantages';

function Production() {
    return (
        <BackGround>
            <Container>
                <TitleAdvantages colorNumber='#f3e905' colorTitle='white'><span>o4</span> производители</TitleAdvantages>
                <FlexConntainer>
                    <Left>
                        <img src="/images/plastikWindow/windowProdactions.png" alt="widow" />
                    </Left>
                    <Right>
                        <img src="/images/plastikWindow/logoRehau.png" alt="Rehau" />
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
    margin-top: 50px;
`;

const Right = styled.div`
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
    }
`;

const Left = styled.div`
    
`;

const BackGround = styled.section`
    background: url('/images/plastikWindow/production.jpg') no-repeat center center;
    padding: 100px 0;
`;


