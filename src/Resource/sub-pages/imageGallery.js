import Carousel from "react-bootstrap/Carousel";
import img1 from "./imgs/img1.jpg";
import img2 from "./imgs/img2.jpg";
import img3 from "./imgs/img3.jpg";
import img4 from "./imgs/img4.jpg";
import img5 from "./imgs/img5.jpg";
import img6 from "./imgs/img6.png";
import img7 from "./imgs/img7.png";
import img8 from "./imgs/img8.png";
import img9 from "./imgs/img9.png";
import img10 from "./imgs/img10.png";
import img11 from "./imgs/img11.png";

import "../css/homepage.gallary.css";
function ImageGallery() {
  return (
    <Carousel slide interval={30000}>
      <Carousel.Item>
        <div className="slider-container">
          <div className="slider-text d-flex">
            <img className="setSize mr-5" src={img1} alt="First1" />{" "}
            <img className="setSize mr-5" src={img2} alt="First " />
            <img className="setSize mr-5" src={img3} alt="Third" />{" "}
            <img className="setSize mr-5" src={img4} alt="First" />
            <img className="setSize mr-5" src={img5} alt="Second" />
            <img className="setSize mr-5" src={img6} alt="Third " />{" "}
            <img className="setSize mr-5" src={img7} alt="First " />
            <img className="setSize mr-5" src={img8} alt="Third " />{" "}
            <img className="setSize mr-5" src={img9} alt="First " />
            <img className="setSize mr-5" src={img10} alt="Second" />
            <img className="setSize mr-5" src={img11} alt="Third" />{" "}
            <img className="setSize mr-5" src={img10} alt="First " />
            <img className="setSize mr-5" src={img6} alt="Third" />{" "}
            <img className="setSize mr-5" src={img6} alt="First" />
            <img className="setSize mr-5" src={img3} alt="Second" />
            <img className="setSize mr-5" src={img6} alt="Third" />{" "}
          </div>{" "}
        </div>
      </Carousel.Item>{" "}
    </Carousel>
  );
}

export default ImageGallery;
