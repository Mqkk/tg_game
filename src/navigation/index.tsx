import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";

export const Navigation: FC = () => {
  return (
    <Routes>
      {ROUTES.map((route) => {
        return (
          <Route key={route.key} path={route.path} element={route.element()} />
        );
      })}
    </Routes>
  );
};
