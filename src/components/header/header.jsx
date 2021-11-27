import { useContext, useEffect } from "react";
import * as FiIcons from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import avatar from "../../img/avatar.png";

import Context from "../../context/context";
import { getUser, getUserImg } from "../../actions/user";

function Header() {
  const context = useContext(Context);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userImg = useSelector((state) => state.userImg);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getUserImg());
  }, []);

  return (
    <div>
      <header className="header">
        <div className="">
          <h1 className="textLogo">Outlook</h1>
        </div>
        <div className="avatar">
          <img className="avatar-img" src={avatar} alt="avatar"></img>
          {/* <img
            className="avatar-img"
            // src={`data:image/jpeg;base64,${userImg}`}
            src={window.URL.createObjectURL(userImg)}
            alt="avatar"
          ></img> */}
          <div className="dropdown">
            <button className="dropbtn">
              {user[0]?.displayName}
              <FiIcons.FiChevronDown />
            </button>
            <div className="dropdown-content">
              <p onClick={context.signOut}>Sign out</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
