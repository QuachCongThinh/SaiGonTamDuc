import logo from "../assets/Logo.png";
import "../styles/Loading.scss";
const Loading = ({ fadeOut }) => {
  return (
    <div className={`loading ${fadeOut ? "fade-out" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-loading" />
      </div>
      <div className="text-container">
        <span className="loading-text">Sài Gòn Tâm Đức</span>
      </div>
    </div>
  );
};
export default Loading;
