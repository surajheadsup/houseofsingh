import React, {useState, useEffect} from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Navbar from '../components/Navbar'
import * as Style from '../styles/Home.module.css'
import Image from 'next/image';
import heroBanner from '../public/images/heroBanner.jpg'
import * as Session from '../storage/storage'
import * as Constants from '../constants/constants'
import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";
import PortfolioItem from '../components/PortfolioItem';


function Home({posts}) {

  const [selected, setSelected] = useState('All')
  const [display, setDisplay] = useState(0)
  
  useEffect(() => {
    
  }, [display, selected])

    const filter= (category) => {
        setSelected(category)
    }

  return (
    <>
      <Navbar />
      <div className={Style.main}>
        <div className={Style.heroBanner}>
          <Image src={heroBanner} layout={'responsive'} height={800}/>
        </div>
        <div className={Style.filter} id="home-filter">
          <div>
            {
              display === 0 ?
                <Breadcrumb className={Style.breadCrumb} display={display} setDisplay={setDisplay} setSelected={setSelected}/>
              :<>
                {/* <nav aria-label="breadcrumb" className={Style.filter1}>
                  <ol className="breadcrumb">
                      <li className={`breadcrumb-item hover ${selected==='All'? 'portfolio-filter-active': ''}`} onClick={() =>filter('All')}>All</li>
                      <li className={`breadcrumb-item hover ${selected==='Art'? 'portfolio-filter-active': ''}`} onClick={() =>filter('Art')}>Art</li>
                      <li className={`breadcrumb-item hover ${selected==='Design'? 'portfolio-filter-active': ''}`} onClick={() =>filter('Design')}>Design</li>
                      <li className={`breadcrumb-item hover ${selected==='Photograpy'? 'portfolio-filter-active': ''}`} onClick={() =>filter('Photograpy')}>Photography</li>
                  </ol>
                </nav>
                 */}
                </>
            }
            
            
          </div>
        </div>
      </div>
      <div >
        <PortfolioItem data={posts} selected={selected} setSelected={setSelected} />
      </div>
    </>
  )
}


export async function getStaticProps() {
  const client = new ApolloClient({
    uri: Constants.getPortfolio,
    cache: new InMemoryCache(),
  });
  const response = await client.query({
    query: gql`
      query GetPosts {
        posts(where: {categoryNotIn: 6}) {
          nodes {
            __typename
            id
            title
            categories {
              edges {
                node {
                  id
                  name
                }
              }
            }
            content
            date
            slug
            uri
            gif {
                gifUrl
            }
            status
            featuredImageId
            featuredImageDatabaseId
            featuredImage {
              node {
                sourceUrl
              }
            }
            postId
          }
        }
      }
    `,
  });
  const posts = response.data.posts.nodes;
  return {
    props: {
      posts: posts,
    },
    revalidate: 10
  };
}

export default Home;