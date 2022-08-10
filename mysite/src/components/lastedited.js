import React from "react";

export default function LastEdited() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return (
    <div class="p-6">
      <p class="text-xl text-center"> Last Edited</p>
      <p class="text-lg text-center">{today}</p>
    </div>
  );
}
