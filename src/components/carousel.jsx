import React, { Component } from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

const CarouselBar = (props) => {
    return (
      <div>
        <Slider {...settings}>
            {props.contentSlider.map((item,index) => {
                return (
                    <img src={item.images} alt={`slide-${index+1}`}/>

                )
            })}
        </Slider>
      </div>
    );
  }

export default CarouselBar