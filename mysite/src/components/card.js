import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(props.path);
  };
  return (
    <button
      class="bg-white drop-shadow-lg rounded-xl min-w-xl max-w-lg p-10 transition ease-in-out duration-300 hover:scale-105"
      onClick={routeChange}
    >
      <div class="">
        <div class="grid grid-rows-2 place-items-center">
          <p class="text-4xl p-2 font-medium">{props.title} </p>
          <p class="text-xl">{props.content}</p>
        </div>
      </div>
    </button>
  );
}

export default Card;
