import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(10);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'container gardening',
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

  const handleShowMore = () => {
    setVisiblePosts(prevCount => prevCount + 10);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="blog-page text-white p-6">
      <h1 className="text-3xl font-semibold mb-8">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, visiblePosts).map((post) => (
          <div key={post.id} className="blog-post bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <Link to={post.link} className="block">
              <img src={post.thumbnail} alt={post.title} className="w-full h-auto" />
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                <Link to={post.link} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
      {blogPosts.length > visiblePosts && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-8 hover:bg-blue-600"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Blogs;
