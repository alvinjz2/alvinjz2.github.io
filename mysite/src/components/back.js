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
        class="text-xl w-30 h-[52px] bg-neutral-100 py-3 px-6 drop-shadow-lg rounded-full hover:bg-rose-100 ease-in-out transition duration-500"
      >
        <p class="hover:underline underline-offset-4 decoration-dashed decoration-pink-500">
          Back
        </p>
      </button>
    </div>
  );
}
