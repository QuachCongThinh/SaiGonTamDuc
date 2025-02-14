import React from "react";
import "../styles/News.scss";
import Slider from "react-slick";
import new1 from "../assets/new1_35_11zon.webp";
import new2 from "../assets/new2_36_11zon.webp";
import new3 from "../assets/new3_37_11zon.webp";
import new4 from "../assets/new4_38_11zon.webp";

const News = () => {
  var settings = {
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="news">
      <h1>Tin tức cập nhật mới nhất</h1>
      <div className="box-news">
        <Slider {...settings}>
          <div className="box-wrapper">
            <div className="box-item">
              <div className="thumb-new">
                <img src={new1} alt="New" />
              </div>
              <div className="text-new">
                <h2>TẠI SAO PHỤ NỮ NÊN TẦM SOÁT UNG THƯ TOÀN DIỆN?</h2>
                <p>
                  "Quan niệm tầm soát ung thư toàn diện không thực sự quá cần
                  thiết là không đúng. Sự chủ quan từ mỗi cá nhân có thể tạo
                  điều kiện cho mầm mống bệnh phát triển, bỏ qua giai đoạn vàng
                  điều trị và từ đó, gây nên nhiều nguy hại cho sức khỏe về sau
                  này"
                </p>
              </div>
              <a
                target="_blank" rel="noreferrer"
                href="https://www.facebook.com/permalink.php?story_fbid=pfbid08TexGULJf7Me6GRPiR7A826fdHB921NynTiec54TBfjRj5xcRiZFvErPyXs9oz9ul&id=61560007596752"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="overlay">
                  <span className="overlay-text">Xem chi tiết</span>
                </div>
              </a>
            </div>
          </div>
          <div className="box-wrapper">
            <div className="box-item">
              <div className="thumb-new">
                <img src={new2} alt="New" />
              </div>
              <div className="text-new">
                <h2>KIỂM TRA SỨC KHỎE CHO TRẺ NGAY HÔM NAY!</h2>
                <p>
                  "📢📢Hiện nay Dịch Cúm đang diễn ra rất phức tạp phụ huynh cần
                  lưu ý quan sát theo dõi trẻ thường xuyên và mang theo khẩu
                  trang khi cho trẻ ra đường. Hạn chế cho con tụ tập đông người.
                  "
                </p>
              </div>
              <a
                target="_blank" rel="noreferrer"
                href="https://www.facebook.com/permalink.php?story_fbid=pfbid0ZKtDauN2hrPUs88YEPLBXSqpb674mo5mMSxVwgXaJyg31Ycg9gbAond6uUAF31vJl&id=61560007596752"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="overlay">
                  <span className="overlay-text">Xem chi tiết</span>
                </div>
              </a>
            </div>
          </div>
          <div className="box-wrapper">
            <div className="box-item">
              <div className="thumb-new">
                <img src={new3} alt="New" />
              </div>
              <div className="text-new">
                <h2>
                  Khám chữa bệnh cùng TIẾN SĨ, THẠC SĨ, BÁC SĨ TP HỒ CHÍ MINH
                </h2>
                <p>
                  "🏥 Đánh bay đau cơ-xương-khớp – Hiệu quả ngay tại Phòng Khám
                  Đa Khoa Sài Gòn Tâm Đức💪. "
                </p>
              </div>
              <a
                target="_blank" rel="noreferrer"
                href="https://www.facebook.com/permalink.php?story_fbid=pfbid0ZKtDauN2hrPUs88YEPLBXSqpb674mo5mMSxVwgXaJyg31Ycg9gbAond6uUAF31vJl&id=61560007596752"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="overlay">
                  <span className="overlay-text">Xem chi tiết</span>
                </div>
              </a>
            </div>
          </div>
          <div className="box-wrapper">
            <div className="box-item">
              <div className="thumb-new">
                <img src={new4} alt="New" />
              </div>
              <div className="text-new">
                <h2>
                  🔔🔔 THÔNG BÁO 🔔🔔 ✅thực hiện chính sách khám chữa bệnh
                  THÔNG TUYẾN BHYT trên toàn quốc
                </h2>
                <p>
                  "Tất cả các thẻ BHYT dù đăng ký ban đầu tại: Bệnh viện tuyến
                  Tỉnh, huyện, trạm y tế trong tỉnh như: Bệnh viện Cà Mau, Bệnh
                  viện Sản Nhi, Ban bảo vệ sức khoẻ Tỉnh Uỷ... hay tất cả tỉnh
                  thành trên khắp cả nước đều được áp dụng khám chữa bệnh BHYT
                  tại Phòng khám đa khoa Sài Gòn Tâm Đức."
                </p>
              </div>
              <a
                target="_blank" rel="noreferrer"
                href="https://www.facebook.com/permalink.php?story_fbid=pfbid02J96woAXVyNv33X5A4ao3PJCs8vvsikR831MV3uigrq9mH8KbshqtuMPqPVag6P4Xl&id=61560007596752"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="overlay">
                  <span className="overlay-text">Xem chi tiết</span>
                </div>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default News;
