import React, { useEffect, useState } from 'react'
import * as Constants from '../../constants/constants';
import Style from '../../styles/TimelineMobile.module.css'
import moment from 'moment'
import axios from 'axios'

function TimelineItemMobile(props) {
    const [render, setRender] =  useState(0)
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug','sept','oct','nov', 'dec']
    const [currentMonth, setCurrentMonth] = useState()
    const [currentYear, setCurrentYear] = useState()
    const year = props.year;
    var years = []
    useEffect(() => {
        // console.log('C_YEar ', currentYear, 'c_month', currentMonth);

        setCurrentYear(moment().year())
        setCurrentMonth(moment().month())
    },[])

    for(var i=year;i<=moment().year();i++){
        years.push(i)
    }

    

    const handleClick = (value, type) => {
        var json;
        console.log(value);
        if(type === 'year'){
            console.log('if', value);
            var temp = currentMonth+1;
            var c_month = temp<9?'0'+temp : temp
            setCurrentYear(value)
            json = {
                filter_date : c_month + '-'+ value
            }
        }else{
            setCurrentMonth(value)
            var temp = value+1;
            var value = temp<9?'0'+temp : temp
            json = {
                filter_date : value +'-'+ currentYear
            }
            
        }
        console.log(json);
        axios.post(Constants.filter, json)
        .then((response)=>{
            console.log(response);
            if(response.status === 200){
                props.setData(response.data)
            }
        })
        .catch((error) => {
            console.error(error);
        });

    }

    let yearItem;
    yearItem = years.map((item, index) => 
        <div className={Style.FooterCalender} key={index}>
            <div className={`${Style.years} ${currentYear === item ? 'active-filter-year'  :''} `} onClick={() => handleClick(item, 'year')}>{item}</div>
            <label className={Style.label}><span className={`${currentYear === item ? Style.circle  :''}`}></span></label>
        </div>
    )

    let monthItem;
    monthItem = months.map((item, index) => 
        <div className={Style.FooterCalender}  key={index} onClick={() => handleClick(index, 'month')}>
            <div className={`${Style.months} ${currentMonth === index ? 'active-filter-month'  :''} `} >{item}</div>
        </div>
    )

    return ( <>
        <div>
            <div className={Style.accordion}>
                <div className={Style.year}>
                    {yearItem}
                </div>
                <div className={Style.month}>
                    {monthItem}
                </div>
            </div>
        </div>
    </> );

}

export default TimelineItemMobile
