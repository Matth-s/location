import React from "react";
import { NavLink } from "react-router-dom";

const Links = [
  { name: "Accueil", link: "/accueil" },
  { name: "Outils", link: "/outils" },
  { name: "Vehicules", link: "/vehicules" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  return (
    <div className="header-container flex ">
      <nav>
        <ul className="flex">
          {Links.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              className={({ isActive }) =>
                isActive ? "link link__active" : "link"
              }
            >
              <li>{item.name}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
