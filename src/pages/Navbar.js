import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } =
    useAuth0();

   

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl">Quize Game</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>

          
          {
            user?.email === "admin@gmail.com" && 
            <li> <Link to = '/admin'>Admin Panel</Link></li>
          }

          {isAuthenticated ? (
            <>
            
            <li> <Link to = '/quize'>Quize</Link></li>
            <li> <Link to = '/profile'>profile</Link></li>
            <li>
              {" "}
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </li>
            </>
          ) : (
            <li>
              {" "}
              <button onClick={() => loginWithRedirect()}>Log In</button>{" "}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
