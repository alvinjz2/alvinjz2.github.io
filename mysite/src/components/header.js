import React from "react";

function Header(props) {
  return (
    <p class="pb-10 text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-400 to-red-300">
      {props.title}
    </p>
  );
}

export default Header;
