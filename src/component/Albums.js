import React, { useRef } from "react";
import "../styles/Albums.scss";
import Slider from "react-slick";
import img1 from "../assets/all_4_11zon.webp";
import img2 from "../assets/BGD_9_11zon.webp";
import img3 from "../assets/all1_5_11zon.webp";
import img4 from "../assets/bs_12_11zon.webp";
import img5 from "../assets/1_1_11zon.webp";
import img6 from "../assets/z6216541803096_efc242297120caf5cb771f6c22374a43_50_11zon.webp";
import img7 from "../assets/tt_44_11zon.webp";
import img8 from "../assets/ksk_31_11zon.webp";
const Albums = () => {
  const sliderRef = useRef(null);
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    draggable: false,
    swipe: false,
  };

  return (
    <div className="albums">
      <div className="titleAlbums">
        <h1>Hình ảnh</h1>
      </div>
      <div className="slideImage">
        <div className="frame">
          <div className="image">
            <Slider ref={sliderRef} {...settings}>
              {[img1, img2, img3, img4, img5, img6, img7, img8].map(
                (img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Slider"
                    onClick={() => sliderRef.current.slickNext()}
                    style={{ cursor: "pointer" }}
                  />
                )
              )}
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
