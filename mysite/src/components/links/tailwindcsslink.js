import React from "react";
import TailwindImage from "../media/TailwindCSSIcon.png";

export default function TailwindCSSIcon() {
  return (
    <div class="pt-8 translate-y-[2px]">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://tailwindcss.com/"
      >
        <button class="flex overflow-visible w-[51px] h-[51px] bg-white shadow-md rounded-full hover:scale-110 ease-in-out transition duration-300">
          <img
            class="  p-[6px]  translate-y-[7px]"
            src={TailwindImage}
            alt="Twitter Profile"
          ></img>
        </button>
      </a>
    </div>
  );
}
