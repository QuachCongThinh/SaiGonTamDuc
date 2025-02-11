import "../styles/Reset.scss";
import Slider from "react-slick";
import "../styles/Video.scss";
import videoSrc1 from "../assets/map.mp4";
import videoSrc2 from "../assets/YHCT.mp4";
import videoSrc3 from "../assets/FSave.com_Facebook_Media_007_1162426348652475v.mp4";
import videoSrc4 from "../assets/clip.mp4";
import videoSrc5 from "../assets/cn-cm.mp4";
const Map = () => {
  var settings = {
    dots: true,
    arrows: false,
  };
  return (
    <div className="map-container">
      <h1>Video</h1>
      <div className="clip">
        <div className="video-left">
          <video controls className="video">
            <source src={videoSrc1} type="video/mp4" />
          </video>
        </div>
        <div className="video-right">
          <Slider {...settings}>
            <video controls className="video">
              <source src={videoSrc2} type="video/mp4" />
            </video>
            <video controls className="video">
              <source src={videoSrc3} type="video/mp4" />
            </video>
            <video controls className="video">
              <source src={videoSrc4} type="video/mp4" />
            </video>
            <video controls className="video">
              <source src={videoSrc5} type="video/mp4" />
            </video>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Map;
