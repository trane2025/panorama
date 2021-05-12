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
    overflow: hidden;

    h4 {
        width: 70%;
        height: 65px;
        display: flex;
        align-items: center;
        background-color: #f7ed04;
        text-transform: uppercase;
        font-size: 20px;
        padding: 20px;
        font-weight: 900;
    }

    img {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 70%;
    }

    @media (max-width: 1200px) {
       h4 {
        font-size: 16px;
       }
       height : 300px;
    }

    @media (max-width: 960px) {
        height : 270px;
        h4 {
            height: 55px;
            width: 85%;
        }
        img {
            width: 80%;
        } 
    }

    @media (max-width: 760px) {
        width: calc(100% - 30px);

        h4 {
            height: 55px;
            width: 300px;
        }

        img {
            width: auto;
            height: 200px;
        }
    }

    @media (max-width: 480px) {
        height: 250px;
        margin-top: 15px;
        h4 {
            height: 55px;
            width: 290px;
            font-size: 14px;
        }

        img {
            width: auto;
            height: 150px;
        }
    }
`;





const Section = styled.section`
    padding-top: 100px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom ? paddingBottom + 'px' : 0};
    background-color: ${({ colorBack }) => colorBack ? colorBack : '#fef0d4'};
    position: relative;
    z-index: 3;

    @media (max-width: 1200px) {
        padding-top: 80px;
        padding-bottom: ${({ paddingBottom }) => paddingBottom ? +paddingBottom - 20 + 'px' : 0};
    }

    @media (max-width: 960px) {
        padding-top: 60px;
        padding-bottom: ${({ paddingBottom }) => paddingBottom ? +paddingBottom - 40 + 'px' : 0};
    }

    @media (max-width: 670px) {
        padding-top: 40px;
        padding-bottom: ${({ paddingBottom }) => paddingBottom ? +paddingBottom - 60 + 'px' : 0};
    }
`;




