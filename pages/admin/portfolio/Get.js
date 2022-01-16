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
import Navbar from "../../../components/Navbar";
import axios from "axios";


const Blog = () => {
  const router = useRouter();
  const [content, setContent] = useState(null)
  useEffect(() => {
    getposts()
  }, []);


  const getposts = () => {
    axios
      .get(`http://15.223.68.75/wp-json/wp/v2/posts/11`, {})
      .then(res => {
          const data = res.data
          console.log(data)
          const content = parse(data.content.rendered)
            setContent(content)
        })
        .catch((error) => {
            console.log(error)
        })
  }

  return (
    <>
        <Navbar />
      <div className="container">
        <section className="pt-5 pb-3 main">
        </section>
        <section className="pb-5">
            {content}
        </section>
      </div>
    </>
  );
};

export default Blog;
