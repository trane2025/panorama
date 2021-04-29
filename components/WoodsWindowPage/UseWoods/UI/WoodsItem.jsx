import styled from 'styled-components';

function WoodsItem({ children, image, imageTop, hidden, backColor, textColor }) {
    return (
        <ItemWoods backColor={backColor} textColor={textColor}>
            <WraperImage imageTop={imageTop} hidden={hidden}>
                <img src={image} alt="woods" />
            </WraperImage>
            {children}
        </ItemWoods>
    )
}

export default WoodsItem;

const ItemWoods = styled.li`
    position: relative;
    margin: 0 15px;
    background-color: ${({ backColor }) => backColor ? backColor : 'white'};
    box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0.25);
    padding: 0 35px;
    padding-bottom: 40px;
    width: calc(33% - 30px);

    h3 {
        font-weight: 900;
        color: ${({ textColor }) => textColor ? textColor : '#1e1e1e'}
    }

    p {
        margin-top: 15px;
        line-height: 22px;
        color: ${({ textColor }) => textColor ? textColor : '#1e1e1e'}
    }
`;

const WraperImage = styled.div`
    height: 180px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: ${({ hidden }) => hidden ? 'hidden' : 'inherit'};

    img {
        position: absolute;
        top: ${({ imageTop }) => imageTop ? imageTop : 0};
    }
`;
