import React from "react";
import ChessImage from "../media/ChessIcon.png";

export default function ChessLink(props) {
  return (
    <div class="pt-8 translate-y-[1px] ml-[2px]">
      <a rel="noopener noreferrer" target="_blank" href={props.link}>
        <button class="flex overflow-visible bg-white shadow-md rounded-md hover:scale-110 ease-in-out transition duration-300">
          <img
            class=" w-[52px] h-[52px]"
            src={ChessImage}
            alt="Chess.com Profile"
          ></img>
        </button>
      </a>
    </div>
  );
}
