import React from "react";
import Image from "react-bootstrap/Image";
import SelfPic from "./assets/images/self-pic.jpg";
import Banner from "./assets/images/banner.jpg";
import { Col } from "react-bootstrap-Col";
import { Card, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutMe() {
  return (
    <div className='container bg-light my-5 pb-5 text-dark'> {/*Assist with bootstrap*/}
      <Image
        fluid
        className=""
        src={Banner} />
      <Row>
        <Col>
          <div>
            <img
              className='pic'
              src={SelpPic}
              alt='SelfPic'
            />
          </div>
          <Card.Body className="my-lg-3 col-9 col-md-12 col-sm-12 my-sm-0 w-100">
            <Card.Title>
              About Me
            </Card.Title>
            <Card.Text>
              I am a language enthusiast<br />
              <b>I love languages. Languages are what the world uses in order to communicate with itself.</b>
              They are fascinating and unique in many ways. I speak English and Spanish fluently and
              I practice Italian and French as a hobby. To learn a computer language has been
              something I have aspired to do.

              Learning a computer language helps satisfy my passion for languages
              and connects my deep interest with UI/UX together. To explore the potential
              of creating something new is extremely inspiring. <b>I look forward to every
                opportunity</b>.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
}