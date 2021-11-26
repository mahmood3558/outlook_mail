import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMailFolders, getMessagesFolder } from "../../actions/user";

import Context from "../../context/context";
import { Store } from "../../store";

function Inbox() {
  const context = useContext(Context);
  const dispatch = useDispatch();

  const folder = useSelector((state) => state.mailFolders);
  const mail = useSelector((state) => state.messagesFolder);
  const mailFolderId = folder.value?.find((v) => v.displayName === "Inbox").id;
  console.log("mailFolderId");
  console.log(mailFolderId);
  console.log("mailFolderId");
  console.log("mailllllllll");
  console.log(mail);
  console.log("mailllllllll");

  useEffect(() => {
    dispatch(getMailFolders());
    dispatch(getMessagesFolder(mailFolderId));
  }, []);

  return (
    <div>
      <div className="home">
        <h1>Inbox</h1>
      </div>
    </div>
  );
}

export default Inbox;
