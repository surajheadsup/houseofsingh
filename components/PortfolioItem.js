import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import * as Style from '../styles/Work.module.css'
import Filter from './WebView/Filter';

function PortfolioItem(props) {
  const [data, setData] = useState(null)
  const [portfolioData, setPortfolioData] = useState(null);
  const [render, setRender] = useState(0)

  useEffect(() => {
    if(portfolioData === null){
        setData(props.data)
        setPortfolioData(props.data)
    }
    console.log('props', props);
  },[render])

  


  let postData;
  if(portfolioData!==null){
    postData = portfolioData.map((item, index) => {

        var str = item.title.split(':');
         
        return (
            <div className={`col-lg-4 col-md-6 col-12`} key={index}>
                <Link href={`/work/${item.postId}/${item.slug}`}>
                    <div className={Style.card}>
                        <div >
                            <img src={item.featuredImage.node.sourceUrl} className={Style.thumbnailImage} 
                                onMouseOver={e => (e.currentTarget.src = item.gif.gifUrl)}
                                onMouseOut={e => (e.currentTarget.src = item.featuredImage.node.sourceUrl)}
                                
                            />
                        </div>
                    <div className={Style.faceButton}>
                            <div className={Style.facePrimary}>
                                <label>{str[0]}</label>
                            </div>
                            <div className={Style.faceSecondary}>
                                <label>{str[1]}</label>
                            </div>
                    </div>
                    </div>
                </Link>
            </div>
        )
      });
  }

  return(
      <>
        <div>
            <Filter portfolioData={portfolioData} setPortfolioData={setPortfolioData} data={props.data} setRender={setRender} selected={props.selected}/>
        </div>
        <div className={Style.main}>
            <div className={`row`}>
                {postData}
            </div>
        </div>
        <div className={Style.moreProjects}>
            <Link href="/work"><label>More Projects</label></Link>
        </div>
      </>
    
  )
}

export default PortfolioItem;
