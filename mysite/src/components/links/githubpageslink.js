import React from "react";
import image_path from "../media/GitHubPages.svg";

export default function GitHubPagesIcon() {
  return (
    <div class="pt-8 translate-y-[5px]">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://pages.github.com/"
      >
        <button class="flex overflow-visible bg-black shadow-md rounded-md hover:scale-110 ease-in-out transition duration-300">
          <img
            class=" w-[72px] h-[48px] px-2 pt-1"
            src={image_path}
            alt="GitHub Pages"
          ></img>
        </button>
      </a>
    </div>
  );
}
