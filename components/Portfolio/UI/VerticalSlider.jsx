import React from 'react'
import styled from 'styled-components';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel]);

// const swiper = new Swiper('.swiper-container', {
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         draggable: true,
//     },
// });



function VerticalSlider({ images }) {



    return (

        <ListSlider className='thumbs-vertical'>
            <div className="swiper-scrollbar">
                <div className="swiper-scrollbar-drag" />
            </div>
            <Swiper
                slidesPerView={4}
                slidesPerGroup={4}

                spaceBetween={15}

                height={540}

                direction='vertical'

                loop={false}

                mousewheel={{
                    sensitivity: 5,
                    // invert: true,
                    // eventsTarget: ListSlider
                }}

                scrollbar={{
                    draggable: true, snapOnRelease: false, dragSize: 60, el: '.swiper-scrollbar'
                }}

                onSwiper={(swiper) => {
                    swiper.scrollbar.setTranslate(540);
                    console.log(swiper);
                }}
                onSlideChange={() => console.log('slide change')}
            >

                {images.map((image, i) => {
                    return (
                        <SwiperSlide key={image.url + i + 'thumbs'}>
                            <ItemSlider>
                                <img src={image.url} alt="thumbs" />
                            </ItemSlider>
                        </SwiperSlide>
                    )
                })}





            </Swiper>

        </ListSlider >

    )
}

export default VerticalSlider;



const ListSlider = styled.ul`
    position: relative;
    /* z-index: 2; */
    height: 540px;
    overflow: hidden;

    .swiper-scrollbar {
        position: absolute;
        height: 540px;
        z-index: 10;
        cursor: pointer;
        right: 5px;
        width: 3px;
        background-color: #c1c1c1;


            .swiper-scrollbar-drag {
            background-color: #303030;
            width: 9px;
            border-radius: 0;
            left: -3px;
        }
    }


    

    li:last-child {
        margin-bottom: 0;
    }
`;

const ItemSlider = styled.li`
    background-color: red;
    width: 180px;
    height: 123px;
    margin-right: 40px;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 100%;
    }
`;
