"use client"; // This is a client component

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const generateBlogs = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.log({ err }))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    generateBlogs();
  }, []);

  if (isLoading) return <span>Loading...</span>;

  return (
    <div className="blog-wrapper">
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div className="blog-container" key={blog?.id}>
          <h2>
            <Link href={`/blog/${blog?.id}`}>{blog?.title}</Link>
          </h2>
          <p>{blog?.body}</p>
        </div>
      ))}
    </div>
  );
}
