import React, {useState, useEffect, useRef} from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
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
import Fade from 'react-reveal/Fade';

function Home({posts}) {

  const [selected, setSelected] = useState('All')
  const [display, setDisplay] = useState(0)
  const [goingUp, setGoingUp] = useState(false);
  const [show, setShow] = useState(false)
  const [offset, setOffset] = useState(0);
  const prevScrollY = useRef(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    // clean up code
    // window.removeEventListener('scroll', onScroll);
    // window.addEventListener('scroll', onScroll, { passive: true });
    // return () => window.removeEventListener('scroll', onScroll);


  }, [])

    const filter= (category) => {
        setSelected(category)
    }

  return (
    <div style={{position : 'relative'}}>
      <Navbar />
      <div className={Style.main} >
        <div className={Style.heroBanner}>
          <Image src={heroBanner} layout={'responsive'} height={800}/>
        </div>
        
      </div>
      {/* <div>
        {
          offset > 240 ?
          <Fade bottom when={show}>
            
          </Fade>
          
             : 
          <div className={Style.filter} id="home-filter">
            <Breadcrumb className={Style.breadCrumb} display={display} setDisplay={setDisplay} setSelected={setSelected} setShow={setShow}/>
          </div>
        }
        
      </div> */}
      <div>
        <PortfolioItem style={{zIndex: 99}} data={posts} show={show} className={`mt-4`}/>
      </div>
      <Footer position={'relative'}/>
    </div>
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