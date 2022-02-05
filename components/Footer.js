import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import * as Style from '../styles/Footer.module.css'
import SubscribeForm from './SubscribeForm';
function Footer(props) {

    const [show, setShow] = useState('');
    const messagesEndRef = React.createRef()
    useEffect(() => {

    },[show])

    const handleShow = () => {
        // setShow('show')
        // messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    

  return (
      <>
        
        <div className={Style.footer} style={{position: props.position}}>
            <div className={Style.borderTop}/>
            <div className={'row'}>
                <div className={'col-md-6 col-6'}>
                    <div className={Style.newsletter}>
                        <div>
                            <ul>
                                <li data-toggle="collapse" href="#sub" role="button" aria-expanded="false" aria-controls="sub" onClick={()=>handleShow()}>Subscribe to our Newsletter</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <div className={Style.copyright}>
                                <ul>
                                    <li>© 2000 – 2022 House of Singh</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-md-6 col-6'}>
                    <div className={Style.social}>
                        <div>
                            <ul>
                                <li><Link href="http://instagram.com/houseofsingh" ><a target="_blank">Instagram</a></Link></li>
                                <li><Link href="https://www.pinterest.ca/houseofsingh/" ><a target="_blank">Pinterest</a></Link></li>
                                <li><Link href="https://www.pinterest.ca/houseofsingh/" ><a target="_blank">Facebook</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={`collapse`} id="sub" ref={messagesEndRef}>
                    <div className={Style.subscribe}>
                        <SubscribeForm/>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
  
}

export default Footer;
