import React from 'react'
import Slider  from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ImageSwiper extends React.Component {

    render() {
        const settings = {
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: dots => (
                <div
                    style={{
                        borderRadius: "10px",
                        padding: "10px",
                        bottom: 0,
                    }}
                >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),

        }


        return (
            <div style={{overflow: 'hidden'}}>
                <Slider {...settings}>
                    <div >
                        <img src="https://yanxuan.nosdn.127.net/432e9722ae63c5a2136c6454febaa567.jpg?imageView&thumbnail=750x0&quality=75" alt=""/>
                    </div>
                    <div>
                        <img src="https://yanxuan.nosdn.127.net/432e9722ae63c5a2136c6454febaa567.jpg?imageView&thumbnail=750x0&quality=75" alt=""/>
                    </div>
                    <div>
                        <img src="https://yanxuan.nosdn.127.net/80fb8a9932c03c305723ab308045af02.jpg?imageView&thumbnail=750x0&quality=75" alt=""/>
                    </div>

                </Slider>
            </div>

        )
    }
}

export default ImageSwiper