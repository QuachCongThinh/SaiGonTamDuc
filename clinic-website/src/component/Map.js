import "../styles/Reset.scss";
import "../styles/Map.scss";
import videoSrc from "../assets/map.mp4";
const Map = () => {
  return (
    <div className="map">
      <video width="600" controls className="video">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};
export default Map;
