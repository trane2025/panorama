import Link from "next/link";
import styled from "styled-components";


function OfferItem({ title, description, number, image, colorBack, colorNumber, colorText, href }) {
    return (


        <ItemOffer backColor={colorBack}>
            <Link href={href}>
                <a >
                    <NumberOffer numberColor={colorNumber}>{number}</NumberOffer>
                    <WraperOfferText colorText={colorText}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </WraperOfferText>
                    <WraperImage>
                        <img src={image} alt="offerImage" />
                    </WraperImage>
                </a>
            </Link>
        </ItemOffer>


    )
}

export default OfferItem;


const WraperOfferText = styled.div`
    
    h3 {
        text-transform: uppercase;
        font-weight: 900;
        color: ${({ colorText }) => colorText ? colorText : '#181a26'};
    }

    p {
        margin-top: 10px;
        max-width: 270px;
        line-height: 20px;
        font-weight: 400;
        color: ${({ colorText }) => colorText ? colorText : '#181a26'};
    } 
`;



const WraperImage = styled.div`
    padding-right: 20px;
`;

const NumberOffer = styled.h3`
    position: absolute;
    font-size: 145px;
    bottom: -27px;
    color: ${({ numberColor }) => numberColor ? numberColor : '#e0e0e0'};
`;

const ItemOffer = styled.li`
    position: relative;
    margin: 15px;
    display: flex;
    background-color: ${({ backColor }) => backColor ? backColor : 'white'};
    padding: 25px;
    width: calc(50% - 30px);

    a {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;