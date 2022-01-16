import React, {useEffect, useState} from 'react'

function Test() {
    const [array, setArray]= useState(['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'])
    const [count, setCount] = useState(0)
    useEffect(() => {

    },[count])

    
    const onChange = () => {
        console.log('insied change');
        array.push(array.shift());
        setArray(array)
        setCount(count+1)
    }

    let day;
    day = array.map((item, index) =>
        <label style={{marginRight: 10}} key={index} onClick={onChange}>{item}</label>
    )

    

    console.log('array', array);
    return (
        <div>
           {day}
        </div>
    )
}

export default Test
