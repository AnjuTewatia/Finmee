import "./Navbar.css";
import React from "react";
import { useState, useEffect } from "react";
function NavLink() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Function for scrolling navbar
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // If the user has scrolled down, add the "navbar-white" class
        setScrolling(true);
      } else {
        // If the user is at the top of the page, remove the "navbar-white" class
        setScrolling(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? "navbar-white" : ""}`}>
      <div>
        <div id="navbar">
          {/* Logo of ntwist */}
          <div>
            <img
              src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
              alt=""
            />
          </div>
          {/*  details of the company*/}
          <div id="second">
            <h4>Home</h4>
            <h4> Industries</h4>
            <h4>Al Software</h4>
            <h4>Blog</h4>
            <h4>Contact Us</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavLink;
