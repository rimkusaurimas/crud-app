import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { UserList } from "../UserList/UserList";
import styles from "./main-page.module.scss";

export const MainPage = () => {
  return (
    <div>
      <section className={styles.mainWidget}>
        <h2 className={styles.mainWidgetTitle}>Add yourself ➜</h2>
        <Link to={"/add-user"}>
          <Button variant="primary text-uppercase">
            add user
          </Button>
        </Link>
      </section>
      <UserList />
    </div>
  );
};
