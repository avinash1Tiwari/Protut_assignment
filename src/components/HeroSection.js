import UserButton from "./UserButton";
import './Herosection.css'

import React, { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const video1 = "https://www.w3schools.com/tags/movie.mp4";
  const video2 =
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
  const video3 = "https://www.youtube.com/embed/FuIBFJpgfu8";
  const video4 = "https://www.youtube.com/embed/W-f6F2gxrl4";

  const videos = [video1, video2, video3, video4];
  const [vidIndex, setVidIndex] = useState(0);
  const refs = useRef(videos.map(() => null)); // Initialize refs as an array of nulls

  useEffect(() => {
    const playCurrentVideo = () => {
      if (refs.current[vidIndex]) {
        const playPromise = refs.current[vidIndex].play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Autoplay was prevented, handle it here
            console.error("Autoplay was prevented:", error);
          });
        }
      }
    };

    playCurrentVideo();

    return () => {
      if (refs.current[vidIndex]) {
        refs.current[vidIndex].pause();
      }
    };
  }, [vidIndex]);

  const handleClick = (index) => {
    console.log("vedio press hai bhai")
    setVidIndex(index);
  };

  return (
    <div className='pt-10 w-6/12 m-auto pb-28'>
        <div>
            <h3 className="text-white text-center text-2xl">Here's How it works</h3>
        </div>
    <div className="hero-container mt-20 pt-16">
      <div className="relative mx-0 my-auto w-full h-96 max-md:h-86
   ">
        {videos.map((src, index) => (
          <div key={index} className={`absolute top-0 left-0 w-full h-full max-md:w-[75%] max-md:h-[75%] max-md:-left-12 max-md:top-7  ${vidIndex === index ? "active" : ""}`}>
            {index === vidIndex && (
              <>
                {index === 0 || index === 1 ? (
                  <video
                    className="video w-60 max-md:m-auto"
                    src={src}
                    autoPlay={false}
                    muted
                    loop
                    ref={(el) => (refs.current[index] = el)}
                  />
                ) : (
                  <iframe
                    className="video"
                    src={src}
                    title={`Video ${index}`}
                    frameBorder="0"
                    allowFullScreen
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <div className="absolute -left-20 -top-2">
      <UserButton ind="0" onClick={() => handleClick(0)}>Play Video 1</UserButton>
      </div>
      <div className="absolute -right-20 -top-2">
      <UserButton ind="1" handleClick={() => handleClick(1)}>Play Video 2</UserButton>

      </div>
      <div className="absolute -left-20 -bottom-16">
      <UserButton ind="2" handleClick={() => handleClick(2)}>Play Video 3</UserButton>

      </div>
      <div className="absolute -right-20 -bottom-16">
      <UserButton ind="3" handleClick={() => handleClick(3)}>Play Video 4</UserButton>

      </div>
    </div>
    </div>
  );
};

export default HeroSection;  
