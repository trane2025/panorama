import styled from 'styled-components';

function ButtonWraper({ children }) {
    return (
        <WraperButton>
            {children}
        </WraperButton>
    )
}

export default ButtonWraper;

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
