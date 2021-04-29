import Container from '../UI/Container'
import styled from 'styled-components';



function WhereUseAluminim({ children, obj, paddingBottom }) {

    return (

        <Section colorBack={obj.colorBack} paddingBottom={paddingBottom}>
            <Container>
                {children}
                <List>
                    {obj.items.map(item => {
                        return (
                            <Item
                                key={item.title}
                                colorItemBack={item.colorItemBack}>
                                <h4>{item.title}</h4>
                                <img src={item.image} alt="whereUseAluminim" />
                            </Item>
                        )
                    })}

                </List>
            </Container>
        </Section>
    )
}

export default WhereUseAluminim;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
`;

const Item = styled.li`
    background-color: ${({ colorItemBack }) => colorItemBack ? colorItemBack : 'white'};
    width: calc(50% - 30px);
    margin-top: 30px;
    margin-left: 15px;
    margin-right: 15px;
    padding-top: 30px;
    height: 320px;
    position: relative;

    h4 {
        width: 450px;
        min-width: 450px;
        height: 65px;
        display: flex;
        align-items: center;
        background-color: #f7ed04;
        font-size: 20px;
        text-transform: uppercase;
        padding-left: 20px;
        font-weight: 900;
    }

    img {
        position: absolute;
        right: 0;
        bottom: 0;
    }
`;





const Section = styled.section`
    padding-top: 100px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom ? paddingBottom : 0};
    background-color: ${({ colorBack }) => colorBack ? colorBack : '#fef0d4'};
`;




