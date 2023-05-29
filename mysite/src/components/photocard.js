import React from "react";

function PhotoCard(props) {
  return (
    <div class="">
      <a rel="noopener noreferrer" target="_blank" href={props.link}>
        <div class="grid bg-white drop-shadow-lg rounded-xl max-w-lg place-items-center">
          <div class="grid grid-cols-1 place-items-center max-w-[300px] pt-3 px-3 max-h-fit">
            <img class="" src={props.path} alt={props.alt} />
            <p class=" place-items-center pt-[2px] pb-3">{props.caption}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PhotoCard;
