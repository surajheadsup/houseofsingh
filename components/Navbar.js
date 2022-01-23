import React, {useState} from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import Lottie from "react-lottie";
import animationData from "../public/static/animation.json";

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import { IoIosMenu  } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import LoadCss from "./LoadCss";
import LoadJs from "./LoadJs";
import Logo from "../public/images/logo.png"
import SplitNav from "./SplitNav";


const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {ssr: false,});
const Navbar = ({children}) => {
    const router = useRouter();
    const [display, setDisplay] = useState('block')
    console.log(router.pathname);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

    const handleSplitScreen = () => {
        setDisplay('block')
    }
    const handleSplitScreenClose = () => {
        setDisplay('none')
    }

    return ( <>
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
                                        <a href="#" data-nav-link="21">Place 1</a>
                                    </li>
                                    <li>
                                        <a href="#" data-nav-link="22">Place 2</a>
                                    </li>
                                    <li>
                                        <a href="#" data-nav-link="23">Place 3</a>
                                    </li>
                                    <li>
                                        <a href="#" data-nav-link="24">Place 5</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" data-nav-link="3">Projects </a>
                                <span className="subnav-indicator"></span>
                                <span className="subnav-indicator"></span>
                                <span className="subnav-indicator"></span>
                                <ul>
                                    <li>
                                        <a href="#" data-nav-link="31">Project</a>
                                    </li>
                                    <li>
                                        <a href="#" data-nav-link="32">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#" data-nav-link="33">Projects</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="" data-nav-link="4">People </a>
                            </li>
                            <li>
                                <a href="#" data-nav-link="5">Journal </a>
                            </li>
                            <li>
                                <a href="#" data-nav-link="6">Calendar </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-bottom">
                    <ul>
                        <li>
                            <a href="#" >Instagram</a>
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
                        <div className="nav-image" style={{background: "url('wp-content/uploads/2020/11/Treehouse-439.jpg') no-repeat center center;"}}></div>
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
                <div>
                    <div className={styles.topnav}>
                        <div className={`${styles.inline} ${styles.inline}`}>
                            <div className="small-4 columns nopad nav-trigger">
                                <div className="nav-toggle nav-open close">
                                    <span>Menu</span>
                                </div>
                                <div className="nav-toggle nav-close">
                                    <span>Close</span>
                                </div>
                            </div>
                        </div>
                        <div><Link href='/'><a><Image src={Logo} layout={'fixed'} width={300} height={183}/></a></Link></div>
                        <div className={styles.switch}>
                            <div className={`mr-4`}> En | Fr | ਪ </div>
                            <div><ThemeToggle type="button" onClick={() => setActiveTheme(inactiveTheme)}/></div>
                        </div>
                    </div>
                    <div className={styles.navigation}>
                        <Link href='/work'><a className={router.pathname === "/work" ? "active" : ""}>Work</a></Link>
                        <Link href='/about'><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link>
                        <Link href='/expertise'><a className={router.pathname === "/expertise" ? "active" : ""}>Expertise</a></Link>
                        <Link href='/contact'><a className={router.pathname === "/contact" ? "active" : ""}>Contact</a></Link>
                    </div>
                    <div className="main">{children}</div>
                </div>
                
            </header>
            <div className="main-wrapper">
                <div className="frontpage-bg"></div>
                <div className="frontpage-overlay"></div>
                <div className="frontpage-logo">
                    <Lottie options={defaultOptions} height={400} width={500} />
                </div>
            </div>
            </div>
            <LoadJs/>
    </> );
}
 
export default Navbar;