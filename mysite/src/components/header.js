import React from "react";

function Header(props) {
  return (
    <div class="py-15">
    <div class="grid bg-white drop-shadow-md rounded-xl max-w-lg place-items-center">
    <p class="p-10 text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-violet-200 to-sky-300">
      {props.title}
    </p>

    </div>
  </div>

  );
}

export default Header;
