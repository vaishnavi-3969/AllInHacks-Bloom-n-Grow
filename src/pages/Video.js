import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: 'gardening',
            type: 'video',
            maxResults: 10, 
            key: 'AIzaSyCb9fb_lhkKM48QagBcfX8uqIBbtlLQJ_E',
          },
        });

        const videosData = response.data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.medium.url,
          link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));

        setVideos(videosData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-[#DAD7CD] text-black rounded-lg shadow-lg overflow-hidden">
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
            </a>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
              <p className="text-gray-700">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
