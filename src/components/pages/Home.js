import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

export default function Home() {
  return (
    <header>
      <div className="flex-row justify-end">
        <div className=""
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <AboutMe />
        </div>
        <div className=""
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <Contact />
        </div>
        <div className=""
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <Portfolio />
        </div>
        <div className=""
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <Resume />
        </div>
      </div>
    </header>


  )
}