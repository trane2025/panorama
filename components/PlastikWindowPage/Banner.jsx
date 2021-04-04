import styled from 'styled-components';
import Button from '../UI/Button';
import Container from '../UI/Container';

function Banner() {
    return (
        <BackGround>
            <Container>
                <h1>Пластиковые окна <br /><span>от «Панорамы»</span></h1>
                <List>
                    <Item>
                        <WraperDescription>
                            <h3>Энергосбережение</h3>
                            <p>Теплосбережение эквивалентно <br /><span>толщине кирпичной стены</span></p>
                        </WraperDescription>
                    </Item>

                    <Item>
                        <WraperDescription>
                            <h3>Шумоизоляция</h3>
                            <p>Снижает шум за окном более <br /><span>чем в 2 раза</span></p>
                        </WraperDescription>
                    </Item>

                    <Item>
                        <WraperDescription>
                            <h3>Прочность и безопасность</h3>
                            <p>Иновационный <span>безопасный</span> <br /> стеклопакет от «Панорамы»</p>
                        </WraperDescription>
                    </Item>
                </List>
                <WraperButton>
                    <Button
                    >
                        Узнать стоимость
                    </Button>
                </WraperButton>
            </Container>
        </BackGround>
    )
}

export default Banner;

const WraperButton = styled.div`
    
`;

const BackGround = styled.section`
    background: url('/images/plastikWindow/banner.jpg') no-repeat center center;
    padding: 109px 0;

    h1 {
        margin-bottom: 20px;
        text-transform: uppercase;
    }
`;



const List = styled.ul`
    
`;

const WraperDescription = styled.div`
    h3 {
        position: relative;
        top: -5px;
        text-transform: uppercase;
        
    }

    p {
        font-size: 18px;
        color: #333333;
        line-height: 22px;

       span {
           font-weight: 900;
           color: #222222;
       } 
    }
`;

const Item = styled.li`
    margin: 30px 0;
    display: flex;
    align-items: flex-start;
    
        ::before {
            content: '';
            display: block;
            width: 15px;
            height: 15px;
            background-color: #2d2d2d;
            margin-right: 10px;
        }        
`;

