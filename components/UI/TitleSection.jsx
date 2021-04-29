import styled from "styled-components";


function TitleSection({ children, colorTitle, colorAtantion }) {
    return (
        <Title colorTitle={colorTitle} colorAtantion={colorAtantion}>
            {children}
        </Title>
    )
}

export default TitleSection;

const Title = styled.h2`
    color: ${({ colorTitle }) => colorTitle ? colorTitle : '#1e1e1e'};
    margin-bottom: 40px;
    
    span {
        color: ${({ colorAtantion }) => colorAtantion ? colorAtantion : '#1e1e1e'};
    }
`;
