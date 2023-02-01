import "./App.css";

import MovieList from "./components/list/MovieList";
import "./sass/main.scss";
import Login from "./components/form/Login/Login";
import RegisterMovie from "./components/form/registerMovie/RegisterMovie";
import Navbar from "./components/layout/navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const userRole = useSelector((state) => state.auth.userRole);

  const roles = {
    admin: [
      { text: "صفحه اصلی", to: "/", element: <MovieList /> },
      {
        text: "ثبت فیلم/سریال",
        to: "/register-movie",
        element: <RegisterMovie />,
      },
      { text: "ورود/ثبت نام", to: "/login", element: <Login /> },
    ],
    guest: [
      { text: "صفحه اصلی", to: "/", element: <MovieList /> },
      { text: "ورود/ثبت نام", to: "/login", element: <Login /> },
    ],
  };
  const role = roles[userRole];
  return (
    <div className="App d-flex flex-column">
      <Navbar />
      <Routes>
        {role.map((item) => {
          return (
            <Route path={item.to} element={item.element} key={Math.random()} />
          );
        })}
        <Route path={"*"} element={<MovieList />} key={Math.random()} />
      </Routes>
    </div>
  );
}

export default App;
