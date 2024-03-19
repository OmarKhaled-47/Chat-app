import { Link } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";
import { useContext } from "react";
const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <div className=" flex-row navbar bg-base-100">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" to={"/"}>
          Ripple Room
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          {user && (
            <>
              <li>
                <Link onClick={() => logoutUser()} to={"/"}>
                  Logout
                </Link>
              </li>
            </>
          )}
          {!user && (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
