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
import Logo from "../public/images/logo.png"
import SplitNav from "./SplitNav";


const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {ssr: false,});
const Navbar = ({children}) => {
    const router = useRouter();
    const [display, setDisplay] = useState('none')
    const [show, setShow] = useState(0);

    useEffect(() => {

    }, [display])

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
                    <div><Image src={Logo} layout={'fixed'} width={300} height={183} onClick={()=>navigate()}/></div>
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
            {
                display === 'block'?<SplitNav display={display} setDisplay={setDisplay}/> : ''
            }
        <LoadJs/>
    </> );
}
 
export default Navbar;