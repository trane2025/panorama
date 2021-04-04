import styled from 'styled-components';

function TitleAdvantages({ colorTitle = '#272727', colorNumber = '#272727', children }) {
    return (
        <Title
            colorNumber={colorNumber}
            colorTitle={colorTitle}>
            {children}
        </Title>
    )
}

export default TitleAdvantages


const Title = styled.h2`
    color: ${({ colorTitle }) => colorTitle};
    margin-bottom: 5px;

    span {
        color: ${({ colorNumber }) => colorNumber};
        font-size: 58px;
    }
`;