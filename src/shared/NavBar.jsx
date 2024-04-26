import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
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
        <NavLink to={"/allItems"} className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-secondary rounded-none text-third"
              : "text-white"
          }>All Art & craft Items</NavLink>
      </li>
      <li>
        <NavLink to={"/addItme"} className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-secondary rounded-none text-third"
              : "text-white"
          }>Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to={"/myItemList"} className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-secondary rounded-none text-third"
              : "text-white"
          }>My Art & Craft List</NavLink>
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
            <Link to={'/'} className="text-xl font-bold text-white">
              Shin<span className="text-third">Art</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-3 text-base font-bold">{navLink}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn text-lg font-semibold text-forth bg-secondary border-secondary hover:bg-third rounded-none">Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
