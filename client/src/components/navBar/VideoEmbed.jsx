import React from 'react';
import YouTube from 'react-youtube';

const VideoEmbed = () => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="relative max-w-full w-full mx-auto my-10 rounded-lg border border-darkBlue overflow-hidden">
      {/* YouTube video container */}
      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
        <YouTube
          videoId="deEvao7IgsM"
          opts={opts}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default VideoEmbed;
