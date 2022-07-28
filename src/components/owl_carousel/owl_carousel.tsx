import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./owl-carousel.scss"
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            rtl: true,
        };
        return (
            <div className={"is-block"}>
                <div className={"text-center p-6"}> Owl Carousel </div>
                <Slider {...settings} className={"container"}>
                    <div className={"size bg-sky-500/100"}>
                        <div className={"text-center"}>slider_1</div>
                    </div>
                    <div className={"size bg-sky-500/75"}>
                        <div className={"text-center"}>slider_2</div>
                    </div>
                    <div className={"size bg-sky-500/50"}>
                        <div className={"text-center"}>slider_3</div>
                    </div>
                    <div className={"size bg-sky-500/100"}>
                        <div className={"text-center"}>slider_4</div>
                    </div>
                    <div className={"size bg-sky-500/75"}>
                        <div className={"text-center"}>slider_5</div>
                    </div>
                    <div className={"size bg-sky-500/50"}>
                        <div className={"text-center"}>slider_6</div>
                    </div>
                </Slider>
            </div>
        );
    }
}
