import React from 'react';
import Style from '../styles/SplitNav.module.css'
import { IoMdClose  } from "react-icons/io";


function SplitNav(props) {


    const handleSplitScreenClose = () => {
        props.setDisplay('none')
    }


  return <div  style={{display:props.display}} className={'SplitNav'}>
      <div className={'main'}>
        <div className={'topNav'}>
            <div className={'closeDiv'} onClick={() => handleSplitScreenClose()}>
                <IoMdClose />
                <span className={'close'}>Close</span>
            </div>
        </div>
      </div>
      <div className="row">
          <div className="col-6">
              <div className={'sideNav'}>
                    <ul className={'ul'}>
                        <li id="refContent1" className={'refContent1'}>prologue</li>
                        <li id="refContent2" className={`refContent2 hasChild`}>
                            places
                            <ul className={'childUl'}>
                                <li>Location</li>
                                <li>Location</li>
                                <li>Location</li>
                                <li>Location</li>
                            </ul>
                        </li>

                        <li  className={'hasChild'}>
                            projects
                            <ul  className={'childUl'}>
                                <li>project</li>
                                <li>project</li>
                                <li>project</li>
                                <li>project</li>
                            </ul>
                        </li>
                        <li>people</li>
                        <li>journal</li>
                        <li>calender</li>
                    </ul>
              </div>
          </div>
          <div className="col-6">
            <div className={Style.navImage}><div className="content1"></div></div>
                {/* <div className={Style.navImage}><div className={Style.content2}></div></div>
                <div className={Style.navImage}><div className={Style.content3}></div></div>
                <div className={Style.navImage}><div className={Style.content4}></div></div>
                <div className={Style.navImage}><div className={Style.content5}></div></div> */}
            </div>
      </div>
  </div>;
}

export default SplitNav;
