import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CheckBoxImage from './CheckBoxImage';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Slider({ items, setCheckBox }) {
    return (
        <WraperSlides>

            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                slidesPerGroup={3}
                navigation={{
                    nextEl: `${ArrowNext}`,
                    prevEl: `${ArrowPrev}`
                }}
                scrollbar={false}
                loop={false}

                breakpoints={
                    {
                        320: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 15
                        },

                        670: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 15
                        },
                        970: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 15
                        },
                        1200: {
                            slidesPerView: 4,
                            slidesPerGroup: 3,
                            spaceBetween: 15
                        }
                    }
                }
            >

                {Object.values(items).map(checkbox => {

                    return (
                        <SwiperSlide key={checkbox.id}>
                            <CheckBoxImage checkbox={checkbox} change={setCheckBox} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <ArrowNext>
                <svg
                    width="30px" height="40px">
                    <path fillRule="evenodd" strokeWidth="6px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                        d="M7.621,3.006 L23.016,18.504 L7.621,34.002 " />
                </svg>
            </ArrowNext>
            <ArrowPrev>
                <svg

                    width="30px" height="40px">
                    <path fillRule="evenodd" strokeWidth="6px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                        d="M18.680,33.994 L3.016,18.496 L18.680,2.998 " />
                </svg>
            </ArrowPrev>
        </WraperSlides>

    )
}

export default Slider;

const ArrowNext = styled.i`
    position: absolute;
    z-index: 5;
    right: -60px;
    top: 85px;
    cursor: pointer;
    user-select: none;

    svg {
        stroke:rgb(45, 45, 45);
    }
`;

const ArrowPrev = styled.i`
    position: absolute;
    z-index: 5;
    left: -60px;
    top: 85px;
    cursor: pointer;
    user-select: none;

    svg {
        stroke:rgb(45, 45, 45);
    }
`;

const WraperSlides = styled.div`
    animation: fade .8s ;
    display: flex;
    align-items: center;
    margin-top: 15px;
    width: 970px;
    margin-left: -15px;
    margin-right: -15px;
    min-width: 0;
    min-height: 0;
    position: relative;

    .swiper-button-disabled {
       
        svg {
            stroke: rgb(161, 161, 161);
        }
        
    }

    @media (max-width: 1200px) {
        width: 740px;
    }

    @media (max-width: 970px) {
        width: 500px;
    }

    @media (max-width: 670px) {
        width: 250px;
    }
`;


