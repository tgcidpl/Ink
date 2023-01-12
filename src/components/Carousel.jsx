import React, { useState } from "react";
import Swipe from "react-easy-swipe";

function Carousel() {
  const CarouselData = [
    {
      image: "../../src/assets/studioProto.png",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide =
      currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide =
      currentSlide === 0 ? CarouselData.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="container">
      <div className="h-[90vh] flex overflow-hidden">
        {CarouselData.map((slide, index) => {
          return (
            <img
              src={slide.image}
              alt="tattoo photo"
              key={index}
              className={
                index === currentSlide
                  ? "block object-contain mx-auto h-auto w-auto"
                  : "hidden"
              }
            />
          );
        })}
      </div>
      <div className="flex justify-evenly p-4">
        <button onClick={handlePrevSlide} className="text-3xl cursor-pointer">
          Previous
        </button>

        <button onClick={handleNextSlide} className=" text-3xl cursor-pointer">
          Next
        </button>
      </div>

      <div className="flex justify-center">
        {CarouselData.map((element, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-accentColor rounded-full m-2 mb-4 cursor-pointer"
                  : "h-4 w-4 bg-secondaryColor rounded-full m-2 mb-4 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
