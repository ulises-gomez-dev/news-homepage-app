import { useState } from "react";
import "./App.css";

function App() {
  return <Navbar />;
}

function Navbar() {
  return (
    <nav class="navbar">
      <figure class="logo">
        <img src="../assets/images/logo.svg" alt="" />
      </figure>
      <ul class="nav-links">
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
    </nav>
  );
}

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button class="hamburger" onClick={toggleDrawer}>
        <img src="../assets/images/icon-menu.svg" alt=""/>
      </button>
    </div>
  );
}

export default App;
