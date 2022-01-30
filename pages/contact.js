import React from 'react';
import Label from '../components/Label';
import styles from '../styles/Contact.module.css'
import Navbar2 from "../components/SecondNavbar";
import Footer from "../components/Footer";

const Contact = () => {
    return ( <>
        <Navbar2 />
        <div className={styles.about}>
            <Label className={styles.label} text={`Ylimay is an Art Director, Brand Designer, Stylist, Florist, and overall do’er based out of Brooklyn, New York. She creates unique worlds inspired by the magic of nature and of harmonious chaos. Say Hi!`}/>
        </div>
        <Footer  position={'absolute'}/>
    </> );
}
 
export default Contact;