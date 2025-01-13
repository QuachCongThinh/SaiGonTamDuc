import React from "react";
import "../styles/Albums.scss";
import Slider from "react-slick";
import img1 from "../assets/all.png";
import img2 from "../assets/BGD.jpeg";
import img3 from "../assets/all1.jpg";
import img4 from "../assets/bs.png";
const Albums = () => {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    fade: true,
    dots: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3400,
    arrows: false,
  };

  return (
    <div className="albums">
      <div className="titleAlbums">
        <h1>Hình ảnh Bác sĩ và nhân viên phòng khám</h1>
      </div>
      <div className="slideImage">
        <div className="image">
          <Slider {...settings}>
            <img src={img1} alt="Slider" />
            <img src={img2} alt="Slider" />
            <img src={img3} alt="Slider" />
            <img src={img4} alt="Slider" />
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Albums;
