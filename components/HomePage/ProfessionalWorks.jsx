
import styled from 'styled-components';
import Container from '../UI/Container';

function ProfessionalWorks() {
    return (
        <Section>
            <Container>
                <FlexCotainer>
                    <Left>
                        <h2>Доверьте установку <br />окон специалистам</h2>
                        <SubTitle>Нас ценят за надежность и качество</SubTitle>
                        <ul>
                            <WraperAdvatages>
                                <h3>01</h3>
                                <p>Нет просрочек <br /> и простоев</p>
                            </WraperAdvatages>

                            <WraperAdvatages>
                                <h3>02</h3>
                                <p>У всех специалистов <br /> большой стаж работы</p>
                            </WraperAdvatages>

                            <WraperAdvatages>
                                <h3>03</h3>
                                <p>Строгий контроль <br /> качества</p>
                            </WraperAdvatages>
                        </ul>
                    </Left>
                    <Right>
                        <YearsIconWraper>
                            <Student src='/images/homePage/student.png' alt="student"></Student>
                            <YearsIcon src="/images/homePage/20yaers.svg" alt="20yaers" />
                            <Chaild src='/images/homePage/chaild.png' alt="chaild" />
                        </YearsIconWraper>
                    </Right>
                </FlexCotainer>
            </Container>
        </Section>
    )
}

export default ProfessionalWorks;

const YearsIconWraper = styled.div`
    position: absolute;
    bottom: 2px;
    left: -119px;

    @media (max-width: 480px) {
        left: 0;
        bottom: -5px;
    }
`;

const Student = styled.img`
    position: relative;
    top: 52px;

    @media (max-width: 480px) {
        left: 0;
        top: 25px;
        height: 170px;
        width: auto;
    }
`;

const Chaild = styled.img`
    position: absolute;
    left: -170px;
    bottom: -10px;

    @media (max-width: 480px) {
        display: none;
    }
`;

const YearsIcon = styled.img`
    @media (max-width: 480px) {
        height: 150px;
        width: auto;
    }
`;

const Right = styled.div`
    position: relative;
    height: 731px;
    width: 100%;

    

    ::before {
        position: absolute;
        content: '';
        display: block;
        width: 10000px;
        height: 100%;
        background: url('/images/homePage/Profesional.jpg') repeat-x;
        left: 0;
        top: 0;
    }

    @media (max-width: 480px){
        height: 300px;

        ::before {
            width: 600px;
        }
    }
`;

const Section = styled.section`
    background-color: #efefef;
`;

const FlexCotainer = styled.section`
    display: flex;

    @media (max-width: 480px){
        display: block;
    }
`;

const Left = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    min-width: 605px;
    padding-right: 150px;

    h2 {
        color: #1e1e1e;
    }
    
    ul {
        margin-top: 30px;

        li:last-child {
            margin-bottom: 0;
        }
    }

    @media (max-width: 480px) {
        min-width: fit-content;
        padding-bottom: 40px;
        padding-top: 40px;
        h2 {
            text-align: center;
            min-width: initial;
        }
    }
`;

const SubTitle = styled.p`
    font-size: 24px;
    margin-top: 15px;

    @media (max-width: 480px) {
        font-size: 16px;
        max-width: 210px;
        text-align: center;
        margin: 10px auto;
    }
`;

const WraperAdvatages = styled.li`
    display: flex;
    align-items: center;
    background-color: white;
    width: 350px;
    min-width: 350px;
    height: 95px;
    margin-bottom: 20px;

    h3 {
        height: 95px;
        width: 95px;
        background-color: #1d2138;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        color: white;
    }

    p {
        font-size: 18px;
        font-weight: 600;
        padding-left: 20px;
    }

    @media (max-width: 480px) {
        width: 290px;
        min-width: 290px;
        height: 70px;

        h3 {
            font-size: 36px;
            height: 70px;
            width: 70px;
        }

        p {
            font-size: 16px;
        }
    }
`;




