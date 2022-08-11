import React from "react";

function TextCard(props) {
  return (
    <div class="">
      <div class="grid bg-slate-100 drop-shadow-lg rounded-xl max-w-lg place-items-center">
        <p class="text-xl p-7 leading-relaxed">{props.content}</p>
      </div>
    </div>
  );
}

export default TextCard;
