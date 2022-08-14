import React from "react";
import GmailImage from "../media/GmailIcon.png";

export default function GmailIcon(props) {
  return (
    <div class="pt-8 translate-y-[2px]">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`mailto: ${props.email}`}
      >
        <button class="flex overflow-visible bg-white shadow-md rounded-md hover:scale-110 ease-in-out transition duration-300">
          <img
            class=" w-[60px] h-[51px] px-2 pt-[2px]"
            src={GmailImage}
            alt="Email"
          ></img>
        </button>
      </a>
    </div>
  );
}
