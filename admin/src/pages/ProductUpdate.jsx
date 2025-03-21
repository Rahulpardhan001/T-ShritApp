import React, { useEffect, useState } from "react";
import CustomInput, { CustomImage } from "../components/CustomInput";
import { AiFillProduct } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProduct,
  GetSingleProduct,
  UpdateProduct,
} from "../Thunk/ProductThunk";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../assets/Loader/Loading";

function ProductUpdate() {
  // const navigate = useNavigate()
  const { products, isLoading } = useSelector((state) => state.Product);
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id,"single product data")
  //  console.log(Product,"product list")
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
    brandName: "",
    stock: "",
    image: [],
  });
  // const [preview, setPreview] = useState([]);
  useEffect(() => {
    dispatch(GetSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    // debugger;
    if (products) {
      setFormData((prev) => ({
        ...prev,
        productName: products.productName || "",
        description: products.description || "",
        price: products.price || "",
        category: products.category || "",
        brandName: products.brandName || "",
        stock: products.stock || "",
        image: products.image || [],
      }));
    }
  }, [products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const handleImageChange = (e) => {
  //   const file = e.target.files;
  //   const finalFile = Array.from(file);
  //   setFormData((pre) => ({
  //     ...pre,
  //     image:pre?.image?.length>0? [...pre?.image, ...finalFile].slice(0, 4):[ ...finalFile].slice(0, 4),
  //   }));
  // };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      image: [...prev.image, ...files], // Append new images
    }));
  };

  // console.log(formData.image,"my image is")
  const handleDeleteImage = (id) => {
    setFormData((prev) => ({
      ...prev,
      image: prev.image.filter((img, i) => i !== id),
    }));
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    // debugger;
    console.log(formData, "Data");

    const formDatas = new FormData();
    formDatas.append("productName", formData.productName);
    formDatas.append("description", formData.description);
    formDatas.append("price", formData.price);
    formDatas.append("category", formData.category);
    formDatas.append("brandName", formData.brandName);
    formDatas.append("stock", formData.stock);

    formData.image.forEach((img) => {
      formDatas.append("image", img);
    });
    // console.log(formDatas,"datas form ka hai")
    const res = await dispatch(UpdateProduct({ id, formDatas }));
    //  console.log(res,"update res")
    if (res.payload.success === true) {
      navigate("/");
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <section>
        <div className=" shadow ">
          <div className="flex justify-center ">
            <h2 className="text-2xl font-light p-2 flex items-center gap-4">
              <AiFillProduct /> PRODUCT Update
            </h2>
          </div>
          <form className="p-7" onSubmit={submitHandle}>
            {/******************* Product Input   ********************/}
            <CustomInput
              labelText="Product Name"
              inputName="productName"
              inputType="text"
              inputPlaceholder="Enter productName"
              value={formData.productName}
              inputChange={handleChange}
              icon={<span className="text-red-500">*</span>}
            />
            {/**************** description Input ****************/}
            <CustomInput
              labelText="Description"
              inputName="description"
              inputType="text"
              inputPlaceholder="Enter Description"
              value={formData.description}
              inputChange={handleChange}
              icon={<span className="text-red-500">*</span>}
            />
            {/******************* Price Input********************/}
            <CustomInput
              labelText="Price"
              inputName="price"
              inputType="number"
              inputPlaceholder="Enter price"
              value={formData.price}
              inputChange={handleChange}
              icon={<span className="text-red-500">*</span>}
            />
            {/******************* Categroy  ********************/}
            <CustomInput
              labelText="Category"
              inputName="category"
              inputType="text"
              inputPlaceholder="Enter category"
              value={formData.category}
              inputChange={handleChange}
              icon={<span className="text-red-500">*</span>}
            />
            {/****************** Brand Name ********************/}
            <CustomInput
              labelText="Brand Name"
              inputName="brandName"
              inputType="text"
              inputPlaceholder="Enter brandName"
              value={formData.brandName}
              inputChange={handleChange}
              icon={<span className="text-red-500">*</span>}
            />
            {/******************* Stock  ********************/}
            <CustomInput
              labelText="Stock"
              inputName="stock"
              inputType="number"
              inputPlaceholder="Enter stock"
              value={formData.stock}
              inputChange={handleChange}
              icon={<span className="text-red-500">*</span>}
            />
            <CustomImage
              labelText="Image"
              inputName="image"
              inputType="file"
              value={formData.image}
              inputChange={handleImageChange}
              // imagePreview={preview}
              icon={<span className="text-red-500">*</span>}
            />

            <div className="flex flex-wrap gap-3">
              {formData.image &&
                formData.image.map((img, index) => {
                  // Check if the image is a File object or a URL
                  const imgUrl =
                    img instanceof File ? URL.createObjectURL(img) : img;

                  return (
                    <div key={index} className="relative">
                      <img
                        src={imgUrl}
                        alt={`Preview ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(index)}
                        className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm"
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
            </div>

            <div className=" max-w-[80%] text-center pt-3">
              <button
                type="submit"
                className="w-[30%]  p-2 font-bold text-white bg-green-700 rounded  text-center cursor-pointer hover:bg-green-600"
              >
                updated
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ProductUpdate;
