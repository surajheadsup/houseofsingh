import React from 'react'
import moment from 'moment'
import parse from 'html-react-parser';
import Style from '../styles/Timeline.module.css'
import axios from 'axios'

const Calender = (props) => {
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug','sept','oct','nov', 'dec']
    const year = props.year;
    var years = []

    for(var i=year;i<moment().year();i++){
        years.push(i)
    }

    const handleClick = (month, year) => {
        console.log('Month : ', month, 'year : ', year);
        var month = month<9 ? '0'+ month : month;
        var json = {
            filter_date : month +'-'+ year
        }
        console.log(json);
        axios.post('http://localhost:8000/api/filter', json)
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

    let calender;
    calender = years.map((item, index) => 
        <div className={Style.calender} key={index}>
            <div className="" id={item}>
                <h2 className="mb-0">
                    <label className={`${Style.year} collapsed`} type="button" data-toggle="collapse" data-target={`#a${item.toString()}`} aria-expanded="false" aria-controls={`a${item.toString()}`}>
                        {item}
                    </label>
                </h2>
            </div>
            <div id={`a${item.toString()}`} className="collapse" aria-labelledby={item} data-parent="#accordionExample">
                {
                    months.map((item1,index)=>
                        <label className={`${Style.months} month_active hover `} key={index} onClick={()=>handleClick((index+1), item)}>{item1}</label>
                    )
                }
            </div>
        </div>
    )
    

    return ( <>
        <div>
            <div className={Style.accordion} id="accordionExample">
                {calender}            
            </div>
        </div>
    </> );
}
 
export default Calender;