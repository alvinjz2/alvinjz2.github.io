import React from "react";
const image_path = require("./media/GitHubIcon.png");

export default function GitHubIcon(props) {
  return (
    <div class="pt-8 place-items-center">
      <a rel="noopener noreferrer" target="_blank" href={props.link}>
        <button class="flex overflow-hidden h-[54px] bg-zinc-200 shadow-md rounded-full hover:scale-110 ease-in-out transition duration-300">
          <img class="w-[54px] h-[54px]" src={image_path} alt="GitHub"></img>
        </button>
      </a>
    </div>
  );
}