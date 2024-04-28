import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'gardening',
            apiKey: 'd6ffc9b586ad4e46944db8aa0a7c2922',
          },
        });

        if (response.data.articles) {
          const posts = response.data.articles.map(article => ({
            id: article.source.id,
            title: article.title,
            summary: article.description,
            thumbnail: article.urlToImage,
            link: article.url,
          }));
          setBlogPosts(posts);
        } else {
          setError('No articles found.');
        }
      } catch (error) {
        setError('Error fetching blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
