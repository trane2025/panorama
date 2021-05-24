import styled from 'styled-components';
import Container from '../../UI/Container';
import TitleAdvantages from '../../UI/TitleAdvantages';
import Formula from './Formula';

function SoundIsolation() {
    return (
        <>
            {/* <BackGround>
                <Container>
                    <TitleAdvantages colorNumber='#1e7fde'>
                        <span>02</span> Шумоизоляция
                </TitleAdvantages>
                    

                    <DescriptionChild>
                        <h3>Шум остается за окном</h3>
                    </DescriptionChild>
                </Container>
            </BackGround> */}
            <Section>
                <Container>
                    <FlexContainer>
                        <LeftSection>
                            <BackLeftSection src='/images/plastikWindow/sound-isolation/left-back.jpg' alt='left-back' />
                            <TitleAdvantages colorNumber='#1e7fde'>
                                <span>02</span> Шумоизоляция
                            </TitleAdvantages>
                            <Children src='/images/plastikWindow/sound-isolation/children.png' alt='children' />
                            <DescriptionChild>
                                <h3>Шум остается <br /> за окном</h3>
                            </DescriptionChild>
                            <WraperWindow>
                                <DescriptionWindow>
                                    <p><span>на 25% ЛУЧШЕ</span> защита от шума</p>
                                </DescriptionWindow>
                            </WraperWindow>
                        </LeftSection>

                        <RightSection>
                            <BackRightSection src='/images/plastikWindow/sound-isolation/right-back.jpg' alt='right-back' />
                            <AirPlane src='/images/plastikWindow/sound-isolation/airplane-min.png' alt='airplane' />
                        </RightSection>

                    </FlexContainer>
                </Container>
            </Section>
            <Formula />
        </>
    )
}

export default SoundIsolation;



const Section = styled.section`
    background-color: #f5f3f2;
`;

const FlexContainer = styled.div`
    display: flex;

    @media (max-width: 970px) {
        flex-direction: column;
    }
`;

const LeftSection = styled.div`
    padding-top: 100px;
    padding-bottom: 140px;
    position: relative;
    padding-right: 100px;


    @media (max-width: 1200px) {
        padding-top: 80px;
        padding-bottom: 60px;
        padding-right: 25px;
    }

    @media (max-width: 970px) {
        padding-top: 60px;
        margin-bottom: 150px;
    }

    @media (max-width: 480px) {
        padding-top: 40px;
        margin-bottom: 100px;
    }
`;

const BackLeftSection = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;

    @media (max-width: 970px) {
        right: initial;
        top: initial;
        height: 450px;
        left: -105px;
    }

    @media (max-width: 480px) {
        height: 285px;
    }
        
`;

const RightSection = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    @media (max-width: 970px) {
        margin-left: -15px;
        margin-right: -15px;
        overflow: hidden;
        height: 500px;
    }

    @media (max-width: 760px) {
        height: 350px;
    }
`;

const BackRightSection = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-left: solid 30px white;
    border-bottom: solid 30px white;

    @media (max-width: 970px){
        border: none;
        height: 750px;
        top: -50px;
        width: auto;
    }

    @media (max-width: 760px) {
        height: 600px;
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
    right: -5px;
    bottom: -50px;

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

    @media (max-width: 1200px) {
        width: 130px;
        height: 130px;
    }

    @media (max-width: 970px) {
        right: initial;
        left: 0;
        bottom: -10px;
    }

`;

const WraperWindow = styled.div`
    width: fit-content;
    margin: 0 auto;
    position: absolute;
    right: -235px;
    top: 125px;
    z-index: 1;
    width: 490px;
    height: 480px;
    background: url('/images/plastikWindow/sound-isolation/window.png') no-repeat ;
    background-size: cover;

    @media (max-width: 1200px) {
        
        width: 430px;
        height: 420px;
    }

    @media (max-width: 970px) {
        right: initial;
        top: initial;
        left: 60px;
        bottom: -320px;
        background: url('/images/plastikWindow/sound-isolation/window-mobile.png') no-repeat center center ;
        background-size: contain;
        width: 300px;
        height: 300px;
    }

    @media (max-width: 480px) {
        height: 240px;
        left: 15px;
        bottom: -250px;
    }
`;

const AirPlane = styled.img`
    position: absolute;
    top: -30px;
    z-index: 3;

    @media (max-width: 1200px) {
        height: 45%;
        width: auto;
        top: -5px;
        left: -20px;
    }

    @media (max-width: 970px){
        top: 155px;
        left: 200px;
    }

    @media (max-width: 480px){
        top: 155px;
        left: 20px;
    }

    
`;



const Children = styled.img`
    position: relative;
    z-index: 2;

    @media (max-width: 1200px) {
        height: 70%;
        width: auto;
    }

    @media (max-width: 970px) {
        height: 300px;
        width: auto;
        left: 60px;
    }

    @media (max-width: 480px) {
        height: 200px;
    }
`;


const DescriptionChild = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 0;
    background-color: #f3e905;
    width: fit-content;
    padding: 20px 30px;

    h3 {
        width: 140px;
        text-transform: uppercase;
        font-weight: 900;
    }
`;




