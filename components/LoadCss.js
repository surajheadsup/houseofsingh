import React from 'react';
import Head from 'next/head'
import Script from 'next/script';
const LoadCss = () => {
    return ( <>
        
        <Head>
            
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
            <link rel='stylesheet' id='js_composer_front-css'  href='https://server.houseofsingh.com/wp-content/plugins/js_composer/assets/css/js_composer.min.css?ver=6.6.0' media='all' />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            
        </Head> 
    </>
    );
}

 
export default LoadCss;