import React, {useEffect, useState} from 'react';
import {DefaultFirebase} from "../firebase/clientApp";
import axios from 'axios';
import Navbar from '../components/Navbar';
import Calender from '../components/Calender';
import * as Constants from '../constants/constants'
import Style from '../styles/Timeline.module.css'

const Timeline = () => {
    const [data, setData] = useState(null)
    var db = DefaultFirebase.db;
    useEffect(() => {
        if(data === null){
            loadTimeline();
        }
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
                        <img src={`http://localhost:8000/uploads/timelines/${item.thumbnail_image}`} className="w-100"/>
                    </div>
                    <div className={Style.hoverEffect}>
                        <label className="w-100">{item.heading}</label>
                    </div>
                </div>
            </div>
        )
    }

    return ( <>
        <Navbar />
        <div className="m-1">
            <div className="row">
                <div className="col-1">
                    <Calender year={Constants.year} setData={setData} data={data}/>
                </div>
                <div className="col-11">
                    <div className="row">{timeline}</div>
                </div>
            </div>
        </div>
    </> );
}
 
export default Timeline;