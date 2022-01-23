import React, {useEffect, useState} from 'react'
import * as Style from '../styles/Test.module.css'
import Lottie from "react-lottie";
import animationData from "../public/static/animation.json";
import Navbar from '../components/Navbar';
import LoadJs from '../components/LoadJs';
import LoadCss from '../components/LoadCss';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../public/images/logo.png"
import { useRouter } from 'next/router';
function Test() {
    const router = useRouter();
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };


    useEffect(() => {


    },[])
   

    return (
        <>
        <LoadCss/>
            <div className="home ">
            <div className="nav-hold">
                <div className="row row-full">
                    <div className="small-12 medium-6 columns nopad nav">
                        <ul>
                            <li>
                                <a href="prologue/index.html" data-nav-link="1">Prologue </a>
                            </li>
                            <li>
                                <a href="places/index.html" data-nav-link="2">Places </a>
                                <span className="subnav-indicator"></span>
                                <span className="subnav-indicator"></span>
                                <span className="subnav-indicator"></span>
                                <span className="subnav-indicator"></span>
                                <ul>
                                    <li>
                                        <a href="#" data-nav-link="21">Tulum Treehouse</a>
                                    </li>
                                    <li>
                                        <a href="#" data-nav-link="22">La Granja</a>
                                    </li>
                                    <li>
                                        <a href="places/marina-project/index.html" data-nav-link="23">Marina Project</a>
                                    </li>
                                    <li>
                                        <a href="places/casa-noble/index.html" data-nav-link="24">Casa Noble</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="projects/index.html" data-nav-link="3">Projects </a>
                                <span className="subnav-indicator"></span>
                                <span className="subnav-indicator"></span>
                                <span className="subnav-indicator"></span>
                                <ul>
                                    <li>
                                        <a href="projects/sofi/index.html" data-nav-link="31">Sofi Bakery</a>
                                    </li>
                                    <li>
                                        <a href="projects/simple/index.html" data-nav-link="32">Simple São João</a>
                                    </li>
                                    <li>
                                        <a href="projects/xinu-tulum/index.html" data-nav-link="33">Xinú Tulum</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="people/index.html" data-nav-link="4">People </a>
                            </li>
                            <li>
                                <a href="journal/index.html" data-nav-link="5">Journal </a>
                            </li>
                            <li>
                                <a href="calendar/index.html" data-nav-link="6">Calendar </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-bottom">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/slowness/?hl=en/">Instagram</a>
                        </li>
                        
                        <li>
                            <a data-open="joinModal" className="join-reveal-trigger"> Join our Community </a>
                        </li>
                        <li className="contact-trigger-header">
                            <a> Contact </a>
                        </li>
                    </ul>
                </div>
                <div className="nav-content-hold">
                    <div className="nav-content nav-content-1 active">
                        <div className="nav-text text-reg-md hide"></div>
                        <div className="nav-image" style={{background: "url(''wp-content/uploads/2020/11/Treehouse-439.jpg') no-repeat center center;"}}></div>
                    </div>
                    <div className="nav-content nav-content-2 ">
                        <div className="nav-text text-reg-md hide"></div>
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2020/11/02_07_20_100__2-web.jpg') no-repeat center center;"}}></div>
                    </div>
                    <div className="nav-content nav-content-21">
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2021/03/tth_125-web.jpg') no-repeat center center;"}}></div>
                    </div>
                    <div className="nav-content nav-content-22">
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2020/11/18.10.24_LA_GRANJA_POOL_AREA_065-1920x2560.jpg') no-repeat center center;"}}></div>
                    </div>
                    <div className="nav-content nav-content-23">
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2020/11/MarinaMarina_Tumb.jpg') no-repeat center center;"}}></div>
                    </div>
                    <div className="nav-content nav-content-24">
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2021/02/Slow_Navigation_009-1920x2404.jpg') no-repeat center center;"}}></div>
                    </div>
                    <div className="nav-content nav-content-3 ">
                        <div className="nav-text text-reg-md hide"></div>
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2021/02/img20210201_18132585-BGEdit-web-1920x2400.jpg') no-repeat center center;"}}></div>
                    </div>
                    <div className="nav-content nav-content-31">
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2021/02/2020-12-Sofi-0969-scaled-e1614698733947-1920x1392.jpg') no-repeat center center;"}}></div>
                    </div>
                    <div className="nav-content nav-content-32">
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2021/02/7B9A2964-scaled-e1615310631398-1920x1243.jpg') no-repeat center center;"}}></div>
                    </div>
                    <div className="nav-content nav-content-33">
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2021/04/P2100075-HDR-web-2-1920x1440.jpg') no-repeat center center;"}}></div>
                    </div>
                    <div className="nav-content nav-content-4 ">
                        <div className="nav-text text-reg-md hide"></div>
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2020/11/20200827_Slow_Brandlhuber_Hi-9-web-3-1920x2688.jpg') no-repeat center center;"}}></div>
                    </div>
                    <div className="nav-content nav-content-5 ">
                        <div className="nav-text text-reg-md hide"></div>
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2021/02/Slow_Navigation_015-1920x2545.jpg') no-repeat center center;"}}></div>
                    </div>
                    <div className="nav-content nav-content-6 ">
                        <div className="nav-text text-reg-md hide"></div>
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2021/03/uxii_tth_bw_25-1920x2880.jpg') no-repeat center center;"}}></div>
                    </div>
                </div>
            </div>
            <header>
                <div className="row row-full">
                    <div className="small-4 columns nopad nav-trigger">
                        <div className="nav-toggle nav-open close">
                            <span>Menu</span>
                        </div>
                        <div className="nav-toggle nav-close">
                            <span>Close</span>
                        </div>
                    </div>
                    <div className="small-4 columns nopad text-center logo">
                        <a href="index.html">
                            <Image src={Logo} layout={'fixed'} width={300} height={183}/>
                        </a>
                    </div>
                </div>
                <div className={'navigation'}>
                    <Link href='/work'><a className={router.pathname === "/work" ? "active" : ""}>Work</a></Link>
                    <Link href='/about'><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link>
                    <Link href='/expertise'><a className={router.pathname === "/expertise" ? "active" : ""}>Expertise</a></Link>
                    <Link href='/contact'><a className={router.pathname === "/contact" ? "active" : ""}>Contact</a></Link>
                </div>
            </header>
            <div className="main-wrapper">
                <div className="frontpage-bg"></div>
                <div className="frontpage-overlay"></div>
                <div className="frontpage-logo">
                    <Lottie options={defaultOptions} height={400} width={500} />
                </div>
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
            </div>
            </div>
            <LoadJs/>
        </>
    )
}

export default Test
