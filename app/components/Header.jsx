import React from "react";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

const Header = () => {
  return (
    <div>
      <div className="text-bg-primary p-3 text-center border-bottom border-5 border-white">
        <h1>Welcome to Repos</h1>
        <nav className="nav nav-underline justify-content-center">
          <li>
            <Link className="nav-link link-light" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link link-light" href="/courses">
              Courses
            </Link>
          </li>
          <li className="dropdown">
            <Link
              className="nav-link link-light dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Code
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="/code/repos">
                  Repositories
                </Link>
              </li>
            </ul>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Header;
