import React from "react";
import { useSelector } from "react-redux";

function Unwanted() {
  // const folder = useSelector((state) => state.mailFolders);
  // const mailFolderId = folder[0].value.find(
  //   (v) => v.displayName === "Unwanted"
  // ).id;

  return (
    <div className="reports">
      <h1>Unwanted</h1>
    </div>
  );
}

export default Unwanted;
