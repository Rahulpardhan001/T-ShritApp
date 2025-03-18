import React from "react";
import { PiFileArrowUp } from "react-icons/pi";
function CustomInput(props) {
  const {
    inputType = "text",
    inputPlaceholder,
    inputName,
    ids,
    inputChange,
    labelText,
    icon,

    value
  } = props;
  return (
    <div className="flex flex-col gap-3 my-2">
      <label htmlFor={inputName} className="flex gap-1 font-medium">
        {labelText}
        
         {icon}
      </label>
      {
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          name={inputName}
          id={ids}
          value={inputType!=="file"?value:""}
          onChange={inputChange}
          className="border border-gray-400 p-2 max-w-[80%]"
        />
      }
     
     
    </div>
  );
}

export default CustomInput;


export const CustomImage =(props)=>{
const { inputType = "text",
inputPlaceholder,
inputName,
ids,
inputChange,
labelText,
icon,
imagePreview,
value}= props;

return(
  <div className="relative flex flex-col gap-3 my-2">
    <label htmlFor={inputName} className="flex gap-1 font-medium">
        {labelText}
        
         {icon}
      </label>
     <div className="absolute top-11 left-4 opacity-0 inline">
     {
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          name={inputName}
          id={ids}
          value={inputType!=="file"?value:""}
          onChange={inputChange}
          className="border border-gray-400 p-2 max-w-[20%] h-[10vh]"
        />

      }
    
     </div>
      <div className="flex justify-center text-8xl border border-dashed w-[6vw]  ps-0">
        <PiFileArrowUp  className="" />
      </div>
      {imagePreview && (
            <span className="mt-3 ">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-16 h-16 object-cover rounded"
              />
              
            </span>
          )}
  </div>
)
}