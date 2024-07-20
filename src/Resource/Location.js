/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
// import SimpleMap from "./sub-pages/googleMap";

export default function Location() {
  const styleS = {
    position: "relative",
    height: "500px",
    width: "100%",
    backgroundColor: "lightgray",
    boxSizing: "border-box",
    fontSize: "16px",
    textAlign: "center",
  };

  const canvas = {
    overflow: "hidden",
    background: "none",
    height: "480px",
    width: "auto",
  };

  return (
    <>
      <Container>
        <div className="     shadow-lg p-1 mb-5 mt-5 bg-white rounded">
          <div style={canvas}>
            <iframe
              src="https://maps.google.com/maps?q=indian%20Public%20School%20Suhili%20485881&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              id="gmap_canvas"
              frameborder="10"
              style={styleS}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
