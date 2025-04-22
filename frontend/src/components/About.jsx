import React from "react";
import { IMAGES } from "../assets/ImageGallary/images";

const About = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={IMAGES.SLIDE_IMG3}
            alt="Ecommerce about"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Store</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <span className="font-semibold text-blue-600">ShopEase</span>, we're passionate about delivering high-quality products
            with unbeatable convenience. From daily essentials to premium gadgets, we curate only the best for our customers.
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li>✅ Wide range of products for every lifestyle</li>
            <li>✅ Fast delivery & secure checkout</li>
            <li>✅ Exceptional customer support</li>
            <li>✅ Trusted by thousands of happy customers</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-200">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
