import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import firstHomeImage from "../../res_images/homeImage.jpg";
// import secondHomeImage from "../../res_images/schooolbus.jpg";
import thirdHomeImage from "../../res_images/whyUs2.jpeg";
function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={firstHomeImage} alt="First slide" />{" "}
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={thirdHomeImage} alt="First slide" />{" "}
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
