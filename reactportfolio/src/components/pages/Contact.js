import React from 'react';

export default function Contact() {
  return (

    <div>
      <h1>Contact</h1>
      <div className="flex-row justify center">
        <div className="col-md-9">
          <div className="">
            <img
              className="mx-auto rounded-circle"
              src="./assets/img/Gmail-logo-color.ico"
              alt="Gmail logo"
            />
            <a href="mailto:fons3517@gmail.com"
            >
              <h4>Gmail</h4>
            </a
            >
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <div className="">
          <img
            className="mx-auto rounded-circle"
            src="./assets/img/github.ico"
            alt="GitHub icon"
          />
          <a href="https://github.com/fons3517"
          >
            <h4>GitHub</h4></a
          >
        </div>
      </div>
      <div className="col-md-9">
        <div className="">
          <img
            class="mx-auto rounded-circle"
            src="./assets/img/linkedInjpg.jpg"
            alt="linkedIn Profile"
          />
          <a
            href="https://www.linkedin.com/in/alfonso-robles-505abb151/"
          >
            <h4>linkedIn</h4></a
          >

        </div>
      </div>
    </div>
  );
}