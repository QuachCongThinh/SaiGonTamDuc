// import React, { useEffect, useState } from "react";
import "../styles/Reset.scss";
import "../styles/Footer.scss";
import logoFooter from "../assets/Logo.png";
import map from "../assets/location-pin.png";
import phone from "../assets/call.png";
import email from "../assets/email.png";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tik-tok.png";
// import viewer from "../assets/view.png";

const Footer = () => {
  // const [viewCount, setViewCount] = useState(0);

  // useEffect(() => {
  //   const updateViewCount = async () => {
  //     try {
  //       await fetch("http://localhost:5000/api/increment-view", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       const fetchResponse = await fetch(
  //         "http://localhost:5000/api/view-count"
  //       );
  //       const fetchData = await fetchResponse.json();

  //       setViewCount(fetchData.viewCount);
  //     } catch (error) {
  //       console.error("Failed to update view count:", error);
  //     }
  //   };

  //   updateViewCount();
  // }, []);

  return (
    <div className="footer">
      <div className="logo">
        <img src={logoFooter} alt="Logo Footer" />
      </div>
      <div className="contact">
        <div className="info-contact">
          <h2>THÔNG TIN LIÊN HỆ</h2>
          <div className="icon-contact">
            <img src={map} alt="mapIcon" />
            <p>
              Địa chỉ: 153A, Đường Nguyễn Tất Thành, Ấp Bà Điều, Xã Lý Văn Lâm,
              TP. Cà Mau
            </p>
          </div>
          <div className="icon-contact">
            <img src={phone} alt="phoneIcon" />
            <p>0914.066.178</p>
          </div>
          <div className="icon-contact">
            <img src={email} alt="emailIcon" />
            <p>pkdksgtd@gmail.com</p>
          </div>
        </div>
        <div className="social-media">
          <h2>KẾT NỐI MẠNG XÃ HỘI</h2>
          <div className="social">
            <a
              className="facebook"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61560007596752"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              className="tiktok"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.tiktok.com/@pk.dk.sgtd?lang=en"
            >
              <img src={tiktok} alt="Tiktok" />
            </a>
          </div>
        </div>
      </div>
      <div className="service-difference">
        <h2>DỊCH VỤ KHÁC TẠI PHÒNG KHÁM</h2>
        <ul>
          <li>Khám, chữa bệnh</li>
          <li>Khám sức khỏe</li>
          <li>Chuẩn đoán hình ảnh</li>
          <li>Y học cổ truyền - Vật lý trị liệu</li>
        </ul>
        {/* <div className="viewer">
          <img src={viewer} alt="Viewer" />
          <p>Lượt truy cập: {viewCount}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
