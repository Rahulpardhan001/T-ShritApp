import React from "react";
import Lottie from "lottie-react";
import loaderData from "./Loader.json";

const Loading = () => {
  return (
    <div
      className="absolute flex justify-center items-center z-40  w-full h-full left-0 top-0"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <Lottie
       animationData={loaderData}
        loop={true}
        color="red"
        className="animation-container w-90 "
         />
    </div>
  );
};

export default Loading;
