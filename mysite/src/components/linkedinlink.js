import React from "react";
const linkedin_link = "https://www.linkedin.com/in/alvinjz2/";
const image_path = require("./media/LinkedInIcon.png");

export default function LinkedInIcon() {
  return (
    <div class="pb-10 pt-8 translate-y-1">
      <a rel="noopener noreferrer" target="_blank" href={linkedin_link}>
        <button class="flex overflow-visible bg-white shadow-lg rounded-md hover:scale-110 ease-in-out transition duration-300">
          <img
            class=" w-[46px] h-[46px]"
            src={image_path}
            alt="LinkedIn Profile"
          ></img>
        </button>
      </a>
    </div>
  );
}
