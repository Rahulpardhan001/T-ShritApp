import React from 'react'


function Loader() {
  return (
    <div className="absolute flex justify-center items-center z-40  w-full h-full left-0 top-0"
    style={{ backdropFilter: "blur(5px)" }}>
        {/* <div className="loader  flex justify-center mt-3"></div> */}
        <span className="loader"></span>
            </div>
      
    
  )
}

export default Loader
