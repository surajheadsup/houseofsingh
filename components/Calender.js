import React from 'react'
import moment from 'moment'
import parse from 'html-react-parser';
import Style from '../styles/Timeline.module.css'
const Calender = (props) => {
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug','sept','oct','nov', 'dec']
    const year = props.year;
    var years = []

    for(var i=year;i<moment().year();i++){
        years.push(i)
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
                    months.map((item,index)=>
                        <label className={`${Style.months} month_active hover `} key={index}>{item}</label>
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