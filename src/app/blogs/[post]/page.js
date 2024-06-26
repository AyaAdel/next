"use client"; // This is a client component

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Post({ params: { post } }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const generatePost = () => {};

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post}`)
      .then((res) => {
        console.log({ res: res.data });
        setData(res.data);
      })
      .catch((err) => console.log({ err }))
      .finally(() => {
        setIsLoading(false);
      });
  }, [post]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="post-wrapper">
      <div className="post-container">
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    </div>
  );
}
