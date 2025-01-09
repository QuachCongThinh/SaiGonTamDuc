import React from "react";
import "../styles/Header.scss";
import "../styles/Reset.scss";
import Logo from "../assets/Logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="infoHeader">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <p>
            Hotline khẩn cấp <br />
            <span>
              <a href="tel:0914066178">0914.066.178</a>
            </span>
          </p>
          <div className="onlineConsultation">
            Tư vấn trực tuyến <br />
            <span>
              <a href="mailto:pkdksgtd@gmail.com">pkdksgtd@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
