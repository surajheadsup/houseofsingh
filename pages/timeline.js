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
    },[])

    const loadTimeline = async () => {
        const response = await db.collection("timeline").orderBy('created_at').get();
        const timelineData = response.docs.map(entry => ({
            id: entry.id,
            ...entry.data()
        }));

        setData(timelineData)
    }

    

    let timeline;
    if(data!==null){
        timeline = data.map((item, index)=>
            <h1 key={index}>{item.name}</h1>
        )
    }

    return ( <>
        <Navbar />
        <div>
            <div className="row">
                <div className="col-1">
                    <Calender year={Constants.year}/>
                </div>
            </div>
        </div>
    </> );
}
 
export default Timeline;