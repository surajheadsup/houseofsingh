import React, {useEffect, useState} from 'react';
import {DefaultFirebase} from "../firebase/clientApp";
import axios from 'axios';
import Navbar from '../components/Navbar';
import Calender from '../components/Calender';
import * as Constants from '../constants/constants'
import Style from '../styles/Timeline.module.css'
import TimelineItemMobile from '../components/MobileView/TimelineItemMobile';
import TimelineItemWeb from '../components/WebView/TimelineItemWeb';
import TimelineWeb from '../components/WebView/TimelineItemWeb';


const Timeline = (props) => {
    const [data, setData] = useState(null)
    const [width, setWidth] = useState('');
    
    var db = DefaultFirebase.db;
    useEffect(() => {
        setWidth(window.innerWidth);
        if(data === null){
            loadTimeline();
        }

        console.log('amp', width);
    },[data])

    const loadTimeline = () => {
        axios
        .get(Constants.getTimelines)
        .then((response) => {
            if (response.status === 200) {
                setData(response.data.data)
                console.log(response.data.data);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }    

    let timeline;
    if(data!==null){
        timeline = data.data.map((item, index)=>
            <div className="col-4" key={index}>
                <div className={Style.main}>
                    <div className={Style.child}>
                        <img src={`${Constants.UploadUrl}${item.thumbnail_image}`} className="w-100"/>
                    </div>
                    <div className={Style.hoverEffect1}>
                        <label className="w-100">{item.heading}</label>
                    </div>
                </div>
            </div>
        )
    }

    let mTimeline;

    if(data!==null){
        mTimeline = data.data.map((item, index)=>
            <div className={`col-4 ${Style.customCol}`} key={index}>
                <div className={Style.main}>
                    <div className={Style.child}>
                        <img src={`${Constants.UploadUrl}${item.thumbnail_image}`} className="w-100"/>
                    </div>
                    <div className={Style.hoverEffect1}>
                        <label className="w-100">{item.heading}</label>
                    </div>
                </div>
            </div>
        )
    }


    return ( <>
        <Navbar />
        {
            width<770 ? 
            <>
            <div className="col-12">
                <div className="row">{mTimeline}</div>
            </div>
            <TimelineItemMobile year={Constants.year}  setData={setData} data={data}/>
            </>
            :
            <div className="row">
                <div className="col-1">
                    <TimelineWeb year={Constants.year} setData={setData} data={data}/>
                </div>
                <div className="col-11">
                    <div className="row">{timeline}</div>
                </div>
            </div>
        }


        {/* { width<770 ? <TimelineItemMobile year={Constants.year}  setData={setData} data={data}/>  : '' } */}
    </> );
}
 
export default Timeline;