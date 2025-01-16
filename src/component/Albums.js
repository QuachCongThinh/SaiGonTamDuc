import React from "react";
import "../styles/Albums.scss";
import Slider from "react-slick";
import img1 from "../assets/all.png";
import img2 from "../assets/BGD.jpeg";
import img3 from "../assets/all1.jpg";
import img4 from "../assets/bs.png";
import img5 from "../assets/1.png";
import img6 from "../assets/z6216541803096_efc242297120caf5cb771f6c22374a43.png";
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
        <h1>Hình ảnh</h1>
      </div>
      <div className="slideImage">
        <div className="frame">
          <div className="image">
            <Slider {...settings}>
              <img src={img1} alt="Slider" />
              <img src={img2} alt="Slider" />
              <img src={img3} alt="Slider" />
              <img src={img4} alt="Slider" />
              <img src={img5} alt="Slider" />
              <img src={img6} alt="Slider" />
            </Slider>
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1736946528">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default Albums;
