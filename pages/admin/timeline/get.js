import React, { useState, useEffect } from "react";
import axios from 'axios'
import * as Session from '../../../storage/storage'
import * as Constants from '../../../constants/constants'

function Get() {

    const [data, setData]= useState(null)

    useEffect(() => {
        if(data === null){
            loadTimeline()
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
    console.log('data', data);

    if(data!==null){
        timeline = data.data.map((item, index) => (
            <div key={index}>
                <img src={`http://localhost:8000/uploads/timelines/${item.thumbnail_image}`} className="w-100"/>
                <label>{Session.getFullYear(item.timeline_date)}</label>

            </div>
        ))
    }




    return (
        <>
        {timeline}
        </>
    )
}

export default Get
