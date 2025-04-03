import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IMAGES } from "../assets/ImageGallary/images";

function HeroBanner() {
  return (
    <div className='heroBanner flex flex-col md:flex-row justify-between w-full px-6 md:px-10 py-6'>
      {/* Category Sidebar */}
      <div className='flex flex-col space-y-3 text-lg md:text-xl w-full md:w-1/4 border-r pr-4'>
        {[
          "Woman's Fashion",
          "Men's Fashion",
          "Electronics",
          "Home & Lifestyle",
          "Medicine",
          "Sports & Outdoor",
          "Baby's & Toys",
          "Groceries & Pets",
          "Health & Beauty"
        ].map((category, index) => (
          <div key={index} className='flex justify-between items-center hover:text-blue-500 transition duration-300 cursor-pointer'>
            <Link>{category}</Link>
            {index < 2 && <IoIosArrowForward />}
          </div>
        ))}
      </div>

      {/* Image Slider */}
      <div className='w-full md:w-3/4 flex items-center p-4'>
        <AutoPlaySlider />
      </div>
    </div>
  );
}

export default HeroBanner;

function AutoPlaySlider() {
  const sliderRef = useRef(null);
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div className='w-full rounded-lg overflow-hidden shadow-lg'>
      <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
        {[IMAGES.SLIDE_IMG1,IMAGES.SLIDE_IMG2, IMAGES.SLIDE_IMG3, IMAGES.SLIDE_IMG4,IMAGES.SLIDE_IMG5].map((img, index) => (
          <div key={index} className='h-64 md:h-96 w-full'>
            <img className='h-full w-full object-cover rounded-lg' src={`../src/assets/img/${img}`} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}


