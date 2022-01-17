import React from "react";
import styles from "./home.module.scss";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <section className={styles.app}>
      <h1 className={styles.appTitle}>crud app</h1>
      <Outlet />
    </section>
  );
};
