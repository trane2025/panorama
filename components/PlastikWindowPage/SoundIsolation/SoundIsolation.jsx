import styled from 'styled-components';
import Container from '../../UI/Container';
import TitleAdvantages from '../../UI/TitleAdvantages';
import Formula from './Formula';

function SoundIsolation() {
    return (
        <>
            <BackGround>
                <Container>
                    <TitleAdvantages colorNumber='#1e7fde'>
                        <span>02</span> Шумоизоляция
                </TitleAdvantages>
                    <WraperWindow>
                        <img src="/images/plastikWindow/windowSong-min.png" alt="window" />
                        <DescriptionWindow>
                            <p><span>на 25% БОЛЬШЕ</span> защита от шума</p>
                        </DescriptionWindow>
                    </WraperWindow>

                    <DescriptionChild>
                        <h3>Шум остается за окном</h3>
                    </DescriptionChild>
                </Container>
            </BackGround>
            <Formula />
        </>
    )
}

export default SoundIsolation;



const DescriptionChild = styled.div`
    position: absolute;
    background-color: #f3e905;
    width: fit-content;
    padding: 20px 30px;
    bottom: -40px;

    h3 {
        width: 140px;
        text-transform: uppercase;
        font-weight: 900;
    }
`;

const DescriptionWindow = styled.div`
    width: 160px;
    height: 160px;
    background-color: #f3e905;
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -10px;
    bottom: -110px;

    p {
        width: 85px;
        font-weight: 800;
        font-size: 13px;
        text-transform: uppercase;
        span {
            font-weight: 900;
            font-size: 18px;
            text-transform: none;
        }
    }

`;

const WraperWindow = styled.div`
    width: fit-content;
    margin: 0 auto;
    position: relative;
    padding-top: 20px;
    left: 80px;
    bottom: 20px;

`;

const BackGround = styled.section`
    background: url('/images/plastikWindow/soundIsolation.jpg') no-repeat center center;
    padding-top: 140px;
    padding-bottom: 130px;
    position: relative;
    overflow: hidden;
`;
