import React from 'react';

const Video = () => {
  // Sample videos data
  const videos = [
    {
      id: 1,
      title: "Starting Your First Garden",
      description: "A beginner's guide to gardening, covering the basics from soil preparation to planting your first seeds.",
      thumbnail: "/path-to-video-thumbnail.jpg", // Replace with your video thumbnail path
      link: "/video/starting-your-first-garden"
    },
    // ... other videos
  ];

  return (
    <div className="video-page">
      <h1>Videos</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={video.title} />
              <h2>{video.title}</h2>
            </a>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
