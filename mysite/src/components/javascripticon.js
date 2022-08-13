import React from "react";
const image_path = require("./media/JavaScriptIcon.png");

export default function JavaScriptIcon() {
  return (
    <div class="pt-8 translate-y-[5px]">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.javascript.com/"
      >
        <button class="flex overflow-visible bg-white shadow-md rounded-md hover:scale-110 ease-in-out transition duration-300">
          <img
            class=" w-[48px] h-[48px]"
            src={image_path}
            alt="Javascript"
          ></img>
        </button>
      </a>
    </div>
  );
}
