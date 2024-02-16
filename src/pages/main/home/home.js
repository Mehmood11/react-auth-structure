import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const posts = useLoaderData();
  return (
    <div>
      {posts.map((item) => (
        <div key={item.userId}>{item.title}</div>
      ))}
    </div>
  );
};

export default Home;
