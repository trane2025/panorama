import styled from 'styled-components';

function Button({ children, onClick, description, width, animate = true }) {
    return (
        <Container>
            <BackGround
                width={width}
                onClick={onClick}
                animate={animate}>

                {children}
            </BackGround>
            {description && <Description>
                <i>
                    <svg
                        width="89px" height="30px">
                        <path fillRule="evenodd" stroke="rgb(41, 41, 41)" strokeWidth="2px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                            d="M2.032,17.184 C2.032,17.184 47.371,44.922 85.202,1.038 " />
                    </svg>
                </i>
                <p>{description}</p>
            </Description>}
        </Container>

    )
}

export default Button;



const Description = styled.div`
    user-select: none;
    position: absolute;
    display: flex;
    right: -280px;
    bottom: -45px;

    p {
        max-width: 240px;
        font-weight: 800;
        position: relative;
        top: -50px;
        left: -10px;
    }
`;

const Container = styled.div`
    position: relative;
    width: fit-content;
`;

const BackGround = styled.button`
    background-image: linear-gradient( 90deg, rgb(235,226,9) 0%, rgb(255,245,0) 100%);
    box-shadow: 0px 6px 8px -3px rgb(183 183 183 / 91%);
    border: none;
    width: ${({ width }) => width ? width : 'none'};
    padding: 20px 50px;
    text-shadow: 0.07px 0.998px 0px rgba(255, 255, 255, 0.46);
    color: rgb(31, 31, 31);
    font-size: 16px;
    font-weight: 900;
    cursor: pointer;
    transition: ease 0.3s;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;


    :hover {
        box-shadow: none;
    }

    :active {
        background-image: linear-gradient( 90deg, #ebd409 0%, rgb(255,245,0) 100%);
    }
 

    :after {
        content: "";
        display: ${({ animate }) => animate ? 'block' : 'none'};
        width: 30px;
        height: 300px;
        margin-left: 60px;
        background: #fff;
        background: -moz-linear-gradient(top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.7) 100%);
        background: -webkit-linear-gradient(top, rgba(255,255,255,0.7) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0.7) 100%);
        background: linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0.7) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b3ffffff', endColorstr='#b3ffffff',GradientType=0 );
        position: absolute;
        left: -40px;
        top: -150px;
        z-index: 1;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transition: all 0.1s;
        transition: all 0.1s;
        animation-name: ${({ animate }) => animate ? 'slideme' : 'none'};
        
        -webkit-animation-duration: 3s;
        animation-duration: 3s;
        -webkit-animation-delay: 0.05s;
        animation-delay: 0.05s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }
 
    @keyframes slideme {
        0% { left: -30px; margin-left: 0px; }
        30% { left: 110%; margin-left: 80px; }
        100% { left: 110%; margin-left: 80px; } 
    }

`;
