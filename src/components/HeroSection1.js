import UserButton from "./UserButton";
import "./Herosection.css";

import React, { useEffect, useState, useRef } from "react";

const HeroSection1 = () => {
  const video1 = "https://www.w3schools.com/tags/movie.mp4";
  const video2 =
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
  const video3 =
    "https://player.vimeo.com/external/250688977.sd.mp4?s=d14b1f1a971dde13c79d6e436b88a6a928dfe26b&profile_id=165";
  const video4 = "https://www.youtube.com/embed/W-f6F2gxrl4";

  const videos = [video1, video2, video3, video4];
  const [vidIndex, setVidIndex] = useState(0);
  const refs = useRef(videos.map(() => null)); // Initialize refs as an array of nulls

  useEffect(() => {
    const playCurrentVideo = () => {
      if (refs.current[vidIndex]) {
        const playPromise = refs.current[vidIndex].play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
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
    console.log(`vedio ${index} press hai bhai`);
    setVidIndex(index);
  };

  return (
    <div className="pt-10 m-auto pb-20">
      <div className="flex flex-wrap mt-10 gap-32 justify-center">
        <div className=" ">
          <UserButton ind="0" handleClick={() => handleClick(0)}>
            Play Video 1
          </UserButton>
        </div>
        <div className="">
          <UserButton ind="1" handleClick={() => handleClick(1)}>
            Play Video 2
          </UserButton>
        </div>
        <div className="">
          <UserButton ind="2" handleClick={() => handleClick(2)}>
            Play Video 3
          </UserButton>
        </div>
        <div className="">
          <UserButton ind="3" handleClick={() => handleClick(3)}>
            Play Video 4
          </UserButton>
        </div>
      </div>

    
      <div className="hero-container mt-20 pt-16 flex max-md:flex-col">
        <div className=" relative h-[22rem] w-[45rem] max-md:w-[90%]  my-auto p-7 max-md:ml-0">
          {videos.map((src, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full max-md:w-[55%]  ml-20 max-md:h-[75%]  ${
                vidIndex === index ? "active" : ""
              }`}
            >
              {index === vidIndex && (
                <>
                  {index === 0 || index === 1 ? (
                    <video
                      className="video"
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

        <div className="w-4/12">
          <div className="absolute bottom-24 right-80 max-md:left-12 max-md:-bottom-10 ">
            <UserButton>Get Started</UserButton>
          </div>

          {/* <UserButton>Get Started</UserButton> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
