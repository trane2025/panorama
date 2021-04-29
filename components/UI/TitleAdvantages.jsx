import styled from 'styled-components';

function TitleAdvantages({ colorTitle = '#272727', colorNumber = '#272727', children, fontWeight, fontSize, fontSizeNumber }) {
    return (
        <Title
            fontSizeNumber={fontSizeNumber}
            fontSize={fontSize}
            fontWeight={fontWeight}
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
    font-weight:${({ fontWeight }) => fontWeight ? fontWeight : '900'};
    font-size:${({ fontSize }) => fontSize ? fontSize : '36px'};

    span {
        color: ${({ colorNumber }) => colorNumber};
        font-size: ${({ fontSizeNumber }) => fontSizeNumber ? fontSizeNumber : '58px'};
    }
`;