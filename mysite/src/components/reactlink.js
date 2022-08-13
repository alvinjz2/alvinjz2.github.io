import React from "react";
const image_path = require("./media/ReactIcon.png");

export default function ReactIcon() {
  return (
    <div class="pt-8 place-items-center">
      <a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/">
        <button class="flex overflow-hidden h-[54px] bg-white shadow-md rounded-full hover:scale-110 ease-in-out transition duration-300">
          <img class="w-[54px] h-[54px] p-1" src={image_path} alt="React"></img>
        </button>
      </a>
    </div>
  );
}
