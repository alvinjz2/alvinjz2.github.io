import React from "react";
const github_link = "https://github.com/alvinjz2";
const image_path = require("./media/GitHubIcon.png");

export default function GitHubIcon() {
  return (
    <div class="pb-10 pt-8 place-items-center">
      <a rel="noopener noreferrer" target="_blank" href={github_link}>
        <button class="flex overflow-hidden h-[54px] bg-zinc-200 shadow-lg rounded-full hover:scale-110 ease-in-out transition duration-300">
          <img
            class="w-[54px] h-[54px]"
            src={image_path}
            alt="GitHub Profile"
          ></img>
        </button>
      </a>
    </div>
  );
}
