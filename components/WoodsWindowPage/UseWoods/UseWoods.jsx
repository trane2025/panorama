import React from 'react'
import styled from 'styled-components';
import Container from '../../UI/Container';
import WoodsItem from './UI/WoodsItem';

function UseWoods() {
    return (
        <Section>

            <Container>
                <h2>Мы используем <span className='red-text'>3 породы</span> дерева</h2>
                <ListWoods>
                    <ImegeList1 src="/images/woodsWindow/list1.png" alt="list" />
                    <ImegeList2 src="/images/woodsWindow/list2.png" alt="list" />
                    <WoodsItem
                        image="/images/woodsWindow/woods1.png">
                        <h3>Сосна</h3>
                        <p>Окна из сосны из-за невысокой плотности древесины можно назвать естественным кондиционером, который способен обеспечить комфортный уровень воздухообмена в Вашем доме</p>
                    </WoodsItem>
                    <WoodsItem
                        image="/images/woodsWindow/woods2.png"
                        imageTop='-50px'
                        hidden
                        backColor='#313448'
                        textColor='white'>
                        <h3>Лиственница</h3>
                        <p>Окна из лиственницы обладают высокой плотностью. Эта порода дерева не боится влаги. Окна из лиственницы легко переносят перепады температур, стойки к гниению и к грибку за счёт природного антисептика в своём составе. </p>
                    </WoodsItem>
                    <WoodsItem
                        image="/images/woodsWindow/woods3.png"
                        imageTop='-50px'>
                        <h3>Дуб</h3>
                        <p>Окна из дуба - это прекрасное решение для вашего дома. Древесина дуба содержит дубильные вещества, которые значительно продляют срок службы окон, делают окна устойчивыми к биологическому воздействию, влаге и истиранию</p>
                    </WoodsItem>
                </ListWoods>
            </Container>
        </Section>
    )
}

export default UseWoods;

const ImegeList1 = styled.img`
    position: absolute;
    left: -150px;
    top: -100px;
`;
const ImegeList2 = styled.img`
    position: absolute;
    right: -150px;
    top: -100px;
`;

const Section = styled.section`
    background: url('/images/woodsWindow/woodsUseBg.jpg') top center no-repeat;
    background-color: #fef0d4;
    padding: 100px 0;

    h2 {
        text-align: center;
    }

`;

const ListWoods = styled.ul`
    position: relative;
    display: flex;
    margin: 0 -15px;
    margin-top: 80px;
`;




