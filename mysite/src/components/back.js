import React from "react";
import { useNavigate } from "react-router-dom";

export default function Back() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };
  return (
    <div class="pb-10 pt-8 place-items-center">
      <button
        onClick={routeChange}
        class="text-xl w-30 h-[52px] bg-zinc-200 py-3 px-6 drop-shadow-lg rounded-full hover:bg-indigo-100 ease-in-out transition duration-500"
      >
        Back
      </button>
    </div>
  );
}
