import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMailFolders, getMessagesFolder } from "../../actions/user";

function Drafts() {
  const dispatch = useDispatch();

  const folder = useSelector((state) => state.mailFolders);
  const mailFolderId = folder.value?.find((v) => v.displayName === "Drafts").id;

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
      <h1>Drafts</h1>
    </div>
  );
}

export default Drafts;
