import React, { useEffect, useState } from "react"
import '../styles/theme.css'
// import '../styles/animation.css'

import '../styles/media.css'

import '../styles/sideNav.css'
import '../styles/globals.css'

import Router from "next/router";
import Loading from "../components/Loading";
import axios from 'axios';


axios.defaults.baseURL = "http://localhost:8000/";

 function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const [timer, setTimer] = useState(4000);

  React.useEffect(() => {


    setTimeout(() => {
     if(timer !== 0){
      setTimer(timer-1000)
     }
    }, 1000);

    const start = () => {
      setLoading(true);
      window.scroll({
        top: 0,
      });
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  },[timer]);

  return (
    <>
    {/* <Loading/> */}

       {loading ? (
        <Loading/>
      ) : 
      
        
          timer === 0 ?
          <Component {...pageProps} />
          : <Loading/>
      
      }
    </>
  );
}

export default App;