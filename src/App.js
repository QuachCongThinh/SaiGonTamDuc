import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import "./styles/Reset.scss";
import Difference from "./component/Difference";
import ScrollToTop from "./component/ScrollToTop";
import Service from "./component/Service";
import Workflow from "./component/Workflow";
import Comment from "./component/Comment";
import Linked from "./component/Linked";
import Video from "./component/Video";
import Albums from "./component/Albums";
import News from "./component/News";
import Loading from "./component/Loading";
import Footer from "./component/Footer";
import { Helmet } from "react-helmet";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 3600);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      <Helmet>
        <title>
          Phòng Khám Đa Khoa Sài Gòn Tâm Đức | Khám Chữa Bệnh Uy Tín
        </title>
        <meta
          name="description"
          content="Phòng khám đa khoa Sài Gòn Tâm Đức - Dịch vụ khám bệnh chất lượng cao, bác sĩ giỏi, tận tâm."
        />
        <meta
          name="keywords"
          content="Phòng khám đa khoa Sài Gòn Tâm Đức"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Phòng Khám Đa Khoa Sài Gòn Tâm Đức"
        />
        <meta
          property="og:description"
          content="Sức khỏe của bạn - Trách nhiệm của chúng tôi"
        />
        <meta property="og:url" content="http://pkdksgtamduc.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Banner />
          <Difference />
          <Service />
          <Workflow />
          <Albums />
          <Comment />
          <Video />
          <News />
          <Linked />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
