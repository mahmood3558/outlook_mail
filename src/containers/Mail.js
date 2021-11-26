import { useContext } from "react";
import { Route, Routes } from "react-router";

import Header from "../components/header/header.jsx";
import Navbar from "../components/navbar/navbar";
import Inbox from "../components/mailFolder/Inbox";
import Send from "../components/mailFolder/Send";
import Archive from "../components/mailFolder/Archive";
import Drafts from "../components/mailFolder/Drafts.jsx";
import Spam from "../components/mailFolder/Spam.jsx";
import Trash from "../components/mailFolder/Trash";
import Unwanted from "../components/mailFolder/Unwanted.jsx";

import Context from "../context/context.js";
import LoginPage from "../components/loginPage.jsx";

function Mail() {
  const context = useContext(Context);
  console.log("context.token");
  console.log(context.token);
  console.log("context.token");

  // Route & Routes
  return (
    <div>
      {(() => {
        if (!context.token) {
          return (
            <div>
              <LoginPage></LoginPage>
            </div>
            // <div>
            //   <div className="fix">
            //     <Header />
            //     {/* <Navbar /> */}
            //   </div>
            //   <Routes>
            //     {/* <Route path="/" element={<Inbox />} /> */}
            //     <Route path="/send" element={<Send />} />
            //     <Route path="/archive" element={<Archive />} />
            //     <Route path="/drafts" element={<Drafts />} />
            //     <Route path="/spam" element={<Spam />} />
            //     <Route path="/trash" element={<Trash />} />
            //     <Route path="/unwanted" element={<Unwanted />} />
            //   </Routes>
            // </div>
          );
        } else {
          return (
            <div>
              <div className="fix">
                <Header />
                <Navbar />
              </div>
              <Routes>
                <Route path="/" element={<Inbox />} />
                <Route path="/send" element={<Send />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/drafts" element={<Drafts />} />
                <Route path="/spam" element={<Spam />} />
                <Route path="/trash" element={<Trash />} />
                <Route path="/unwanted" element={<Unwanted />} />
              </Routes>
            </div>
            // <div>
            //   <LoginPage></LoginPage>
            // </div>
          );
        }
      })()}
    </div>
  );
}

export default Mail;
