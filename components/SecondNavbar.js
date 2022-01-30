import React, {useState} from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/SecondNavbar.module.css'
import { GoPrimitiveDot } from "react-icons/go";
import LoadCss from "./LoadCss";
import LoadJs from "./LoadJs";
import Footer from "./Footer";
import Logo from "../public/images/logo.png"

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {ssr: false,});

const SecondNavbar = ({children}) => {
    const router = useRouter();

    const navigate = () => {
        window.location.href="/"
    }
  return (
        <>
        <LoadCss/>
                <div>
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-12">
                            <div className={`${styles.menu} hover`}>
                                <Image src={Logo} layout={'fixed'} width={150} height={100} onClick={()=>navigate()}/>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-12">
                            <div className={styles.navigation}>
                                <Link href='/work'><a className={router.pathname === "/work" ? "active" : ""}>Work</a></Link>
                                <Link href='/about'><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link>
                                <Link href='/expertise'><a className={router.pathname === "/expertise" ? "active" : ""}>Expertise</a></Link>
                                <Link href='/contact'><a className={router.pathname === "/contact" ? "active" : ""}>Contact</a></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12">
                            <div className={styles.switch}>
                                <div className={`mr-4`}> En | Fr | ਪ </div>
                                <div><ThemeToggle type="button" onClick={() => setActiveTheme(inactiveTheme)}/></div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="main">{children}</div>          
            <LoadJs/>
        </>
    
  )
}

export default SecondNavbar;
