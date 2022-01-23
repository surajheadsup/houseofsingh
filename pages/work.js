import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as Constants from "../constants/constants";
import Style from '../styles/Work.module.css'
import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";
import Navbar2 from "../components/SecondNavbar";
import Link from "next/link";
import Image from 'next/image';
import Filter from "../components/WebView/Filter";

const Work = ({ posts }) => {
  const router = useRouter();
  const [data, setData] = useState(null)
  const [portfolioData, setPortfolioData] = useState(null);
  const [render, setRender] = useState(0)
  
  useEffect(() => {
    if(portfolioData === null){
        setData(posts)
        setPortfolioData(posts)
    }
  }, [render]);


  const navigate = () => {

  }



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

  return (
    <>
        <Navbar2/>
        <div>
            <Filter portfolioData={portfolioData} setPortfolioData={setPortfolioData} data={data} setRender={setRender}/>
        </div>
        <div className={Style.main}>
            <div className={`row`}>
                {postData}
            </div>
        </div>
    </>
  );
};

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

export default Work;
