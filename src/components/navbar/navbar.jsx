import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";

import Context from "../../context/context";
import { getMailFolders, getMessagesFolder } from "../../actions/user";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();

  const mailFolders = useSelector((state) => state.mailFolders);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    dispatch(getMailFolders());
  }, []);

  //to show sidebar in window width up to 768
  // useEffect(() =>
  //   window.addEventListener(
  //     "resize",
  //     () => {
  //       // {window.innerWidth>768} ? "nav-menu active" : "nav-menu"
  //       if (window.innerWidth > 768) {
  //         setSidebar(true);
  //       } else {
  //         setSidebar(false);
  //       }
  //     },
  //     []
  //   )
  // );
  return (
    <div>
      <IconContext.Provider value={{ color: "#605e5c" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-item" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/">
                <FiIcons.FiInbox />
                <span>Inbox</span>
                {/* <span class="visually-hidden">New alerts</span> */}
                <span className="mail-count">
                  {
                    mailFolders.value?.find((v) => v.displayName === "Inbox")
                      .totalItemCount
                  }
                </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/archive">
                <FiIcons.FiArchive />
                <span>Archive</span>
                <span className="mail-count">
                  {
                    mailFolders.value?.find((v) => v.displayName === "Archive")
                      .totalItemCount
                  }
                </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/send">
                <FiIcons.FiSend />
                <span>Send</span>
                <span className="mail-count">
                  {
                    mailFolders.value?.find(
                      (v) => v.displayName === "Sent Items"
                    ).totalItemCount
                  }
                </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/drafts">
                <FiIcons.FiEdit3 />
                <span>Drafts</span>
                <span className="mail-count">
                  {
                    mailFolders.value?.find((v) => v.displayName === "Drafts")
                      .totalItemCount
                  }
                </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/spam">
                <FiIcons.FiSlash />
                <span>Spam</span>
                <span className="mail-count">
                  {
                    mailFolders.value?.find(
                      (v) => v.displayName === "Junk Email"
                    ).totalItemCount
                  }
                </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/trash">
                <FiIcons.FiTrash2 />
                <span>Trash</span>
                <span className="mail-count">
                  {
                    mailFolders.value?.find(
                      (v) => v.displayName === "Deleted Items"
                    ).totalItemCount
                  }
                </span>
              </Link>
            </li>
            {/* <li className="nav-text">
              <Link to="/unwanted">
                <FiIcons.FiXSquare />
                <span>Unwanted</span>
                <span className="mail-count">
                  {
                    mailFolders.value.find((v) => v.displayName === "Unwanted Items")
                      .totalItemCount
                  }
                </span>
              </Link>
            </li> */}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
