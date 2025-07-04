import { useState } from "react";
import "../styles/Drawer.css";

function Drawer({ className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <button className="hamburger" onClick={toggleDrawer}>
        <img src="./src/assets/images/icon-menu.svg" alt="" />
      </button>
      <div className={`side-drawer${isOpen ? " open" : ""}`}>
        <button className="close-btn" onClick={toggleDrawer}>
          <img src="./src/assets/images/icon-menu-close.svg" alt="" />
        </button>
        <ul className="">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">New</a>
          </li>
          <li>
            <a href="">Popular</a>
          </li>
          <li>
            <a href="">Trending</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
