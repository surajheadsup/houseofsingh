import React, { useEffect, useState} from 'react';
import Lottie from "react-lottie";
import animationData from "../public/static/animation.json";
import styles from "../styles/Loading.module.css";
function Loading() {
    const [animate, setanimate] = useState('')
    const [timer, setTimer] = useState(3000);
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      backgroundColor: '#fff',
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    useEffect(() => {
      setTimeout(() => {
        if(timer !== 0){
         setTimer(timer-20)
        }else{
          setanimate('fadeout')
        }
        console.log('l', timer);
       }, 10);
    },[timer, animate])
   
    return (<div className={`${styles.loading} ${animate}`}><Lottie options={defaultOptions} height={400} width={500}/></div>)
    // return <label>Loading...</label>
  }
  
  export default Loading;