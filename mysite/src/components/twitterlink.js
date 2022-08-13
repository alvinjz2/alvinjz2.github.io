import React from "react";
const image_path = require("./media/TwitterIcon.png");

export default function TwitterIcon(props) {
  return (
    <div class="pb-10 pt-8 translate-y-[2px]">
      <a rel="noopener noreferrer" target="_blank" href={props.link}>
        <button class="flex overflow-visible w-[51px] h-[51px] bg-white shadow-md rounded-full hover:scale-110 ease-in-out transition duration-300">
          <img
            class=" h-[51px] p-[10px] translate-x-[1px] translate-y-[1px]"
            src={image_path}
            alt="Twitter Profile"
          ></img>
        </button>
      </a>
    </div>
  );
}
