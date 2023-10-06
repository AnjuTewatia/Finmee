import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";
import { MdCircleNotifications } from "react-icons/md";
import { BiGitPullRequest } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div id="container">
        <div id="navbar">
          {/* dashboad section */}
          <div id="nav">
            <div className="icon">
              <HiOutlineMenu />
            </div>
            <div className="icon">
              <BsGithub />
            </div>
            <p>Dashboard</p>
          </div>

          {/* profile section */}
          <div id="profile">
            <input type="text" placeholder="Type / to search" />
            <button> + </button>
            <div className="icons">
              <FaRegDotCircle />
            </div>
            <div className="icons">
              <BiGitPullRequest />
            </div>
            <div className="icons">
              <MdCircleNotifications />
            </div>

            <div className="icons">
              <CgProfile />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
