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
        <div class="outer">
            <div class="inner">This is a content block.</div>
        </div>
        </>
    )
}

export default Test
