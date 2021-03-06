import React from "react";
import MainNavigation from "../layout/MainNavigation";
import styles from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
