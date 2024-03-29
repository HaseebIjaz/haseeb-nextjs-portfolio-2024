import React,{useState} from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {

  // const [count,setCount] =  useState(0);
  // const onClick = () => {
  //   setCount((prev) => {
  //     return count + 1;
  //   })
  // }
  // const getColorOfCount = () => {
  //   if(count % 3 === 0){
  //     return "bg-red-600";
  //   }
  //   else if(count % 3 === 1){
  //     return "bg-green-600"
  //   }
  //   else if(count % 3 ===2)
  //   {
  //     return "bg-blue-600"
  //   }
  // } 
  return (
    <div>
      {/* <button onClick={onClick} className={`w-[100px] h-[100px]  ${getColorOfCount()}`}>{count}</button> */}
      <div
        className="relative h-52 md:h-72 rounded-t-xl group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <a
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </a>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
