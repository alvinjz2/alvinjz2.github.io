import React from "react";
import DiscordImage from "../media/DiscordIcon.png";

let discordLink = 'https://discord.gg/mQCJvGbFTm'

export default function DiscordIcon(props) {
  return (
    <div class="place-items-center">
      <a rel="noopener noreferrer" target="_blank" href={discordLink}>
        <button class="flex overflow-hidden h-[54px] w-[54px] bg-white-200 shadow-md rounded-full hover:scale-110 ease-in-out transition duration-300">
          <img class="w-[40px] h-[30px] translate-y-[12px] translate-x-[7px]" src={DiscordImage} alt="Discord"></img>
        </button>
      </a>
    </div>
  );
}
