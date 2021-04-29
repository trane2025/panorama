import styled from 'styled-components';
import Button from '../../UI/Button';
import Slider from '../UI/Slider';

function Page2({ title, items, changeRadio, changePage, changeProgresBar }) {

    const nextPage = () => {
        changeProgresBar('3 из 4', '75%')
        changePage('page3');
    }

    const prevPage = () => {
        changeProgresBar('1 из 4', '25%')
        changePage('page1');
    }


    return (
        <Container>
            <Section>
                <h3>{title}</h3>
                <Slider items={items} setCheckBox={changeRadio} />
            </Section>
            <WraperButton>
                <li>
                    <Button
                        animate={false}
                        width='250px'
                        onClick={prevPage}>
                        Назад
                    </Button>
                </li>
                <li>
                    <Button
                        width='250px'
                        onClick={nextPage}>
                        Далее
                    </Button>
                </li>
            </WraperButton>
        </Container>
    )
}

export default Page2;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;


const WraperButton = styled.ul`
    display: flex;

    li {
        margin: 0 5px;
    }

    @media (max-width: 670px){
        flex-direction: column;

        li {
            margin: 5px 0;
        }
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


