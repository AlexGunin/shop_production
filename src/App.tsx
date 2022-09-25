import React, { Suspense } from "react";
import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync, MainPageAsync } from "./pages/index.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/main">Главная</Link>
      <Link to="about">О сайте</Link>
      <Suspense fallback={<div>...Загрузка</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/main" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>Изменить тему</button>
    </div>
  );
};

export default App;
