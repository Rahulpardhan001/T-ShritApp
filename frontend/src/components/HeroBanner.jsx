import React, { useRef } from "react";
import Slider from "react-slick";
// Import Slick Carousel CSS at the top
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
function HeroBanner() {
  return (
    <>
      <div className='heroBanner flex flex-col md:flex-row justify-between  w-[100%] px-10 py-4'>
        <div className='flex flex-col  leading-loose border-r text-xl w-[30%] '>
            <div className='flex justify-between items-center'>
            <Link>Woman's Fashion</Link>
            <IoIosArrowForward/>
            </div>

            <span className='flex items-center justify-between'>
            <Link>Men's Fashion</Link>
            <IoIosArrowForward/>
            </span>
            <span>
            <Link>Electronics</Link>
            </span>

            <span>
            <Link>Home & LifeStyle</Link>
            </span>
            <span>
            <Link>Medicine</Link>
            </span>
            <span>
            <Link>Sports & Outdoor</Link>
            </span>
            <span>
            <Link>Baby's & Toys</Link>
            </span>
            <span>
            <Link>Groceries & Pets</Link>
            </span>
            <span>
            <Link>Health & Beauty</Link>
            </span>
          
        </div>
        <div className='flex items-center p-8 col-span-1 lg:col-span-3  w-[70%] '>
            {/* <img src="../src/assets/img/Frame 560.png" alt="" /> */}
            <AutoPlayMethods/>
        </div>
      </div>
    </>
  )
}

export default HeroBanner



function AutoPlayMethods() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="slider-container w-[100%]">
      <Slider className="" ref={slider => (sliderRef = slider)} {...settings}>
        <div className="h-96 w-full">
            <img className="h-full w-full" src="../src/assets/img/Frame 560.png" alt="" />
        </div>
        <div className="h-96 w-full">
        <img className="h-full w-full" src="../src/assets/img/imageB1.png" alt="" />
        </div>
        <div className="h-96 w-full">
        <img className="h-full w-full" src="../src/assets/img/imageB2.png" alt="" />
        </div>
        <div className="h-96 w-full">
        <img className="h-full w-full" src="../src/assets/img/imageB3.png" alt="" />

        </div>

      </Slider>
      {/* <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div> */}
    </div>
  );
}

