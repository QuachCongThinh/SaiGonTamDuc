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
// import News from "./component/News";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Difference />
      <Service />
      <Workflow />
      <Map />
      {/* <News /> */}
      <Comment />
      <Linked />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
