import React, {useEffect, useState} from 'react';
import Style from '../styles/SplitNav.module.css'
import { IoMdClose  } from "react-icons/io";


function SplitNav(props) {
    console.log('props.display', props.display);
    const [id, setId] = useState(1)

    useEffect(() => {

    },[id])
    const handleSplitScreenClose = () => {
        props.setDisplay('none')
    }

    const handleHover = (id) => {
        setId(id)
    }


  return <div  style={{display:props.display}} className={'SplitNav slideDown'}>
      <div className={'main'}>
        <div className={'topNav'}>
            <div className={'closeDiv'} onClick={() => handleSplitScreenClose()}>
                <IoMdClose />
                <span className={'close'}>Close</span>
            </div>
        </div>
      </div>
      <div className={'mainDiv'}>
        <div className="row">
            <div className="col-6">
                <div className={'sideNav'}>
                        <ul className={'ul'}>
                            <li id="refContent1" onMouseOver={()=>handleHover(1)} className={'refContent1'} data-nav-link="1">prologue</li>
                            <li id="refContent2" className={`refContent2 hasChild`} onMouseOver={()=>handleHover(2)} data-nav-link="2">
                                places
                                <ul className={'childUl'}>
                                    <li>Location</li>
                                    <li>Location</li>
                                    <li>Location</li>
                                    <li>Location</li>
                                </ul>
                            </li>

                            <li  className={'hasChild'} onMouseOver={()=>handleHover(3)} data-nav-link="3">
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
                {/* <div> */}
                    <div className={`${Style.navImage} nav-content-1 ${id === 1 ? 'show' : ''}`}></div>
                    <div className={`${Style.navImage} nav-content-2 ${id === 2 ? 'show' : ''}`}></div>
                    <div className={`${Style.navImage} nav-content-3 ${id === 3 ? 'show' : ''}`}></div>
                {/* </div> */}
            </div>    
            </div>
      </div>
  </div>;
}

export default SplitNav;
