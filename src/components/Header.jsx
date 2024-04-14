import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import "../App.css";

const Header = () => {
  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "rgb(253 230 138)" : "",
      transition: "color 0.3s ease"
    };
  };
  return (
    <div>
      <div className="flex justify-between bg-gray-500">
        <div>
          <h1>EmerceApp</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" style={activeState} className="navbarLink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={activeState} className="navbarLink">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" style={activeState} className="navbarLink">
                Product
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default Header;
