import React from 'react';
import Script from 'next/script';
const LoadJs  = () => {
    return ( <>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></Script>
        <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></Script>
    </> );
}
 
export default LoadJs ;