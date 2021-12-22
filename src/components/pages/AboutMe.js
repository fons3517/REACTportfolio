import React from 'react';
import Image from 'react-bootstrap/Image'

export default function AboutMe() {
  return (
    <div className=''>
      <div>
        <img
          className='pic'
          src='./'
          alt='SelfPic'
        />
      </div>
      <h4 className='PortH4'><b>About Me</b></h4>
      <p className='paraClass'>
        I am a language enthusiast<br />
        <b>I love languages. Languages are what the world uses in order to communicate with itself.</b>
        They are fascinating and unique in many ways. I speak English and Spanish fluently and
        I practice Italian and French as a hobby. To learn a computer language has been
        something I have aspired to do.
      </p>
      <p className='aboutPara'>
        Learning a computer language helps satisfy my passion for languages
        and connects my deep interest with UI/UX together. To explore the potential
        of creating something new is extremely inspiring. <b>I look forward to every
          opportunity</b>.
      </p>
      );
}