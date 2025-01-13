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
import Map from "./component/Map";
// import Albums from "./component/Albums";
// import News from "./component/News";
import Loading from "./component/Loading";
import Footer from "./component/Footer";
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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Banner />
          <Difference />
          <Service />
          <Workflow />
          {/* <Albums /> */}
          <Map />
          <Comment />
          {/* <News /> */}
          <Linked />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
