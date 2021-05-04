import styled from 'styled-components';
import ButtonLink from '../UI/ButtonLink';
import Container from '../UI/Container';
import { useRouter } from 'next/router';

function Banner() {
    const { pathname } = useRouter();

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
                    <ButtonLink link={`${pathname}/#quiz`}>
                        Узнать стоимость
                    </ButtonLink>
                </WraperButton>
            </Container>
        </BackGround>
    )
}

export default Banner;

const WraperButton = styled.div`
    position: relative;
    z-index: 2;
`;

const BackGround = styled.section`
    background: url('/images/plastikWindow/banner.jpg') no-repeat center center;
    padding: 109px 0;

    h1 {
        margin-bottom: 20px;
        text-transform: uppercase;
    }

    @media (max-width: 1200px){
        background-size: cover;
        padding: 80px 0; 
    }

    @media (max-width: 970px){
        padding: 60px 0;
    }
    

    @media (max-width: 760px){
        
        padding: 40px 0;
        background: #fdfaf6;
        position: relative;
        padding-bottom: 200px;

        h1 {
            margin-bottom: 20px;
        }

        ::after {
            z-index: 1;
            position: absolute;
            bottom: 0;
            content: '';
            display: block;
            background: url('/images/plastikWindow/banner.jpg') no-repeat center center;
            width: 100%;
            height: 300px;
            background-size: cover;
        }
    }

    @media (max-width: 480px){
        ::after {
            z-index: 1;
            position: absolute;
            bottom: 0;
            content: '';
            display: block;
            background: url('/images/plastikWindow/banner.jpg') no-repeat center right;
            width: 100%;
            height: 230px;
            background-size: cover;
        }
    }
`;



const List = styled.ul`
    position: relative;
    z-index: 2;
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

    @media (max-width: 760px){
        p {
            font-size: 16px;
            line-height: initial;
        }
        
    }

    @media (max-width: 480px){
        p {
            font-size: 14px;
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
    
    @media (max-width: 480px){
        margin: 20px 0;
    }           
`;

