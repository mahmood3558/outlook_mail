import React from "react";
import { useSelector } from "react-redux";

function Send() {
  const folder = useSelector((state) => state.mailFolders);
  const mailFolderId = folder[0].value.find(
    (v) => v.displayName === "Sent Items"
  ).id;

  return (
    <div className="reports">
      <h1>Send</h1>
    </div>
  );
}

export default Send;
