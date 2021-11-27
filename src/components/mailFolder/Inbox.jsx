import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMailFolders, getMessagesFolder } from "../../actions/user";

import Context from "../../context/context";
import { Store } from "../../store";

function Inbox() {
  const dispatch = useDispatch();

  const folder = useSelector((state) => state.mailFolders);
  const mailFolderId = folder.value?.find((v) => v.displayName === "Inbox").id;

  const messages = useSelector((state) => state.messagesFolder);
  const mails = messages.value;
  console.log(mails);

  useEffect(() => {
    dispatch(getMailFolders());
    if (mailFolderId) {
      dispatch(getMessagesFolder(mailFolderId));
    }
  }, []);

  return (
    <div className="page">
      <div className=" container">
        <div className="row">
          <div className="col-md-4">From</div>
          <div className="col-md-7">Subject</div>
          <div className="col-md-1">Received</div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          {mails?.map((mail) => {
            return <div>{mail.from.emailAddress.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Inbox;

Store.dispatch(getMailFolders());
