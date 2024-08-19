import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  const NavMenuItems = [
    {
      id: 1,
      menuLabel: "home",
      path: "/",
    },
    {
      id: 2,
      menuLabel: "about",
      path: "/about",
    },
    {
      id: 3,
      menuLabel: "services",
      path: "/services",
    },
    {
      id: 4,
      menuLabel: "portfolio",
      path: "/portfolio",
    },
    {
      id: 5,
      menuLabel: "pricing",
      path: "/pricing",
    },
    {
      id: 6,
      menuLabel: "team",
      path: "/team",
    },
    {
      id: 7,
      menuLabel: "contact",
      path: "/contact",
    },
    {
      id: 8,
      menuLabel: "blogs",
      path: "/blogs",
    },
  ];
  return (
    <ul>
      {NavMenuItems?.map((item) => (
        <li key={item.id}>
          <NavLink to={item.path} className="capitalize">
            {item.menuLabel}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
