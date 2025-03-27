import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DetailPage() {
  return (
    <section>
      <div className="main flex justify-content-between ">
      {/* left side */}
        <div className="left w-[40%]">
          <SliderDetail />
        </div>

        {/*********** right side *********/}
        <div className="right ps-10 pt-2 w-[60%]">
          <h3 className="text-sky-700 text-sm font-medium">
            MINIMAL WOMEN COLLECTION
          </h3>
          <h2 className="text-2xl font-bold leading-11">
            Light Gray Top for Women
          </h2>
          <h5 className="font-light">
            $56 <span className="text-red-600 font-bold">OFF</span>
          </h5>
          <h3 className="font-bold text-2xl leading-12 ">$40</h3>
          {/* size info */}
          <div className="size-info mt-4">
            <div className="size flex gap-x-28 pb-3">
              <div className="text-sm text-gray-500 font-medium">
                SELECT SIZE
              </div>
              <div className="text-sm font-medium text-sky-700">Size Chart</div>
            </div>
            {/* size icons  */}
            <div className="flex gap-5">
            <Selectsize size="s"/>
          <Selectsize size="M"/>
          <Selectsize size="L"/>
          <Selectsize size="XL"/>
            </div>
          </div>

          {/* button div */}
            <div className="flex flex-col md:flex-row gap-5 pt-4 ">
            <span className="border w-32 text-center rounded p-3 bg-gray-500 text-white text-sm font-bold tracking-widest cursor-pointer "> Wishlist </span>
            <span className="border w-32 text-center rounded p-3 bg-sky-700 text-white text-sm font-bold tracking-wide cursor-pointer"> ADD TO CART </span>
            </div>

            {/* description */}
            <div className="leading-14">
                <h2 className="font-bold text-slate-400">Product Details</h2>
                <p className="text-xl font-medium w-50 md:w-100">Light Gray Solid Top, has a boad neck</p>
            </div>

            {/* Material detail */}
            <h2 className="font-bold text-slate-400">Material & Care</h2>
            <ul>
                <li>Cotton</li>
                <li>Machine-wash</li>
            </ul>
        </div>
      </div>
    </section>
  );
}

export default DetailPage;

function SliderDetail() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
        <div className="p-2 w-24 h-100 md:h-100 md:w-32">
          <img
            className="w-full h-full object-fit-cover "
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div className="p-2 w-32 h-100">
          <img
            className="w-full h-full object-fit-cover "
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
            alt=""
          />
        </div>
        <div className=" p-2 w-32 h-100">
          <img
            className="w-full h-full object-fit-cover "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
            alt=""
          />
        </div>
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div className="p-2 w-24 h-32">
          <img
            className="w-full h-full object-fit-cover"
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div className="p-2 w-24 h-32">
          <img
            className="w-full h-full object-fit-cover"
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
            alt=""
          />
        </div>
        <div className="p-2 w-24 h-32">
          <img
            className="w-full h-full object-fit-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}



function Selectsize(props) {
  return (
    <>
        <div className="w-8 h-8  border rounded-full  flex justify-center  items-center bg-sky-700 text-white leading-20 ">
              <span className="font-bold">{props.size}</span>
            </div>
    </>
  )
}


