import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { TbUserCircle } from "react-icons/tb";

const NavBar = () => {
  const { user, logoutUser } = useContext(authContext);
  // console.log(user);

  const navLink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-secondary rounded-none text-third"
              : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allItems"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-secondary rounded-none text-third"
              : "text-white"
          }
        >
          All Art & craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addItme"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-secondary rounded-none text-third"
              : "text-white"
          }
        >
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/myItemList"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-secondary rounded-none text-third"
              : "text-white"
          }
        >
          My Art & Craft List
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <nav>
        <div className="navbar bg-primary md:px-20">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="mr-2 btn-ghost lg:hidden text-forth"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm  dropdown-content mt-3 z-20 p-2 shadow rounded-box w-52 bg-primary text-base font-semibold"
              >
                {navLink}
              </ul>
            </div>
            <Link to={"/"} className="text-xl font-bold text-white">
              Shin<span className="text-third">Art</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-3 text-base font-bold">
              {navLink}
            </ul>
          </div>
          <div className="navbar-end sm:space-x-3 space-x-2">
            {user ? (
              <>
              {/* ==== tool tip ======== */}
                <div className="w-10 h-10">
                  <a id="clickable">
                    {user?.photoURL ? (
                      <>
                        <img className="rounded-full" src={user.photoURL} alt="" />
                      </>
                    ) : (
                      <TbUserCircle className="text-4xl text-forth"></TbUserCircle>
                    )}
                  </a>
                  <Tooltip
                    anchorSelect="#clickable"
                    clickable
                    style={{ backgroundColor: "#D1BB9E", color: "#68400d" }}
                    className="z-20"
                  >
                    <div className="bg-secondary/100 md:p-3">
                      <p className="font-bold text-lg">User: Shahin</p>
                      <div className="flex justify-center">
                        <button
                          onClick={logoutUser}
                          className="btn md:px-5 px-2 text-lg font-semibold text-forth bg-third border-secondary hover:bg-primary rounded-none md:mt-3 mt-2"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </Tooltip>
                </div>
              </>
            ) : (
              <>
                <Link
                  to={"/login"}
                  className="btn md:px-5 px-2 text-lg font-semibold text-forth bg-secondary border-secondary hover:bg-third rounded-none"
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="btn md:px-5 px-2 text-lg font-semibold text-forth bg-secondary border-secondary hover:bg-third rounded-none"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
