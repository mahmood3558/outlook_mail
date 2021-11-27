import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMailFolders, getMessagesFolder } from "../../actions/user";

function Send() {
  const dispatch = useDispatch();

  const folder = useSelector((state) => state.mailFolders);
  const mailFolderId = folder.value?.find(
    (v) => v.displayName === "Sent Items"
  ).id;

  const mail = useSelector((state) => state.messagesFolder);
  console.log(mail);

  useEffect(() => {
    dispatch(getMailFolders());
    if (mailFolderId) {
      dispatch(getMessagesFolder(mailFolderId));
    }
  }, []);

  return (
    <div className="page">
      <h1>Send</h1>
    </div>
  );
}

export default Send;
