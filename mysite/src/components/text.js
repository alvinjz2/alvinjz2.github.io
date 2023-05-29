import React from "react";

function TextCard(props) {
  return (
    <div class="py-15">
      <div class="grid bg-white drop-shadow-md rounded-xl max-w-lg place-items-center">
        <p class="text-xl p-7 leading-relaxed">{props.content}</p>
      </div>
    </div>
  );
}

export default TextCard;
