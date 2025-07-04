import Drawer from "./Drawer.jsx";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <figure className="logo">
        <img src="./src/assets/images/logo.svg" alt="" />
      </figure>
      <ul className="nav-links">
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
      <Drawer className="drawer"/>
    </nav>
  );
}

export default Navbar;
