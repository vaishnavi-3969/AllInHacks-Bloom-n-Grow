import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from './Footer';

export const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Joy of Container Gardening",
      summary: "Discover the versatility of container gardening. Perfect for urban dwellers, this post explores how you can grow a lush garden in small spaces.",
      thumbnail: "/blog1.jpg", // Replace with your thumbnail path
      link: "/blog/the-joy-of-container-gardening",
      authorPicture: "/path-to-author-picture.jpg", // Replace with your author picture path
      author: "Author Name", // Replace with the author's name
      content: "Here is the main content of the post...", // Replace with the main content of the post
      description: "A brief description of the post..." // Replace with the post description
    },
    {
        id: 2,
        title: "Organic Pest Control Techniques",
        summary: "Learn about natural ways to keep pests at bay without the use of harmful chemicals. This guide offers eco-friendly solutions for a healthy garden.",
        thumbnail: "/blog2.jpg", // Replace with your thumbnail path
        link: "/blog/organic-pest-control-techniques",
        authorPicture: "/path-to-author-picture.jpg", // Replace with your author picture path
        author: "Author Name", // Replace with the author's name
        content: "Here is the main content of the post...", // Replace with the main content of the post
        description: "A brief description of the post..." // Replace with the post description
      },
      {
        id: 3,
        title: "Composting: Black Gold for Your Garden",
        summary: "Turn your kitchen scraps into nutrient-rich compost. This post provides a step-by-step guide to starting your own compost pile.",
        thumbnail: "/blog3.jpg", // Replace with your thumbnail path
        link: "/blog/black-gold-for-your-garden",
        authorPicture: "/path-to-author-picture.jpg", // Replace with your author picture path
        author: "Author Name", // Replace with the author's name
        content: "Here is the main content of the post...", // Replace with the main content of the post
        description: "A brief description of the post..." // Replace with the post description
      },
    // ... other blog posts
  ];

  // Add state to handle comments visibility
  const [selectedPostId, setSelectedPostId] = React.useState(null);
  const [showComments, setShowComments] = React.useState(false);

  // Function to handle selecting a post
  const handleSelectPost = (id) => {
    setSelectedPostId(id);
    setShowComments(!showComments);
  };

  return (
    <>
        <Header />
        <div className="blog-page">
            <h1 className="text-4xl mb-8">Blog</h1>
            <div className="blog-posts">
                {blogPosts.map((post) => (
                <div key={post.id} className="p-6 mb-6 border border-gray-300 rounded-md">
                    {/* Header Section */}
                    <div className="flex items-center mb-4">
                    <img src={post.thumbnail} alt={post.title} className="w-10 h-10 mr-3 rounded-full" />
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    </div>

                    {/* Description Text */}
                    <p className="text-lg mb-4">{post.summary}</p>

                    {/* Link to full blog post */}
                    <Link to={post.link} className="text-blue-600 hover:underline mb-4 block">
                    Read more
                    </Link>

                    {/* Show/Hide Comments button */}
                    <button
                    className="px-4 py-2 text-gray-700 transition duration-300 bg-gray-200 rounded-md hover:bg-gray-300"
                    onClick={() => handleSelectPost(post.id)}
                    >
                    {selectedPostId === post.id && showComments ? 'Hide Comments' : 'Show Comments'}
                    </button>
                </div>
                ))}
            </div>
        </div>
        <Footer />
    </>
  );
};

export default Blog;
