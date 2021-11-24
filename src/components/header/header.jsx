import { useContext } from "react";
import Context from "../../context/context";

function Header() {
  const context = useContext(Context);

  return (
    <div>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h1>Outlook</h1>
            </div>
            <div className="col-6">
              {/* <image src="/Avatar.png" alt="Avatar" className="avatar"> */}
              {/* <p>Mahmood</p> */}
              {/* </image> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={context.signIn}
              >
                login
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={context.signOut}
              >
                logout
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
