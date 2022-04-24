import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.css";

export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navIcon fa-brands fa-facebook-square"></i>
        <i className="navIcon fa-brands fa-twitter-square"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={user ? "/write" : "/login"}>
              Write
            </Link>
          </li>
          <li className="navListItem" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <Link to="/settings">
            <img src={PF + user.profilePic} alt="new" className="navImg" />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
