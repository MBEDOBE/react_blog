import axios from "axios";
import "./sidebar.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt="new"
          className=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
          quia, id eligendi delectus voluptate? Possimus ratione, voluptatum
          fugiat hic perspiciatis nulla, quia praesentium eum ea odio
          perferendis! Maxime, harum.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="socialIcon fa-brands fa-facebook-square"></i>
          <i className="socialIcon fa-brands fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
