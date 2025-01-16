import "../styles/Reset.scss";
// import Slider from "react-slick";
import "../styles/Video.scss";
import videoSrc1 from "../assets/map.mp4";
// import videoSrc2 from "../assets/YHCT.mp4";
const Map = () => {
  // var settings = {
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   waitForAnimate: false,
  //   dots: false,
  //   speed: 1000,
  //   autoplay: true,
  //   autoplaySpeed: 3400,
  //   arrows: false,
  // };
  return (
    <div className="map">
      {/* <Slider {...settings}> */}
      <video width="600" controls className="video">
        <source src={videoSrc1} type="video/mp4" />
      </video>
      {/* </Slider> */}
    </div>
  );
};
export default Map;
