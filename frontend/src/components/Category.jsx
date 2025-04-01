import React from 'react';

const categories = [
  { name: "Phones", img: "../src/assets/img/categoryImg/Category-CellPhone.png" },
  { name: "Computers", img: "../src/assets/img/categoryImg/Category-Computer.png" },
  { name: "SmartWatch", img: "../src/assets/img/categoryImg/Category-SmartWatch.png" },
  { name: "Camera", img: "../src/assets/img/categoryImg/Category-Camera.png" },
  { name: "HeadPhones", img: "../src/assets/img/categoryImg/Category-HeadPhone.png" },
  { name: "Gaming", img: "../src/assets/img/categoryImg/Category-Gamepad.png" }
];

const CategoryItem = ({ name, img }) => (
  <div className="flex justify-center">
    <div className="border flex flex-col items-center px-12 py-8 text-center rounded w-40 hover:bg-red-600 hover:text-white hover:shadow-xl hover:scale-105 transition duration-700 ease-in-out">
      <img src={img} alt={name} className="mb-2" />
      <h3>{name}</h3>
    </div>
  </div>
);

function Category() {
  return (
    <div className="containers px-16">
      <div className="maincont mb-12">
        <div className="flex gap-5 items-center">
          <div className="bg-button2 w-5 h-10 rounded"></div>
          <h3 className="text-button2 font-bold">Categories</h3>
        </div>
        <h2 className="font-bold text-3xl text-text2 mt-5">Browse By Category</h2>

        <div className="categoryBottomImg mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {categories.map((category, index) => (
            <CategoryItem key={index} name={category.name} img={category.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
