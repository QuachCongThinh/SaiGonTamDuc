import "../styles/Comment.scss";
import "../styles/Reset.scss";
import user1 from "../assets/Untitled-1.png";
import user2 from "../assets/unnamed.png";
import user3 from "../assets/unnamed (1).png";
import user4 from "../assets/unnamed (2).png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import note1 from "../assets/note.png";
import note2 from "../assets/note.png";
const Comment = () => {
  var settings = {
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const users = [
    {
      img: user1,
      name: "Canh Nguyen",
      rate: 5,
      time: "11 tháng trước",
      text: "Nhân viên, bác sĩ ở đây rất ân cần và chu đáo",
    },
    {
      img: user2,
      name: "Kan Osnohssiwl",
      rate: 5,
      time: "10 tháng trước",
      text: "Tận tình khám chất lượng",
    },
    {
      img: user3,
      name: "Hoang Hai Pham",
      rate: 5,
      time: "1 năm trước",
      text: "Chất lượng, hiệu quả",
    },
    {
      img: user4,
      name: "Khanh Duy",
      rate: 5,
      time: "1 năm trước",
      text: "Nhân viên phục vụ tận tình, chu đáo. Bác sĩ chuyên môn cao",
    },
  ];
  return (
    <div className="comment">
      <p>Xem họ nói gì?</p>
      <h2>Khách hàng của chúng tôi</h2>
      <div className="note">
        <img src={note1} alt="note1" className="note1" />
        <img src={note2} alt="note2" className="note2" />
      </div>
      <div className="frame">
        <Slider {...settings}>
          {users.map((user, index) => (
            <div className="text" key={index}>
              <div className="avt">
                <img src={user.img} alt={`user${index + 1}`} />
              </div>
              <div className="name">{user.name}</div>
              <div className="rate_time">
                <div className="rate">
                  {Array(user.rate)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <div className="time-comment">{user.time}</div>
              </div>
              <div className="text-comment">{user.text}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Comment;
