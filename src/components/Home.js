import React from "react";
import Image from "react-bootstrap";
import Banner from "../assets/images/banner.jpg";

export default function Home() {
  return (
    <div className="container-fluid">
      <Image
        fluid
        className="img-fluid"
        src={Banner} />

    </div>

  )
}