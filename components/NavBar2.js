import React, {useState} from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import { GoPrimitiveDot } from "react-icons/go";
import LoadCss from "./LoadCss";
import LoadJs from "./LoadJs";
import Logo from "../public/images/logo.png"

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {ssr: false,});

const NavBar2 = ({children}) => {
    const router = useRouter();
  return (
        <>
        <LoadCss/>
                <div>
                    <div className={styles.topnav}>
                        <div className={`${styles.inline} ${styles.inline}`}>
                            <div className={styles.menu}>
                                <GoPrimitiveDot />
                            </div>
                        </div>
                        <div><a href='/'><Image src={Logo} layout={'fixed'} width={300} height={183}/></a></div>
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
            <LoadJs/>
        </>
    
  )
}

export default NavBar2;
