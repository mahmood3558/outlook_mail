import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";

import Context from "../../context/context";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const context = useContext(Context);

  useEffect(() =>
    window.addEventListener(
      "resize",
      () => {
        // {window.innerWidth>768} ? "nav-menu active" : "nav-menu"
        if (window.innerWidth > 768) {
          setSidebar(true);
        } else {
          setSidebar(false);
        }
      },
      []
    )
  );

  return (
    <div>
      <IconContext.Provider value={{ color: "#605e5c" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        {/* ???????????????????????????????????????????????????????????????????????????????? */}
        {/* <nav className="nav-menu active">
          <ul className="nav-menu-items">
            <li className="nav-text">
              <Link to="/"></Link>
            </li>
            <li className="nav-text">
              <Link to="/">
                <AiIcons.AiFillHome />
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/reports">
                <IoIcons.IoIosPaper />
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/products">
                <FaIcons.FaCartPlus />
              </Link>
            </li>
          </ul>
        </nav> */}
        {/* ???????????????????????????????????????????????????????????????????????????????? */}
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
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/archive">
                <FiIcons.FiArchive />
                <span>Archive</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/send">
                <FiIcons.FiSend />
                <span>Send</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/drafts">
                <FiIcons.FiEdit3 />
                <span>Drafts</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/spam">
                <FiIcons.FiSlash />
                <span>Spam</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/trash">
                <FiIcons.FiTrash2 />
                <span>Trash</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/unwanted">
                <FiIcons.FiXSquare />
                <span>Unwanted</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
