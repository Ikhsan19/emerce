import { NavLink } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useRef, useState } from "react";
import "../App.css";

const Header = () => {
  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "rgb(253 230 138)" : "",
      transition: "color 0.3s ease"
    };
  };

  const Dropdownlist = [
    {
      title: "Cart",
      path: "/cart"
    },
    {
      title: "History",
      path: "/history"
    },
    {
      title: "Admin",
      path: "/admin"
    }
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuRef = useRef();
  const dropdownRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== dropdownRef.current) {
      setIsDropdownOpen(false);
    }
  });
  return (
    <div>
      <div className="bg-gray-500 pt-6">
        <div className="container flex justify-between mx-auto h-14 border border-red-600">
          <div>
            <NavLink to="/">
              <h1>EmerceApp</h1>
            </NavLink>
          </div>
          <nav className="border border-blue-600">
            <div className="flex space-x-8">
              <span>Hello, username</span>
              <div className="relative">
                <div>
                  <NavLink
                    ref={dropdownRef}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="navbarLink"
                  >
                    Dropdown
                    <span>
                      {isDropdownOpen ? (
                        <FaAngleUp className="inline ms-1" />
                      ) : (
                        <FaAngleDown className="inline ms-1" />
                      )}
                    </span>
                  </NavLink>
                </div>
                {isDropdownOpen && (
                  <div
                    ref={menuRef}
                    className="bg-gray-600 p-2 w-28 shadow-lg rounded-md top-8 absolute"
                  >
                    <div>
                      {Dropdownlist.map((menu) => (
                        <NavLink
                          onClick={() => setIsDropdownOpen(false)}
                          style={activeState}
                          className="p-1 cursor-pointer hover:text-[rgb(253,230,138)] block"
                          key={menu.title}
                          to={menu.path}
                        >
                          {menu.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
