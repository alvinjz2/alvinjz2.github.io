import React from "react";
import GoodReadsImage from "../media/GoodReadsIcon.png";

export default function GoodReadsIcon(props) {
  return (
    <div class="pt-8 translate-y-[1px] ml-[2px]">
      <a rel="noopener noreferrer" target="_blank" href={props.link}>
        <button class="flex overflow-visible bg-white shadow-md rounded-md hover:scale-110 ease-in-out transition duration-300">
          <img
            class=" w-[52px] h-[52px]"
            src={GoodReadsImage}
            alt="GoodReads Profile"
          ></img>
        </button>
      </a>
    </div>
  );
}
