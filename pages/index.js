import React from 'react'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="intro-home">
          <div className="row row-full nopad">
              <div className="small-12 columns nopad intro-home-hold">
                  <div className="small-12 columns nopad intro-home-animation">
                      <div className="small-12 columns nopad intro-home-carousel-hold">
                          <div className="owl-carousel intro-home-carousel">
                              <div className="intro-home-carousel-item" style={{background: "url('wp-content/uploads/2021/05/2A4A9553-web-1920x1536.jpg') no-repeat center center;"}}>
                                  <div className="intro-home-carousel-item-title">
                                      <span> Sado Estuary, Portugal </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <a href="#about" className="scroll-down-mouse"></a>
                  </div>
                  <div className="small-12 columns nopad home-intro-content-bg" id="about">
                      <div className="small-12 large-12 columns nopad text-center intro-home-content">
                          <div className="intro-home-content-width">
                              <h1> An intention, a wish, a recourse, Slow is a collective of people, places and projects that reframe the way we live and interact. </h1>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
