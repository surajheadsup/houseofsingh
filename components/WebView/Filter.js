import React, { useEffect, useState } from "react";

function Filter(props) {
    const [selected, setSelected] = useState('All')
    useEffect(() => {
        // console.log('data', props.data);
    },[])


    const filter= (category) => {
        setSelected(category)
        var temparr = [];
        // props.data.map((item, index) => <>
        //     {item.categories.edges[0].node.name === category ? console.log(item.categories.edges[0].node.name) : ''}
        //     </>
        // )
        if(category === 'All'){
            props.setPortfolioData(props.data)
        }else {
            for(let i=0;i<props.data.length;i++){
                if(props.data[i].categories.edges[0].node.name === category){
                    temparr.push(props.data[i])
                    props.setPortfolioData(temparr)
                    
                }
            }
            props.setRender(temparr.length)
        }
        

        console.log('new portfolioData', props.portfolioData);
    }

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className={`breadcrumb-item hover ${selected==='All'? 'portfolio-filter-active': ''}`} onClick={() =>filter('All')}>All</li>
                <li className={`breadcrumb-item hover ${selected==='Art'? 'portfolio-filter-active': ''}`} onClick={() =>filter('Art')}>Art</li>
                <li className={`breadcrumb-item hover ${selected==='Design'? 'portfolio-filter-active': ''}`} onClick={() =>filter('Design')}>Design</li>
                <li className={`breadcrumb-item hover ${selected==='Photograpy'? 'portfolio-filter-active': ''}`} onClick={() =>filter('Photograpy')}>Photography</li>
            </ol>
        </nav>
    )
}

export default Filter
