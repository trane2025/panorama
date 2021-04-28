import styled from 'styled-components';
import Button from '../../UI/Button';
import Slider from '../UI/Slider';

function Page1({ title, items, setCheckBox, changePage, changeProgresBar }) {

    const nextPage = () => {
        changeProgresBar('2 из 4', '50%')
        changePage('page2');
    }

    return (
        <Container>
            <Section>
                <h3>{title}</h3>
                <Slider items={items} setCheckBox={setCheckBox} />
            </Section>
            <Button
                width='250px'
                onClick={nextPage}>
                Далее
            </Button>

        </Container>
    )
}

export default Page1;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    @media (max-width: 670px){
        height: initial;
    }
`;

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3 {
        margin-bottom: 10px;
    }

    @media (max-width: 670px){
        h3 {
            margin-bottom: 0;
        }
    }
`;


