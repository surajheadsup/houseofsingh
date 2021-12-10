import React from 'react';
import Label from '../components/Label';
import styles from '../styles/Contact.module.css'
import Navbar from '../components/Navbar'

const Contact = () => {
    return ( <>
        <Navbar />
        <div className={styles.about}>
            <Label className={styles.label} text={`Ylimay is an Art Director, Brand Designer, Stylist, Florist, and overall do’er based out of Brooklyn, New York. She creates unique worlds inspired by the magic of nature and of harmonious chaos. Say Hi!`}/>
        </div>
    </> );
}
 
export default Contact;