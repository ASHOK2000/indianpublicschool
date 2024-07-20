import React from "react";
import HomeContent from "./sub-pages/home-content";

// import { Container } from "react-bootstrap";
import CarouselFade from "./sub-pages/carouselFade";
import ImageGallery from "./sub-pages/imageGallery";
import "../css/about.css";

export default function Home() {
  return (
    <div className="aboutBackground">
      <div>
        <CarouselFade></CarouselFade>
      </div>
      <div style={{ margin: "10px" }}></div>
      <HomeContent />
      <div style={{ minHeight: "20rem" }}>
        <ImageGallery />
      </div>
    </div>
  );
}
