import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import "./HomePage.scss";
import PostCard from "../../components/PostCard/PostCard";

const HomePage = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  const posts = data?.getPosts || []; // Set posts to an empty array if data or getPosts is undefined

  if (loading) {
    // You can also render a loading indicator here if needed
    return <div>Loading...</div>;
  }

  return (
    <div className="homepage">
      <h1 className="homepage__title"> Recent posts </h1>
      <div className="homepage__cards">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
};

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default HomePage;
