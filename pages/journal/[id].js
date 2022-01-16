import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import parse from 'html-react-parser';
import Navbar from "../../components/Navbar";
import * as Constants from '../../constants/constants'
import * as Style from '../../styles/SingleJournal.module.scss'

const SingleJournal = ({post}) => {
  const router = useRouter();
  var id = router.query.id;
  useEffect(() => {
    console.log('id', post);
  }, []);


  return (
    <>
        <Navbar />
      <div className="container">
        <div className="pt-3">
          <div className="row">
            <div className="col-lg-6 col-12">
              <img src={post.timeline.mainImage.sourceUrl} className={`w-100`}/>
            </div>
            <div className="col-lg-6 col-12">
              <div className={`${Style.parent}`}>
                <div className={``}>
                  <h1>{post.title}</h1>
                  <label className={`w-100 ${Style.shortDescription}`}>{post.timeline.shortDescription}</label>
                  <label className={`w-100 ${Style.displayDate}`}>{post.timeline.displayDate}</label>
                </div>
                <div className={`${Style.navigation}`}>
                    <div className={`${Style.icons}`}>
                      <label><i className="fas fa-chevron-left"/></label>
                      <label><i className="fas fa-chevron-right"/></label>
                    </div>
                </div>   
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getStaticProps({ params }) {
  const { id } = params;

  const client = new ApolloClient({
    uri: Constants.getPortfolio,
    cache: new InMemoryCache(),
  });
  const response = await client.query({
    query: gql`
      {
        post(
          id: "${id}"
          idType: SLUG
        ) {
          id
          uri
          title
          slug
          postId
          timeline {
            displayDate
            fieldGroupName
            mainImage {
              sourceUrl
            }
            shortDescription
          }
        }
      }
    `,
  });
  const posts = response.data.post;
  return {
    props: {
      post: posts,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = [];

  return { paths, fallback: "blocking" };
}

export default SingleJournal;
