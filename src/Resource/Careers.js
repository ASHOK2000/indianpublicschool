/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container } from "react-bootstrap";

export default function Career() {
  return (
    <>
      <Container>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1 className="text-center mb-4">Join Our Team</h1>
              <p className="text-center lead">
                Explore exciting career opportunities at our school.
              </p>
              <hr />

              <div className="card">
                <div className="card-header">Job Title: Math Teacher</div>
                <div className="card-body">
                  <h5 className="card-title">About the Position</h5>
                  <p className="card-text">
                    We are seeking an experienced Math Teacher to join our team.
                    The ideal candidate should have a strong passion for
                    teaching mathematics and be able to create engaging lesson
                    plans.
                  </p>
                  <h5 className="card-title">Qualifications</h5>
                  <ul>
                    <li>Bachelor's degree in Mathematics or related field</li>
                    <li>Teaching certification</li>
                    <li>Excellent communication skills</li>
                  </ul>
                  <a href="#" className="btn btn-primary">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
