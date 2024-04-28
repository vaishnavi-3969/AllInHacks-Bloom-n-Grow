import React from 'react';

const Video = () => {
    // Sample videos data
    const videos = [
    {
        id: 1,
        title: "Gardening Masterclass: How a Gardening Pro Grows Veggies",
        description: "You are going to love this tour of the Daylesford Organic market garden in Gloucestershire, ...",
        videoId: "UiaI8xD9h60", // YouTube video ID
        link: "https://www.youtube.com/watch?v=UiaI8xD9h60" // YouTube video link
    },
    {
        id: 2,
        title: "Composting Masterclass with Monty Don",
        description: "The real superpower of compost is that it gives life to soil. Compost is made from material that is digested by organisms and ...",
        videoId: "r4YThQXM_54", // YouTube video ID
        link: "https://www.youtube.com/watch?v=r4YThQXM_54" // YouTube video link
    },
    {
        id: 3,
        title: "Garden Masterclass LIVE with Tanya Visser",
        description: "Get ready to bloom this season 🌿🌸 Join our Facebook live event on the 20th to learn about the magic of winter bulbs and spring flower bulbs. Discover the secrets to growing a beautiful garden all year round.",
        videoId: "hAKMqZYHYsI", // YouTube video ID
        link: "https://www.youtube.com/watch/hAKMqZYHYsI" // YouTube video link
    },
    {
        id: 4,
        title: "Tanya Visser Shows You How To Grow Healthy Veg The Natural Way ",
        description: "Find out some of the best tricks on how to grow healthy veggies and herbs with Tanya Visser ...",
        videoId: "HUIwu68NUrU", // YouTube video ID
        link: "https://www.youtube.com/watch/HUIwu68NUrU" // YouTube video link
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
                {/* Use YouTube's default thumbnail */}
                <img src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`} alt={video.title} />
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
  
