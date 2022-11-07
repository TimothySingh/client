import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/timothy.singh.927/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/timothycalebsingh/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/SoapmanCaleb">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Timothy</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer",
                    1000,
                    "Junior Back-end Developer",
                    1000,
                    "Amateur Front-end Developer",
                    1000,
                    "Analytical Thinker",
                    1000,
                    "Logical Thinker",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Always excited to improve my skills in Front and Back end
                operation.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a href="Timothy_Singh_CV.pdf" download="Timothy_Singh_CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture"> 
          <div className="profile-picture-background">
            <div className="background-instruction">
            <span className="instruction-background">
              Hover Over Me!
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
