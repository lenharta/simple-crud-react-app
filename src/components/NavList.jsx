import React from "react";
import { Link } from "react-router-dom";

const navData = [
  {
    id: 1,
    title: "Post",
    path: "post"
  },
  {
    id: 2,
    title: "Contact",
    path: "/contact"
  }
  // {
  //   id: 3,
  //   title: "Home",
  //   path: "/"
  // },
];

const NavList = () => {
  return (
    <>
      <ul>
        {navData.map(({ title, path, id }) => (
          <li key={id}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavList;