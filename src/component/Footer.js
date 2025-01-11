import "../styles/Reset.scss";
import "../styles/Footer.scss";
import logoFooter from "../assets/Logo.png";
import map from "../assets/location-pin.png";
import phone from "../assets/call.png";
import email from "../assets/email.png";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tik-tok.png";

const Footer = () => {
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
      </div>
      <div className="fanpage">
        <iframe
          title="Facebook Fanpage"
          src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/profile.php?id=61560007596752&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
