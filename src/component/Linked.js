import React from "react";
import "../styles/Linked.scss";
import "../styles/Reset.scss";
import bhxh from "../assets/bhxh_10_11zon.webp";
import soyt from "../assets/head_16_11zon.webp";
const Linked = () => {
  return (
    <div className="linked">
      <h2>Website Liên Kết</h2>
      <div className="logo-link">
        <a
          className="bhxh"
          href="https://baohiemxahoi.gov.vn/Pages/default.aspx"
          target="_blank"
          rel="noreferrer"
        >
          <img className="imgbhxh" src={bhxh} alt="logobhxh" />
        </a>
        <a
          className="soyte"
          href="https://soyte.camau.gov.vn/wps/portal"
          target="_blank"
          rel="noreferrer"
        >
          <img className="imgsoyte" src={soyt} alt="logosoyt" />
        </a>
      </div>
    </div>
  );
};
export default Linked;
