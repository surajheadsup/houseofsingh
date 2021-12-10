import React from 'react';
import Lottie from "react-lottie";
import animationData from "../public/hos_logo_dec7.json";
import styles from "../styles/Loading.module.css";
function Loading() {
    // const defaultOptions = {
    //   loop: true,
    //   autoplay: true,
    //   animationData: animationData,
    //   backgroundColor: '#fff',
    //   rendererSettings: {
    //     preserveAspectRatio: "xMidYMid slice",
    //   },
    // };
  
    // return <div className={styles.loading}><Lottie options={defaultOptions} height={400} width={400}/></div>;
    return <label>Loading...</label>
  }
  
  export default Loading;