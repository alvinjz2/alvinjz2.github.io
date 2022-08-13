import React from "react";
import Back from "../components/back";
import DView from "../components/docviewer";
export default function Resume() {
  return (
    <div class="bg-gradient-to-r from-pink-100 to-sky-100 h-full w-full">
      <div class="grid place-items-center">
        <DView class />
        <Back />
      </div>
    </div>
  );
}
