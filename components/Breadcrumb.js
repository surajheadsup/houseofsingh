import React, {useState, useEffect} from 'react';
import * as Session from '../storage/storage'



function Breadcrumb(props) {

    const [selected, setSelected] = useState('All')

    useEffect(() => {

    }, [selected])

    const filter= (category) => {
        setSelected(category)
        props.setSelected(category)
        // props.setDisplay(1)
        props.setShow(true);
        // window.scrollTo(0, 1000);
        const divElement = document.getElementById('home-filter');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <nav aria-label="breadcrumb" className={props.className}>
        <ol className="breadcrumb">
            <li className={`breadcrumb-item hover ${selected==='All'? 'portfolio-filter-active': ''}`} onClick={() =>filter('All')}>All</li>
            <li className={`breadcrumb-item hover ${selected==='Art'? 'portfolio-filter-active': ''}`} onClick={() =>filter('Art')}>Art</li>
            <li className={`breadcrumb-item hover ${selected==='Design'? 'portfolio-filter-active': ''}`} onClick={() =>filter('Design')}>Design</li>
            <li className={`breadcrumb-item hover ${selected==='Photograpy'? 'portfolio-filter-active': ''}`} onClick={() =>filter('Photograpy')}>Photography</li>
        </ol>
    </nav>
  )
  
}

export default Breadcrumb;
