import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authAction } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

function CollapsibleExample() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRole = useSelector((state) => state.auth.userRole);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    switch (userRole) {
      case "guest":
        setIsLoggedIn(false);
        break;
      case "admin":
        setIsLoggedIn(true);
        break;

      default:
        break;
    }
  }, [userRole]);

  const roles = {
    admin: [
      { text: "صفحه اصلی", to: "/" },
      { text: "ثبت فیلم/سریال", to: "/register-movie" },
    ],
    guest: [{ text: "صفحه اصلی", to: "/" }],
  };
  const role = roles[userRole];

  const exitHandler = () => {
    dispatch(authAction.chengeRole("guest"));
  };

  const registerMovieHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("editting", 0);
    setTimeout(() => {
      navigate("/register-movie", { replace: true });
    }, 50);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              className="bi bi-tv"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
            </svg>
            <span className="ms-2">مای تی وی</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {role.map((item) => {
              let link = <Link to={item.to}>{item.text} </Link>;

              if (item.to === "/register-movie") {
                link = (
                  <Link to={item.to} onClick={registerMovieHandler}>
                    {item.text}{" "}
                  </Link>
                );
              }
              return <Nav.Link key={Math.random()}>{link}</Nav.Link>;
            })}
            <Nav.Link>
              {isLoggedIn ? (
                <Link onClick={exitHandler} to="/login">
                  خروج{" "}
                </Link>
              ) : (
                <Link to="/login">ورود/ثبت نام </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
