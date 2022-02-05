import React from 'react';
import Script from 'next/script';
const LoadJs  = () => {
    return ( <>
        <Script src="../Scripts/jquery.min.js" strategy="beforeInteractive"></Script>
        <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></Script>
        
        {/* <Script src=""></Script>

        <Script src="../themes/slow/js/vendor/what-input.min.js"></Script>
        <Script src="../themes/slow/js/foundation.min.js"></Script>
        <Script src="../themes/slow/js/motion-ui.min.js"></Script>
        <Script src="../themes/slow/js/jquery.fancybox.min.js"></Script>
        <Script src="../themes/slow/js/owl.carousel.min.js"></Script>
        <Script src="../themes/slow/js/smoothScroll.js"></Script>

        <Script src="../themes/slow/splitting.min.js"></Script>
        <Script src="../themes/slow/js/main.js" strategy="lazyOnload"></Script> */}
    </> );
}
 
export default LoadJs ;