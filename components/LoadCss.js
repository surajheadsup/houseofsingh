import React from 'react';
import Head from 'next/head'
import Script from 'next/script';
const LoadCss = () => {
    return ( <>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <Head>
            
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
        </Head> 
    </>
    );
}

 
export default LoadCss;