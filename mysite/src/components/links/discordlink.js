import React from "react";
import DiscordImage from "../media/DiscordIcon.png";

let discordLink = 'https://discord.gg/mQCJvGbFTm'

export default function DiscordIcon(props) {
  return (
    <div class="place-items-center">
      <a rel="noopener noreferrer" target="_blank" href={discordLink}>
        <button class="flex overflow-hidden h-[54px] bg-zinc-200 shadow-md rounded-full hover:scale-110 ease-in-out transition duration-300">
          <img class="w-[54px] h-[54px]" src={DiscordImage} alt="Discord"></img>
        </button>
      </a>
    </div>
  );
}
