import React from "react";
import GitHubImage from "../media/GitHubIcon.png";

export default function GitHubIcon(props) {
  return (
    <div class="place-items-center">
      <a rel="noopener noreferrer" target="_blank" href={props.link}>
        <button class="flex overflow-hidden h-[54px] bg-zinc-200 shadow-md rounded-full hover:scale-110 ease-in-out transition duration-300">
          <img class="w-[54px] h-[54px]" src={GitHubImage} alt="GitHub"></img>
        </button>
      </a>
    </div>
  );
}
