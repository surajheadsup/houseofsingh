import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import * as Constants from "../constants/constants";
import parse from 'html-react-parser';
import Navbar from "../components/Navbar";
import Link from "next/link";
import * as Style from '../styles/Journals.module.scss'

function Journal({journals}) {
    const [data, setData] = useState(null);
    const [timelineData, setTimelineData] = useState(null);
  useEffect(() => {
    // console.log('journal', journals)

    if(timelineData === null){
        setTimelineData(journals);
    }
  }, []);

  console.log('timelineData', timelineData);
  let journal;

  if(timelineData!==null){
    journal = timelineData.map((item, index) => {
        return (
            <li key={index}>
                <Link href={`/journal/${item.slug}`}>
                  <div className={Style.singleJournal}>
                      <div className={Style.thumbnail}>
                          <img src={item.featuredImage.node.sourceUrl} className={Style.thumbnailImage} />
                      </div>
                      <div className={Style.displayDate}>
                          <label>{item.timeline.displayDate}</label>
                      </div>
                      
                  </div>
                </Link>
            </li>
        )
    })
  }


  return <>
    <Navbar/>
    <div className={`${Style.journals}`}>
        <ul>
            {journal}
        </ul>
    </div>
  </>
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: Constants.getPortfolio,
    cache: new InMemoryCache(),
  });
  const response = await client.query({
    query: gql`
      query GetPosts {
        posts(where: {categoryId: 6, orderby: {field: DATE, order: ASC}}, first: 10) {
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
            timeline {
                fieldGroupName
                shortDescription
                mainImage {
                  sourceUrl
                }
                displayDate
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
  const journals = response.data.posts.nodes;
  return {
    props: {
      journals: journals,
    },
    revalidate: 60,
  };
}

export default Journal;
