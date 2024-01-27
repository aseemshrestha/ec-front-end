import React from 'react';
import Data from '../../data/about/about-us-two.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const AboutSlider = () => {
   function Arrow(props) {
      let className = props.type === "next" ? "nextArrow las la-angle-right" : "prevArrow las la-angle-left";
      return (
         <i className={className} onClick={props.onClick}></i>
      );
   }

   const settings = {
      dots: false,
      arrows: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      pauseOnHover: true,
      nextArrow: <Arrow type="next" />,
      prevArrow: <Arrow type="prev" />
   };

   return (
      <Slider {...settings}>
         {
            Data.dataList.map((data, i) => (
               <div className="slider-item" key={i}>
                  <img src={process.env.PUBLIC_URL + data.imgUrl} alt="" className="img-fluid mx-auto" />
               </div>
            ))
         }
      </Slider>
   );
}

export default AboutSlider;
