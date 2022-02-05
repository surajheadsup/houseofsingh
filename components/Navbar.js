import React, {useState, useEffect} from "react";
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
import SplitNav from "./SplitNav";


const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {ssr: false,});
const Navbar = ({children}) => {
    const router = useRouter();
    const [display, setDisplay] = useState('none')
    const [show, setShow] = useState(0);
    const [fadeIn, setFadeIn] = useState()
    const [nav, setNav] = useState('')

    useEffect(() => {

    }, [display,nav])

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

    const handleMouseOver = (t_nav) => {
        setNav(t_nav)
    }

    const handleMouseOut = ()=>{
        setNav('')
    }
    return ( <>
        <LoadCss/>
            <div>
                <div className={styles.topnav}>
                    <div className={`${styles.inline} ${styles.inline}`}>
                        {
                            display === 'none' ?
                            <div className={styles.menu} onClick={()=>handleSplitScreen()}>
                                <GoPrimitiveDot className={styles.dot}/>
                                <span className={styles.span}>Menu</span>
                            </div>
                        :
                            ''
                        }
                    </div>
                    <div>
                    {/* <Image src={Logo} layout={'responsive'} width={300} height={183} onClick={()=>navigate()}/> */}
                        <label className=""><img src={'../images/logo.png'} className={styles.logo} onClick={()=>navigate()}/></label>
                    </div>
                    <div className={styles.switch}>
                        <div className={`mr-4`}> En | Fr | ਪ </div>
                        <div><ThemeToggle type="button" onClick={() => setActiveTheme(inactiveTheme)}/></div>
                    </div>
                </div>
                <div className={styles.navigation}>
                    <Link href='/work'><a className={`${router.pathname === "/work" ? "active" : ""} ${nav === 'work'? 'fadeIn' : nav === '' ? 'fadeIn': 'fadeOut'}`} onMouseOver={()=>handleMouseOver('work')} onMouseOut={()=>handleMouseOut()}>Work</a></Link>
                    <Link href='/about'><a className={`${router.pathname === "/about" ? "active" : ""} ${nav === 'about'? 'fadeIn' : nav === '' ? 'fadeIn': 'fadeOut'}`} onMouseOver={()=>handleMouseOver('about')} onMouseOut={()=>handleMouseOut()}>About</a></Link>
                    <Link href='/expertise'><a className={`${router.pathname === "/expertise" ? "active" : ""} ${nav === 'expertise'? 'fadeIn' : nav === '' ? 'fadeIn': 'fadeOut'}`} onMouseOver={()=>handleMouseOver('expertise')} onMouseOut={()=>handleMouseOut()}>Expertise</a></Link>
                    <Link href='/contact'><a className={`${router.pathname === "/contact" ? "active" : ""} ${nav === 'contact'? 'fadeIn' : nav === '' ? 'fadeIn': 'fadeOut'}`} onMouseOver={()=>handleMouseOver('contact')} onMouseOut={()=>handleMouseOut()}>Contact</a></Link>
                </div>
                <div className="main">{children}</div>
            </div>
            {
                display === 'block'?<SplitNav display={display} setDisplay={setDisplay}/> : ''
            }
        <LoadJs/>
    </> );
}
 
export default Navbar;