import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import { IoIosMenu  } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import LoadCss from "./LoadCss";
import LoadJs from "./LoadJs";
import Logo from "../public/images/logo.png"


const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {ssr: false,});
const Navbar = ({children}) => {
    const router = useRouter();
    console.log(router.pathname);
    return ( <>
    <LoadCss/>
        <div className={styles.topnav}>
            <div className={styles.inline}><GoPrimitiveDot/><IoIosMenu/></div>
            {/* <div><Link href='/'><a><Image src={Logo} layout={'fixed'} width={300} height={183}/></a></Link></div> */}
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
    <LoadJs/>
    </> );
}
 
export default Navbar;