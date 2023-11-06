import clsx from "clsx";
import { Outlet } from "react-router-dom";

import styles from "./_home.module.scss";

export const Layout = () => {
  return (
    <div className={clsx(styles.homeLayout)}>
      <header></header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};
