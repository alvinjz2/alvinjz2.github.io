import React from "react";
const image_path = require("./media/SelfPhoto.jpg");

function PortraitPhoto(props) {
  return (
    <div class="">
      <div class="grid bg-slate-100 drop-shadow-lg rounded-xl max-w-lg place-items-center w-[60%] pl-4 pr-4 pt-4">
        <div class="grid grid-cols-1 place-items-center">
          <img class="object-scale-down" src={image_path} alt="Me" />
          <p class="italic place-items-center pt-2 pb-3">
            {" "}
            I'm an Eagle Scout!
          </p>
        </div>
      </div>
    </div>
  );
}

export default PortraitPhoto;
