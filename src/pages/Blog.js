import React from 'react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Joy of Container Gardening",
      summary: "Discover the versatility of container gardening. Perfect for urban dwellers, this post explores how you can grow a lush garden in small spaces.",
      thumbnail: "/path-to-thumbnail.jpg", // Replace with your thumbnail path
      link: "/blog/the-joy-of-container-gardening"
    },
    // ... other blog posts
  ];

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <Link to={post.link}>
              <img src={post.thumbnail} alt={post.title} />
              <h2>{post.title}</h2>
            </Link>
            <p>{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
