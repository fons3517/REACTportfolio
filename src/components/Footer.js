import React from "react";
import { AiFillGithub } from 'react-icons/si';
import { SiTwitter, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-100 mt-auto bg-light p-3 footer fixed-bottom">
      <div className="container text-dark justify-content-center d-flex">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">
            Copyright &copy;❤️️ Alfonso Robles Presentations
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://github.com/fons3517"
            >
              <h5>
                <AiFillGithub />
              </h5>
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://twitter.com/Fons3517"
            >
              <h5>
                <SiTwitter />
              </h5>
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.linkedin.com/in/alfonso-robles-3517-agr/"
            >
              <h5>
                <SiLinkedin />
              </h5>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
