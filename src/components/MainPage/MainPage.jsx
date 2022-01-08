import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { UserList } from "../UserList/UserList";
import styles from "./main-page.module.scss";

export const MainPage = () => {
  return (
    <div>
      <section className={styles.mainWidget}>
        <h2 className={styles.mainWidgetTitle}>People</h2>
        <Link to={"/add-user"}>
          <Button className={styles.mainWidgetButton} variant="dark">
            add user
          </Button>
        </Link>
      </section>
      <UserList />
      <p>No users yet..</p>
    </div>
  );
};
