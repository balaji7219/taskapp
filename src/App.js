import Faqs from "./component/Faqs";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Sidebar from "./component/Sidebar";
import { Carousel, Container } from "react-bootstrap";

function App() {
  return (
    <div className="container gap-5">
      <Sidebar />
      <Home />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
