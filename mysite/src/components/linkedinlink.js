import React from "react";
const image_path = require("./media/LinkedInIcon.png");

export default function LinkedInIcon(props) {
  return (
    <div class="pb-10 pt-8 translate-y-[5px]">
      <a rel="noopener noreferrer" target="_blank" href={props.link}>
        <button class="flex overflow-visible bg-white shadow-md rounded-md hover:scale-110 ease-in-out transition duration-300">
          <img
            class=" w-[48px] h-[48px]"
            src={image_path}
            alt="LinkedIn Profile"
          ></img>
        </button>
      </a>
    </div>
  );
}
