import React, { useEffect, useRef } from "react";
import "../styles/Reset.scss";
import "../styles/Workflow.scss";
import bgwl from "../assets/blue-abstract-gradient-wave-wallpaper.webp";
import c1 from "../assets/b4.jpg.png";
import c2 from "../assets/b2.jpg.png";
import c3 from "../assets/z6229764593682_b98a59423c5baae833701f945ce56924.jpg";
import c4 from "../assets/b1.jpg.png";
import cross from "../assets/61792.png";

const Workflow = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 200);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const currentBoxes = boxesRef.current;

    currentBoxes.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => {
      currentBoxes.forEach((box) => {
        if (box) observer.unobserve(box);
      });
    };
  }, []);

  return (
    <div className="workflow">
      <div className="thumb">
        <img src={bgwl} alt="Background wallpaper" loading="lazy" />
        <img src={cross} className="cross1" alt="cross" />
        <img src={cross} className="cross2" alt="cross" />
      </div>
      <div className="content-workflow">
        <h1>Quy Trình Làm Việc Hiệu Quả</h1>
        <div className="box-row">
          {[c1, c2, c3, c4].map((image, index) => (
            <div
              className="box-circle"
              key={index}
              ref={(el) => (boxesRef.current[index] = el)}
            >
              <img src={image} alt={`Step ${index + 1}`} loading="lazy" />
              <div className="info-workflow">
                <h2>{`Bước ${index + 1}`}</h2>
                <p>
                  {
                    [
                      "Người bệnh cung cấp thông tin cá nhân để phòng khám tạo hồ sơ và xếp lịch khám cho người bệnh",
                      "Bác sĩ hoặc nhân viên y tế sẽ tiến hành khám và chẩn đoán tình trạng sức khỏe của người bệnh",
                      "Điều trị có thể bao gồm sử dụng thuốc, thủ thuật, điều trị tại chỗ, hay các biện pháp kiểu mẫu khác",
                      "Quá trình xuất viện bao gồm nhận lại các báo cáo xét nghiệm, tư vấn và theo dõi sức khỏe",
                    ][index]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
